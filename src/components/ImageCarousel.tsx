import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ImageCarousel({ images, altPrefix }: { images: string[], altPrefix: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;

        // Mudar de imagem a cada 4 segundos
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images, currentIndex]);

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="relative w-full max-w-sm aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
            {images.map((img, idx) => (
                <img
                    key={idx}
                    src={img}
                    alt={`${altPrefix} ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}

            {images.length > 1 && (
                <>
                    <button
                        onClick={goToPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50 z-20"
                    >
                        <ChevronLeft className="w-5 h-5 -ml-0.5" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50 z-20"
                    >
                        <ChevronRight className="w-5 h-5 ml-0.5" />
                    </button>

                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
                        {images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-4 bg-rvl-laranja' : 'w-1.5 bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
