import { Images } from 'lucide-react';

const galleries = [
  {
    label: 'Sexta-feira',
    description: 'Noite de abertura — 08 de Maio',
    href: 'https://photos.app.goo.gl/p93yWnkCJ7CG6VTC6',
    tag: 'DIA 01 · NOITE',
  },
  {
    label: 'Sábado de manhã',
    description: '09 de Maio — Sessão da manhã',
    href: 'https://photos.app.goo.gl/K3vZw6xCc26XcS8W6',
    tag: 'DIA 02 · MANHÃ',
  },
  {
    label: 'Sábado à tarde',
    description: '09 de Maio — Sessão da tarde',
    href: 'https://photos.app.goo.gl/Ven4Vn8aAkZwNrm59',
    tag: 'DIA 02 · TARDE',
  },
  {
    label: 'Sábado à noite',
    description: '09 de Maio — Sessão de encerramento',
    href: 'https://photos.app.goo.gl/bkJn8rqG6c7DWVjWA',
    tag: 'DIA 02 · NOITE',
  },
];

const GaleriaFotosSection = () => {
  return (
    <section id="fotos" className="bg-rvl-escuro py-20 md:py-28 px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-rvl-laranja font-medium mb-2 uppercase tracking-wider text-sm font-inter">
            Álbum completo
          </p>
          <h2
            className="font-bebas text-rvl-creme tracking-wide leading-none"
            style={{ fontSize: 'clamp(2rem, 7vw, 4rem)' }}
          >
            CONFIRA AS FOTOS AQUI
          </h2>
          <p className="font-inter text-rvl-creme/60 text-sm md:text-base mt-4 max-w-2xl mx-auto">
            Acesse os álbuns completos de cada sessão da RVL 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {galleries.map(({ label, description, href, tag }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 bg-rvl-creme/5 hover:bg-rvl-creme/10 border border-rvl-creme/10 hover:border-rvl-laranja/30 rounded-2xl p-6 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-rvl-laranja/10 group-hover:bg-rvl-laranja/20 flex items-center justify-center flex-shrink-0 transition-colors">
                <Images className="w-5 h-5 text-rvl-laranja" strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-inter text-[10px] text-rvl-laranja font-bold uppercase tracking-wider mb-0.5">
                  {tag}
                </p>
                <h3 className="font-bebas text-rvl-creme text-xl tracking-wide leading-tight">
                  {label}
                </h3>
                <p className="font-inter text-rvl-creme/50 text-xs mt-0.5">
                  {description}
                </p>
              </div>
              <svg
                className="w-4 h-4 text-rvl-creme/30 group-hover:text-rvl-laranja group-hover:translate-x-1 transition-all flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaleriaFotosSection;
