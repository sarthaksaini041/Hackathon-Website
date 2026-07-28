import { motion } from 'framer-motion';
import { Users, Trophy, GraduationCap, Building2, Globe } from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter';
import SectionWrapper from '../ui/SectionWrapper';

const stats = [
  { icon: Users, end: 500, label: 'Participants', suffix: '+' },
  { icon: Trophy, end: 60000, label: 'Prize Pool', prefix: '$' },
  { icon: GraduationCap, end: 40, label: 'Mentors', suffix: '+' },
  { icon: Building2, end: 15, label: 'Sponsors', suffix: '+' },
  { icon: Globe, end: 50, label: 'Universities', suffix: '+' },
];

export default function Statistics() {
  return (
    <SectionWrapper id="stats" dark className="bg-bg dark:bg-dark-bg">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="neumorph rounded-2xl p-5 sm:p-6 text-center"
          >
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl neumorph-sm text-primary">
              <stat.icon size={26} />
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-text dark:text-dark-text tabular-nums">
              <AnimatedCounter end={stat.end} suffix={stat.suffix || ''} prefix={stat.prefix || ''} />
            </div>
            <div className="mt-1.5 text-xs sm:text-sm font-medium text-muted dark:text-dark-muted uppercase tracking-wide">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
