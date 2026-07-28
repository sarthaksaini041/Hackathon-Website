import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper';
import GalleryLightbox from '../ui/GalleryLightbox';

const galleryItems = [
  {
    id: 1,
    src: '/gallery/gallery-1.webp',
    alt: 'Participants coding late night',
    spanClass: 'col-span-1 row-span-2 sm:col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2',
    featured: true,
  },
  {
    id: 2,
    src: '/gallery/gallery-2.webp',
    alt: 'Team collaboration and ideation',
    spanClass: 'col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 lg:col-span-2 lg:row-span-1',
  },
  {
    id: 3,
    src: '/gallery/gallery-3.webp',
    alt: 'Hackathon main hall venue',
    spanClass: 'col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1',
  },
  {
    id: 4,
    src: '/gallery/gallery-4.webp',
    alt: 'Keynote presentation on stage',
    spanClass: 'col-span-1 row-span-1 sm:col-span-2 sm:row-span-1 lg:col-span-2 lg:row-span-1',
  },
  {
    id: 5,
    src: '/gallery/gallery-5.webp',
    alt: 'Developers building together',
    spanClass: 'col-span-1 row-span-2 sm:col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2',
    featured: true,
  },
  {
    id: 6,
    src: '/gallery/gallery-6.webp',
    alt: 'Workspace setup & dev rig',
    spanClass: 'col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1',
  },
  {
    id: 7,
    src: '/gallery/gallery-7.webp',
    alt: 'Stage presentation and live pitch',
    spanClass: 'col-span-1 row-span-1 sm:col-span-2 sm:row-span-1 lg:col-span-2 lg:row-span-1',
  },
  {
    id: 8,
    src: '/gallery/gallery-8.webp',
    alt: 'Team winning and celebrating awards',
    spanClass: 'col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1',
  },
];

function GalleryCard({ item, index, onSelect }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.07, ease: 'easeOut' }}
      animate={
        item.featured
          ? { y: [0, -5, 0] }
          : undefined
      }
      transition={
        item.featured
          ? {
              y: {
                duration: 5 + (index % 3),
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              },
            }
          : undefined
      }
      className={`group relative overflow-visible cursor-pointer z-0 hover:z-30 ${item.spanClass}`}
    >
      <div
        onClick={() => onSelect(index)}
        className="relative h-full w-full overflow-hidden rounded-3xl neumorph-sm transition-all duration-300 ease-out group-hover:scale-[1.04] group-hover:shadow-xl group-hover:shadow-primary/20 dark:group-hover:shadow-black/60"
      >
        {/* Skeleton Shimmer */}
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-slate-300 dark:bg-dark-surface rounded-3xl" />
        )}

        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  function openLightbox(index) {
    setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function prevImage() {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryItems.length - 1));
  }

  function nextImage() {
    setLightboxIndex((prev) => (prev < galleryItems.length - 1 ? prev + 1 : 0));
  }

  return (
    <SectionWrapper id="gallery" dark className="bg-bg dark:bg-dark-bg">
      <SectionHeader
        title="Gallery"
        subtitle="Moments from previous editions. Experience the energy, creativity, and collaboration in action."
      />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[210px] lg:auto-rows-[230px] gap-5 md:gap-6">
        {galleryItems.map((item, index) => (
          <GalleryCard
            key={item.id}
            item={item}
            index={index}
            onSelect={openLightbox}
          />
        ))}
      </div>

      <GalleryLightbox
        items={galleryItems}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </SectionWrapper>
  );
}
