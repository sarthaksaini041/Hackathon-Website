import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryLightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (index === null) return;

    function handleKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    }
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [index, onClose, onPrev, onNext]);

  if (index === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.85 }}
          className="relative max-h-[90vh] max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute -top-12 right-0 text-white hover:text-gray-300 cursor-pointer"
          >
            <X size={28} />
          </button>

          {index > 0 && (
            <button
              onClick={onPrev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 cursor-pointer"
            >
              <ChevronLeft size={36} />
            </button>
          )}

          <img
            src={images[index]}
            alt={`Gallery image ${index + 1}`}
            className="max-h-[85vh] w-auto rounded-2xl object-contain"
          />

          {index < images.length - 1 && (
            <button
              onClick={onNext}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 cursor-pointer"
            >
              <ChevronRight size={36} />
            </button>
          )}

          <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-white/80">
            {index + 1} / {images.length}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
