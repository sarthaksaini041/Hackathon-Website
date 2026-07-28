import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { useScrollSpy } from '../../hooks/useScrollSpy';

export default function Navbar({ dark, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = navLinks.map((l) => l.href.slice(1));
  const activeId = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleNavClick(href) {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function handleThemeToggle(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    if (!document.startViewTransition) {
      toggleTheme();
      return;
    }

    const transition = document.startViewTransition(() => {
      toggleTheme();
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath: dark ? clipPath.reverse() : clipPath,
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: dark
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        }
      );
    });
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/95 dark:bg-dark-bg/95 backdrop-blur-none'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button onClick={() => handleNavClick('#home')} className="flex items-center gap-2.5 cursor-pointer">
          <img src="/logo-sm.webp" alt="Horizon Logo" width="36" height="36" className="rounded-xl object-cover" />
          <span className="text-lg font-bold font-heading text-text dark:text-dark-text">
            Horizon
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-3 py-2 text-sm font-medium rounded-xl transition-colors cursor-pointer ${
                  isActive
                    ? 'text-primary'
                    : 'text-muted dark:text-dark-muted hover:text-text dark:hover:text-dark-text'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary"
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={handleThemeToggle}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-xl neumorph-sm text-muted dark:text-dark-muted hover:text-text dark:hover:text-dark-text cursor-pointer"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#register"
            onClick={(e) => { e.preventDefault(); handleNavClick('#register'); }}
            className="hidden md:inline-flex items-center rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-white hover:brightness-110 transition-all"
          >
            Register
          </a>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl neumorph-sm text-text dark:text-dark-text cursor-pointer"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-72 neumorph"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-border dark:border-dark-border">
                <span className="font-bold text-text dark:text-dark-text">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-xl neumorph-sm cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
              <nav className="flex flex-col p-4 gap-1">
                {navLinks.map((link) => {
                  const isActive = activeId === link.href.slice(1);
                  return (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted dark:text-dark-muted hover:bg-surface dark:hover:bg-dark-surface hover:text-text dark:hover:text-dark-text'
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
                <button
                  onClick={handleThemeToggle}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-muted dark:text-dark-muted hover:bg-surface dark:hover:bg-dark-surface hover:text-text dark:hover:text-dark-text transition-colors cursor-pointer"
                >
                  <span>{dark ? 'Light Mode' : 'Dark Mode'}</span>
                  {dark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <hr className="my-3 border-border dark:border-dark-border" />
                <a
                  href="#register"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#register'); }}
                  className="mt-2 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Register Now
                </a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
