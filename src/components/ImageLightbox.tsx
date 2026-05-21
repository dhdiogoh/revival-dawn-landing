import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

const ImageLightbox = ({ images, index, onClose, onNext, onPrev }: ImageLightboxProps) => {
  const hasMultiple = images.length > 1;
  const { src, alt } = images[index];

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext?.();
    if (e.key === 'ArrowLeft')  onPrev?.();
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/92 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors z-10"
        onClick={onClose}
        aria-label="Fechar"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev */}
      {hasMultiple && onPrev && (
        <button
          className="absolute left-3 md:left-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors z-10"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Image */}
      <img
        key={src}
        src={src}
        alt={alt}
        className="max-w-full max-h-[92vh] object-contain rounded-xl shadow-2xl animate-in fade-in duration-150"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next */}
      {hasMultiple && onNext && (
        <button
          className="absolute right-3 md:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors z-10"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Próxima"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Counter */}
      {hasMultiple && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-inter text-white/50 text-xs">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default ImageLightbox;
