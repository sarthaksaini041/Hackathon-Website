import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, PartyPopper, Code, Users, Upload, Scale, Trophy, Award } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper';
import { schedule } from '../../data/schedule';

const iconMap = {
  Calendar, Clock, PartyPopper, Code, Users, Upload, Scale, Trophy, Award,
};

export default function Schedule() {
  const [currentIdx, setCurrentIdx] = useState(-1);

  useEffect(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentDay = now.getDate();

    const scheduleDates = [
      { m: 7, d: 1 },
      { m: 7, d: 20 },
      { m: 7, d: 25 },
      { m: 7, d: 25 },
      { m: 7, d: 26 },
      { m: 7, d: 27 },
      { m: 7, d: 27 },
      { m: 7, d: 28 },
      { m: 7, d: 28 },
    ];

    let idx = -1;
    for (let i = 0; i < scheduleDates.length; i++) {
      if (
        currentMonth > scheduleDates[i].m ||
        (currentMonth === scheduleDates[i].m && currentDay >= scheduleDates[i].d)
      ) {
        idx = i;
      } else {
        break;
      }
    }
    setCurrentIdx(idx);
  }, []);

  return (
    <SectionWrapper id="schedule">
      <SectionHeader
        title="Event Schedule"
        subtitle="Mark your calendar. Here's what to expect during this exciting 4-day journey."
      />
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-6 top-0 h-full w-0.5 bg-border dark:bg-dark-border" />
        <div className="space-y-8">
          {schedule.map((item, index) => {
            const Icon = iconMap[item.icon] || Calendar;
            const isActive = index === currentIdx;
            const isPast = index < currentIdx;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative flex gap-6"
              >
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl neumorph-sm transition-all ${
                      isActive ? 'bg-primary text-white' : 'text-muted dark:text-dark-muted'
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                </div>
                <div className="flex-1 pb-6">
                  <div
                    className={`neumorph rounded-2xl p-5 transition-all ${
                      isActive ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {item.date}
                    </span>
                    <h3 className={`mt-1 text-lg font-bold font-heading ${
                      isPast
                        ? 'text-muted dark:text-dark-muted line-through'
                        : isActive
                        ? 'text-primary'
                        : 'text-text dark:text-dark-text'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted dark:text-dark-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
