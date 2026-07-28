import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenLine } from 'lucide-react';

export default function FloatingRegisterButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToRegister() {
    const el = document.getElementById('register');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToRegister}
          aria-label="Register now"
          className="fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-white shadow-lg hover:brightness-110 cursor-pointer"
        >
          <PenLine size={18} />
          <span className="text-sm font-semibold">Register</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
