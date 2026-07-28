import { motion } from 'framer-motion';
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper';
import { sponsors } from '../../data/sponsors';

function SponsorLogo({ name, tier, icon: Icon, color }) {
  return (
    <div className="neumorph rounded-3xl p-6 w-36 sm:w-44 flex items-center justify-center group cursor-pointer">
      <div className="text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-dark-card shadow-sm border border-border/50 dark:border-dark-border/50">
          {Icon ? <Icon size={30} style={{ color }} className="dark:brightness-125" /> : null}
        </div>
        <p className="text-sm font-bold text-text dark:text-dark-text group-hover:text-primary transition-colors">
          {name}
        </p>
        <p className="text-xs font-medium text-muted dark:text-dark-muted mt-0.5">
          {tier}
        </p>
      </div>
    </div>
  );
}

export default function Sponsors() {
  return (
    <SectionWrapper id="sponsors">
      <SectionHeader
        title="Our Sponsors"
        subtitle="Proudly supported by world-class technology organizations that empower developers everywhere."
      />

      {sponsors.platinum && sponsors.platinum.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xs font-bold text-primary uppercase tracking-widest text-center mb-6">
            Platinum Sponsors
          </h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {sponsors.platinum.map((sponsor) => (
              <SponsorLogo key={sponsor.name} {...sponsor} />
            ))}
          </div>
        </div>
      )}

      {sponsors.gold && sponsors.gold.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xs font-bold text-amber-500 uppercase tracking-widest text-center mb-6">
            Gold Sponsors
          </h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {sponsors.gold.map((sponsor) => (
              <SponsorLogo key={sponsor.name} {...sponsor} />
            ))}
          </div>
        </div>
      )}

      {sponsors.silver && sponsors.silver.length > 0 && (
        <div>
          <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest text-center mb-6">
            Silver Sponsors
          </h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {sponsors.silver.map((sponsor) => (
              <SponsorLogo key={sponsor.name} {...sponsor} />
            ))}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
