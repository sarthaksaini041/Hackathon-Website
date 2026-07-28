import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper';
import GalleryLightbox from '../ui/GalleryLightbox';

const images = [
  { src: '/gallery/gallery-1.webp', alt: 'Participants coding' },
  { src: '/gallery/gallery-2.webp', alt: 'Team collaboration' },
  { src: '/gallery/gallery-3.webp', alt: 'Hackathon venue' },
  { src: '/gallery/gallery-4.webp', alt: 'Keynote presentation' },
  { src: '/gallery/gallery-5.webp', alt: 'Developers working' },
  { src: '/gallery/gallery-6.webp', alt: 'Workspace setup' },
  { src: '/gallery/gallery-7.webp', alt: 'Stage keynote' },
  { src: '/gallery/gallery-8.webp', alt: 'Project presentation' },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  function openLightbox(index) {
    setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function prevImage() {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }

  function nextImage() {
    setLightboxIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }

  return (
    <SectionWrapper id="gallery" dark className="bg-bg dark:bg-dark-bg">
      <SectionHeader
        title="Gallery"
        subtitle="Moments from previous editions. See the energy, creativity, and collaboration in action."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: (index % 8) * 0.06 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => openLightbox(index)}
            className="relative w-full h-64 overflow-hidden rounded-2xl neumorph-sm cursor-pointer group bg-slate-200 dark:bg-dark-surface border-0"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.button>
        ))}
      </div>

      <GalleryLightbox
        images={images.map((i) => i.src)}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </SectionWrapper>
  );
}
