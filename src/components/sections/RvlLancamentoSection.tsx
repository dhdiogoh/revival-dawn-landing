import { useState, useRef } from 'react';

const shirtImages = [
  { src: '/images/camisa-rvl1.jpg', pos: 'center' },
  { src: '/images/camisa-rvl2.jpg', pos: '50% 15%' },
  { src: '/images/camisa-rvl3.jpg', pos: 'top' },
  { src: '/images/camisa-rvl4.jpg', pos: '50% 30%' },
  { src: '/images/camisa-rvl5.jpg', pos: '50% 30%' },
];

const RvlLancamentoSection = () => {
  const [active, setActive] = useState(0);
  const touchStart = useRef(0);

  return (
    <section className="bg-rvl-creme-bg py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-rvl-laranja font-medium mb-2 uppercase tracking-wider text-sm font-inter">
            Merch Oficial
          </p>
          <h2 className="font-bebas text-rvl-escuro tracking-wide leading-none" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)' }}>
            T-SHIRT RVL 2026
          </h2>
        </div>

        {/* Imagem principal */}
        <div
          className="w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden bg-rvl-escuro/5 mb-3 shadow-sm"
          onTouchStart={e => { touchStart.current = e.touches[0].clientX; }}
          onTouchEnd={e => {
            const diff = touchStart.current - e.changedTouches[0].clientX;
            if (diff > 50) setActive(a => (a + 1) % shirtImages.length);
            if (diff < -50) setActive(a => (a - 1 + shirtImages.length) % shirtImages.length);
          }}
        >
          <img
            key={active}
            src={shirtImages[active].src}
            alt={`T-shirt RVL 2026 — foto ${active + 1}`}
            className="w-full h-full object-cover animate-in fade-in duration-300"
            style={{ objectPosition: shirtImages[active].pos }}
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {shirtImages.map(({ src, pos }, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                i === active ? 'border-rvl-laranja' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
              aria-label={`Ver foto ${i + 1}`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" style={{ objectPosition: pos }} />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RvlLancamentoSection;
