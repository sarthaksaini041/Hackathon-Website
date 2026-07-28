import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper';
import { faq } from '../../data/faq';

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="neumorph rounded-2xl overflow-hidden mb-4">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between p-5 text-left cursor-pointer"
      >
        <span className="text-sm font-semibold text-text dark:text-dark-text pr-4">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={18} className="text-muted dark:text-dark-muted" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0">
              <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  function handleToggle(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <SectionWrapper id="faq">
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers. If you can't find what you're looking for, reach out to us."
      />
      <div className="mx-auto max-w-3xl">
        {faq.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
