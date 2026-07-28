import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryLightbox({ items = [], index, onClose, onPrev, onNext }) {
  const [touchStart, setTouchStart] = useState(null);

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

  if (index === null || !items.length) return null;

  const currentItem = items[index] || {};

  function handleTouchStart(e) {
    setTouchStart(e.touches[0].clientX);
  }

  function handleTouchEnd(e) {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 40) {
      onNext();
    } else if (diff < -40) {
      onPrev();
    }
    setTouchStart(null);
  }

  const lightboxContent = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6 select-none"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-5 right-5 z-[1000000] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all cursor-pointer"
        >
          <X size={22} />
        </button>

        {/* Previous Button */}
        {index > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-[1000000] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all cursor-pointer"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        {/* Image & Caption Container (Vertically Centered) */}
        <motion.div
          key={index}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative max-h-[85vh] max-w-5xl flex flex-col items-center justify-center my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentItem.src}
            alt={currentItem.alt || `Gallery item ${index + 1}`}
            className="max-h-[75vh] w-auto rounded-3xl object-contain shadow-2xl border border-white/10"
          />

          {/* Caption & Counter */}
          <div className="mt-4 text-center">
            {currentItem.alt && (
              <p className="text-base font-semibold text-white/95">
                {currentItem.alt}
              </p>
            )}
            <p className="text-xs font-medium text-white/60 mt-1">
              {index + 1} of {items.length}
            </p>
          </div>
        </motion.div>

        {/* Next Button */}
        {index < items.length - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-[1000000] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all cursor-pointer"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );

  return typeof document !== 'undefined'
    ? createPortal(lightboxContent, document.body)
    : null;
}
