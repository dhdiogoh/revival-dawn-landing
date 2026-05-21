import { useState } from 'react';
import ImageLightbox from '@/components/ImageLightbox';

const base = '/images/rvl26-images/oficiais';

const photoNames = [
  'THD_3500',
  'IMG_0896',
  'IMG_1191',
  'IMG_2621',
  'THD_3682',
  'THD_3731',
  'THD_3781',
  'THD_3809-2',
  'THD_3900',
];

const photos = photoNames.map((name) => ({
  thumb: `${base}/thumbs/${name}.webp`,
  full:  `${base}/full/${name}.webp`,
  alt:   `RVL 26 — ${name}`,
}));

// Foto extra só no mobile (preenche o vazio na 3ª linha do grid 2 colunas)
const mobileExtra = {
  thumb: `${base}/thumbs/THD_3682.webp`,
  full:  `${base}/full/THD_3682.webp`,
  alt:   'RVL 26 — THD_3682',
};

const allPhotos = [...photos, mobileExtra];

// Primeiras 5 vão no grid de destaque, últimas 4 no bloco 2×2
const heroPhotos   = photos.slice(0, 5);
const bottomPhotos = photos.slice(5, 9);

const EventPhotosSection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const next = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % allPhotos.length));
  const prev = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + allPhotos.length) % allPhotos.length));

  return (
    <section id="vivemos" className="bg-rvl-escuro py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-rvl-laranja font-medium mb-2 uppercase tracking-wider text-sm font-inter">
            Revival Conference 2026
          </p>
          <h2
            className="font-bebas text-rvl-creme tracking-wide leading-none"
            style={{ fontSize: 'clamp(2rem, 7vw, 4rem)' }}
          >
            O QUE VIVEMOS EM 2026
          </h2>
          <p className="font-inter text-rvl-creme/60 text-sm md:text-base mt-4 max-w-2xl mx-auto">
            Dois dias marcados pela presença de Deus, unidade e avivamento em Belém do Pará.
          </p>
        </div>

        {/* Grid de destaque — 1 grande (2×2) + 4 pequenas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[160px] md:auto-rows-[190px] mb-2 md:mb-3">
          {heroPhotos.map((photo, pos) => (
            <button
              key={photo.thumb}
              className={`rounded-xl overflow-hidden group cursor-zoom-in relative
                ${pos === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              `}
              onClick={() => open(pos)}
              aria-label={`Ver foto ${pos + 1}`}
            >
              <img
                src={photo.thumb}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}

          {/* Foto extra — só no mobile, preenche o vazio na 3ª linha */}
          <button
            className="md:hidden rounded-xl overflow-hidden group cursor-zoom-in relative"
            onClick={() => open(allPhotos.length - 1)}
            aria-label="Ver foto extra"
          >
            <img
              src={mobileExtra.thumb}
              alt={mobileExtra.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </button>
        </div>

        {/* Bloco 2×2 */}
        <div className="grid grid-cols-2 gap-2 md:gap-3 auto-rows-[160px] md:auto-rows-[220px]">
          {bottomPhotos.map((photo, pos) => (
            <button
              key={photo.thumb}
              className="rounded-xl overflow-hidden group cursor-zoom-in relative"
              onClick={() => open(5 + pos)}
              aria-label={`Ver foto ${6 + pos}`}
            >
              <img
                src={photo.thumb}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={allPhotos.map(({ full, alt }) => ({ src: full, alt }))}
          index={lightboxIndex}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}
    </section>
  );
};

export default EventPhotosSection;
