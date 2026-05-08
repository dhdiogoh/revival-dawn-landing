import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import ImageLightbox from '@/components/ImageLightbox';

const PreletoresSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="preletores" className="bg-rvl-creme-bg py-20 md:py-28 px-6 scroll-mt-40 md:scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-rvl-laranja font-medium mb-2 uppercase tracking-wider text-sm font-inter">
            RVL Conference 2026
          </p>
          <h2 className="font-bebas text-rvl-escuro tracking-wide leading-none" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)' }}>
            CONHEÇA NOSSOS PRELETORES
          </h2>
          <p className="font-inter text-rvl-escuro/60 text-sm md:text-base mt-4 max-w-3xl mx-auto">
            Durante os dois dias de conferência receberemos homens e mulheres que têm impactado diferentes esferas da sociedade através do Reino de Deus. Conheça os convidados que estarão conosco na RVL Conference 2026 e prepare seu coração para tudo o que iremos viver nesses dias.
          </p>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-sm cursor-zoom-in group"
          onClick={() => setOpen(true)}
        >
          <img
            src="/images/lineup-rvl-26.jpeg"
            alt="Line-up RVL Conference 2026"
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.015]"
          />
          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-200">
            <Maximize2 className="w-3.5 h-3.5 text-white" />
            <span className="text-white text-[11px] font-inter font-medium">Ampliar</span>
          </div>
        </div>

        {open && (
          <ImageLightbox
            src="/images/lineup-rvl-26.jpeg"
            alt="Line-up RVL Conference 2026"
            onClose={() => setOpen(false)}
          />
        )}
      </div>
    </section>
  );
};

export default PreletoresSection;
