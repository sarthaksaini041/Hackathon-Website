import { motion } from 'framer-motion';
import { Lightbulb, Users, Code } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper';

const cards = [
  {
    icon: Lightbulb,
    title: 'Why Participate?',
    description: 'Gain hands-on experience, network with industry professionals, and showcase your skills to top recruiters from leading tech companies.',
    color: 'text-primary',
  },
  {
    icon: Users,
    title: 'Who Can Join?',
    description: 'Students, developers, designers, and innovators of all skill levels. Whether you\'re a beginner or an expert, there\'s a place for you.',
    color: 'text-secondary',
  },
  {
    icon: Code,
    title: 'What You\'ll Build',
    description: 'Web apps, mobile apps, AI solutions, hardware projects, or anything you can imagine. The only limit is your creativity and 48 hours.',
    color: 'text-accent',
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        title="About Horizon"
        subtitle="A 48-hour innovation marathon where ideas come to life. Join us for an unforgettable experience of building, learning, and competing."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="neumorph rounded-3xl p-8 group"
          >
            <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl neumorph-sm ${card.color}`}>
              <card.icon size={26} />
            </div>
            <h3 className="text-xl font-bold font-heading text-text dark:text-dark-text mb-3">
              {card.title}
            </h3>
            <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
