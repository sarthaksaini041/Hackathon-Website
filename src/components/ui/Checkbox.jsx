import { Check } from 'lucide-react';

export default function Checkbox({ checked, onChange, onBlur, name, error, id, children }) {
  function handleToggle() {
    onChange({ target: { checked: !checked, name } });
    if (onBlur) onBlur();
  }

  function handleKeyDown(e) {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleToggle();
    }
  }

  return (
    <label className="flex items-start gap-3 cursor-pointer group select-none">
      <div className="relative mt-0.5 flex-shrink-0">
        <button
          type="button"
          role="checkbox"
          id={id}
          name={name}
          aria-checked={!!checked}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          onBlur={onBlur}
          className={`flex h-5 w-5 items-center justify-center rounded-md border-2 transition-all duration-200 outline-none focus:ring-2 focus:ring-blue-500/40 cursor-pointer ${
            checked
              ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
              : 'border-gray-400 dark:border-gray-500 bg-white dark:bg-dark-card hover:border-blue-500'
          } ${error ? 'ring-2 ring-red-400 border-red-400' : ''}`}
        >
          {checked && <Check className="h-3.5 w-3.5 stroke-[3] text-white" />}
        </button>
      </div>
      <span className="text-sm text-text dark:text-dark-text">
        {children}
      </span>
    </label>
  );
}
