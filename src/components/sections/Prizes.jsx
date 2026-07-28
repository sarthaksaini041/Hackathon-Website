import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper';
import { prizes } from '../../data/prizes';

export default function Prizes() {
  return (
    <SectionWrapper id="prizes" dark className="bg-bg dark:bg-dark-bg">
      <SectionHeader
        title="Prizes & Awards"
        subtitle="Over $20,000 in prizes to be won. Recognition across multiple categories celebrating different aspects of excellence."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {prizes.map((prize, index) => (
          <motion.div
            key={prize.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className={`neumorph rounded-3xl p-6 group relative overflow-hidden ${
              index === 0 ? 'lg:scale-105' : ''
            }`}
          >
            {index === 0 && (
              <div className="absolute top-0 right-0 rounded-bl-2xl bg-accent px-4 py-1 text-xs font-bold text-white">
                Grand Prize
              </div>
            )}
            <div className="text-4xl mb-4">{prize.rank}</div>
            <h3 className="text-xl font-bold font-heading text-text dark:text-dark-text mb-1">
              {prize.title}
            </h3>
            <p className="text-2xl font-extrabold font-display text-primary mb-3">
              {prize.amount}
            </p>
            <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">
              {prize.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
