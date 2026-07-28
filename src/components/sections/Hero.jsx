import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useCountdown } from '../../hooks/useCountdown';

function CountdownItem({ value, label }) {
  return (
    <div className="flex flex-col items-center neumorph-sm rounded-2xl px-3 py-2 sm:px-4 sm:py-3 min-w-0 flex-1 sm:flex-none sm:min-w-[70px]">
      <span className="text-lg sm:text-2xl md:text-3xl font-bold font-display text-text dark:text-dark-text tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] sm:text-xs text-muted dark:text-dark-muted uppercase tracking-wider mt-1">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const timeLeft = useCountdown();

  function handleScroll(href) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block neumorph-sm rounded-2xl px-4 py-2 text-xs font-semibold text-primary uppercase tracking-widest mb-6">
              August 25-28, 2026
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-text dark:text-dark-text leading-tight">
              Build the{' '}
              <span className="text-primary">Future</span>
              <br />
              <span className="text-secondary">in 48 Hours</span>
            </h1>

            <p className="mt-6 text-lg text-muted dark:text-dark-muted max-w-xl leading-relaxed">
              Join the most anticipated hackathon of the year. Collaborate with brilliant minds, 
              learn from industry mentors, and build solutions that make a real impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => handleScroll('#register')}
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-all cursor-pointer"
              >
                Register Now
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => handleScroll('#about')}
                className="inline-flex items-center gap-2 rounded-2xl neumorph-btn px-6 py-3 text-sm font-semibold text-text dark:text-dark-text cursor-pointer"
              >
                <Play size={18} />
                Learn More
              </button>
            </div>

            <div className="mt-12">
              <p className="text-xs font-medium text-muted dark:text-dark-muted uppercase tracking-wider mb-4">
                Hackathon starts in
              </p>
              <div className="flex gap-3">
                <CountdownItem value={timeLeft.days} label="Days" />
                <CountdownItem value={timeLeft.hours} label="Hours" />
                <CountdownItem value={timeLeft.minutes} label="Mins" />
                <CountdownItem value={timeLeft.seconds} label="Secs" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="relative neumorph rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="rounded-2xl neumorph-sm p-6 flex items-center justify-center"
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-2">
                          {['💡', '🚀', '🎯', '🏆'][i]}
                        </div>
                        <div className="text-xs font-medium text-muted dark:text-dark-muted">
                          {['Ideate', 'Build', 'Launch', 'Win'][i]}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 neumorph-sm rounded-2xl px-5 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-semibold text-text dark:text-dark-text">
                    500+ Participants
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
