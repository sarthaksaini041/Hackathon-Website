import { motion } from 'framer-motion';

export default function SectionWrapper({ id, children, className = '', dark = false }) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 ${dark ? 'bg-bg dark:bg-dark-bg' : ''} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text dark:text-dark-text">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted dark:text-dark-muted max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
