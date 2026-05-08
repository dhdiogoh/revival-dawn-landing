import { useState } from 'react';
import { Map, Maximize2 } from 'lucide-react';
import ImageLightbox from '@/components/ImageLightbox';

const MAP_SRC = '/images/Mapa RVL 2026_page-0001 (2).jpg';

const AreasExperienciasSection = () => {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <section id="areas" className="bg-rvl-creme-bg py-20 md:py-28 px-6 scroll-mt-40 md:scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-rvl-laranja font-medium mb-2 uppercase tracking-wider text-sm font-inter">
            O Espaço
          </p>
          <h2 className="font-bebas text-rvl-escuro tracking-wide leading-none" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)' }}>
            ÁREAS & EXPERIÊNCIAS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow-sm border border-rvl-escuro/5 p-6">
            <h3 className="font-bebas text-rvl-escuro text-2xl tracking-wide mb-3">Hall</h3>
            <p className="font-inter text-rvl-escuro/70 text-sm leading-relaxed">
              O hall da RVL foi preparado para proporcionar experiências, conexões e espaços de convivência durante toda a conferência. Será um ambiente para networking, descanso, alimentação, patrocinadores, ativações especiais e nosso multi palco.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-rvl-escuro/5 p-6">
            <h3 className="font-bebas text-rvl-escuro text-2xl tracking-wide mb-3">Patrocinadores</h3>
            <p className="font-inter text-rvl-escuro/70 text-sm leading-relaxed mb-4">
              A RVL Conference conta com parceiros e patrocinadores que acreditam naquilo que Deus está construindo através desta geração.
            </p>
            <ul className="space-y-2">
              {['Stands oficiais dos patrocinadores', 'Ativações especiais', 'Produtos e experiências exclusivas'].map(item => (
                <li key={item} className="flex items-center gap-2 font-inter text-rvl-escuro/60 text-xs">
                  <span className="w-1 h-1 rounded-full bg-rvl-laranja flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-rvl-escuro/5 p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bebas text-rvl-escuro text-2xl tracking-wide">RVL Store</h3>
              <span className="bg-rvl-laranja/10 border border-rvl-laranja/20 text-rvl-laranja text-[10px] font-inter font-semibold uppercase tracking-widest px-2 py-1 rounded-full flex-shrink-0 ml-2 leading-tight">
                Quantidades limitadas
              </span>
            </div>
            <p className="font-inter text-rvl-escuro/70 text-sm leading-relaxed mb-4">
              A RVL Store estará funcionando durante os dois dias de evento.
            </p>
            <ul className="space-y-2">
              {['T-shirts oficiais', 'Stickers', 'Garrafas', 'Livros', 'Itens exclusivos da conferência'].map(item => (
                <li key={item} className="flex items-center gap-2 font-inter text-rvl-escuro/60 text-xs">
                  <span className="w-1 h-1 rounded-full bg-rvl-laranja flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mapa — expandível */}
        <div className="rounded-2xl overflow-hidden border border-rvl-escuro/10 shadow-sm">
          <div className="bg-white border-b border-rvl-escuro/8 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Map className="w-5 h-5 text-rvl-laranja" strokeWidth={1.5} />
              <h3 className="font-bebas text-rvl-escuro text-2xl tracking-wide">Mapa da Conferência</h3>
            </div>
            <button
              onClick={() => setMapOpen(true)}
              className="flex items-center gap-1.5 text-rvl-escuro/50 hover:text-rvl-laranja transition-colors text-xs font-inter font-medium"
              aria-label="Ampliar mapa"
            >
              <Maximize2 className="w-4 h-4" />
              <span className="hidden sm:inline">Ampliar</span>
            </button>
          </div>
          <div
            className="relative cursor-zoom-in group"
            onClick={() => setMapOpen(true)}
          >
            <img
              src={MAP_SRC}
              alt="Mapa da RVL Conference 2026"
              className="w-full object-contain bg-white transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-sm rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Maximize2 className="w-3.5 h-3.5 text-white" />
              <span className="text-white text-[11px] font-inter font-medium">Ver em tamanho completo</span>
            </div>
          </div>
        </div>

        {mapOpen && (
          <ImageLightbox
            src={MAP_SRC}
            alt="Mapa da RVL Conference 2026"
            onClose={() => setMapOpen(false)}
          />
        )}
      </div>
    </section>
  );
};

export default AreasExperienciasSection;
