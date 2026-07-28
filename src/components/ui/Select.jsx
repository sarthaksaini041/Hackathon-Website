import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Select({ value, onChange, error, placeholder, options = [], name, onBlur, id }) {
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);

  const selected = options.find((o) => o.value === value);
  const display = selected ? selected.label : placeholder || 'Select...';

  const handleClickOutside = useCallback((e) => {
    if (selectRef.current && !selectRef.current.contains(e.target)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [open, handleClickOutside]);

  function handleSelect(optValue) {
    onChange({ target: { value: optValue, name } });
    setOpen(false);
    if (onBlur) onBlur();
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
    if (e.key === 'Escape') {
      setOpen(false);
    }
    if (e.key === 'ArrowDown' && open) {
      e.preventDefault();
      const currentIdx = options.findIndex((o) => o.value === value);
      const next = Math.min(currentIdx + 1, options.length - 1);
      if (options[next]) {
        handleSelect(options[next].value);
      }
    }
    if (e.key === 'ArrowUp' && open) {
      e.preventDefault();
      const currentIdx = options.findIndex((o) => o.value === value);
      const prev = Math.max(currentIdx - 1, 0);
      if (options[prev]) {
        handleSelect(options[prev].value);
      }
    }
  }

  return (
    <div ref={selectRef} className="relative">
      <button
        type="button"
        id={id}
        name={name}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        onBlur={onBlur}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={`w-full rounded-2xl neumorph-inset flex items-center justify-between px-4 py-3 text-sm text-left bg-transparent outline-none focus:ring-2 focus:ring-primary/30 transition-all cursor-pointer ${
          value ? 'text-text dark:text-dark-text' : 'text-muted/60 dark:text-dark-muted/60'
        } ${error ? 'ring-2 ring-red-400' : ''}`}
      >
        <span className="truncate">{display}</span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 ml-2 text-muted dark:text-dark-muted transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute left-0 top-full mt-1.5 w-full z-50 rounded-2xl py-2 shadow-xl max-h-60 overflow-y-auto border border-border dark:border-dark-border bg-white dark:bg-dark-card"
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={opt.value === value}
              onClick={() => handleSelect(opt.value)}
              className={`w-full px-4 py-3 text-sm text-left transition-colors cursor-pointer border-0 ${
                opt.value === value
                  ? 'text-primary font-semibold bg-primary/10'
                  : 'text-text dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-surface'
              } ${!opt.value ? 'text-muted/50 dark:text-dark-muted/50' : ''}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
