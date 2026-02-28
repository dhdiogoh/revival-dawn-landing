import { ImageCarousel } from '../ImageCarousel';

const editions = [
  { year: '2021', theme: 'Do It Again', desc: 'Um clamor para que Deus repetisse em nossa geração o que Ele já havia feito em outras.', side: 'left', images: ['/images/rvl-21-images/gustavo-paiva-rvl-21.JPG', '/images/rvl-21-images/vitor-ledo-rvl-21.JPG'] },
  { year: '2022', theme: 'Unidade', desc: 'Firmados em João 17, declarando uma Igreja unida, alinhada e fundamentada em Cristo.', side: 'right', images: ['/images/rvl-22-images/correder-de-fogo-rvl-22.JPG', '/images/rvl-22-images/dunamis-rvl-22.jpg'] },
  { year: '2023', theme: 'Manifesto', desc: 'Baseado em Romanos 8.19, anunciando uma geração que se manifesta como filhos de Deus no mundo.', side: 'left', images: ['/images/rvl-23-images/corredor-de-fogo-rvl-23.JPG', '/images/rvl-23-images/fhop-rvl-23.jpg'] },
  { year: '2024', theme: 'Atos', desc: 'Inspirados pela Igreja primitiva, vivendo o evangelho de forma prática, viva e transformadora.', side: 'right', images: ['/images/rvl-24-images/revival-box-dunamis-rvl-24.jpg', '/images/rvl-24-images/sala-profetica-rvl-24.jpg'] },
  { year: '2025', theme: 'Reset', desc: 'Um ano intencional de pausa, alinhamento e discernimento. Não era tempo de palcos — era tempo de processos. Tempo de responder a Deus e preparar o terreno para o que Ele estava construindo.', side: 'left' },
];

const TimelineSection = () => {
  return (
    <section className="bg-rvl-creme-bg py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bebas text-4xl md:text-6xl text-rvl-escuro tracking-wide text-center mb-6">
          O QUE JÁ VIVEMOS
        </h2>
        <div className="font-inter text-rvl-escuro/80 text-center max-w-3xl mx-auto leading-relaxed mb-16 px-4">
          Desde 2021, cada edição carregou um tema que marcou uma estação. Oramos e ouvimos de Deus de forma profética, nos posicionando, clamando e ativando o que Ele estava falando para que pudesse ser vivido, compartilhado e alcançar cada canto da nossa cidade.
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-rvl-laranja/40 -translate-x-px hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {editions.map((e) => (
              <div
                key={e.year}
                className={`md:flex items-start gap-8 ${e.side === 'right' ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`md:w-1/2 ${e.side === 'right' ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="font-bebas text-5xl text-rvl-laranja/30">{e.year}</span>
                  <h3 className="font-bebas text-2xl text-rvl-escuro tracking-wide">{e.theme}</h3>
                  <p className="font-inter text-sm text-rvl-escuro/70 mt-1 mb-4">{e.desc}</p>
                  {e.images && (
                    <div className="mt-4 flex justify-center md:justify-start">
                      <ImageCarousel images={e.images} altPrefix={`Revival ${e.year}`} />
                    </div>
                  )}
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}

            {/* Teaser 2026 */}
            <div className="md:flex items-start gap-8 md:flex-row-reverse">
              <div className="md:w-1/2 md:text-left">
                <p className="font-inter italic text-rvl-laranja text-sm">
                  → 2026: UM NOVO AMANHECER — em breve
                </p>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
