const friday = [
  { time: '18h00', event: 'Abertura dos portões + credenciamento' },
  { time: '19h15', event: 'Abertura da nave' },
  { time: '19h30', event: 'Início' },
  { time: '22h00', event: 'Encerramento' },
];

const saturday = [
  {
    period: 'MANHÃ',
    items: [
      { time: '09h00', event: 'Início' },
      { time: '12h30', event: 'Encerramento' },
    ],
  },
  {
    period: 'TARDE',
    items: [
      { time: '14h00', event: 'Abertura + início' },
      { time: '17h30', event: 'Encerramento' },
    ],
  },
  {
    period: 'NOITE',
    items: [
      { time: '18h30', event: 'Início' },
      { time: '22h30', event: 'Encerramento' },
    ],
  },
];

import { ImageCarousel } from '@/components/ImageCarousel';

const agendaImages = [
  '/images/programacao-rvl/workshop-rvl.jpg',
  '/images/programacao-rvl/workshop-rvl-2.jpg',
  '/images/preletores-rvl/dunamis-music-rvl.jpeg',
  '/images/preletores-rvl/link-music-rvl.jpeg',
  '/images/preletores-rvl/fhop-music-rvl.jpg',
];

const AgendaSection = () => (
  <section id="programacao" className="bg-rvl-creme-bg py-20 md:py-28 px-6 scroll-mt-40 md:scroll-mt-20">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-rvl-laranja font-medium mb-2 uppercase tracking-wider text-sm font-inter">
          08 e 09 de Maio
        </p>
        <h2 className="font-bebas text-rvl-escuro tracking-wide leading-none" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)' }}>
          PROGRAMAÇÃO
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Sexta-feira */}
        <div className="bg-rvl-escuro rounded-2xl overflow-hidden">
          <div className="bg-rvl-laranja px-6 py-4">
            <p className="font-inter text-white/70 text-xs uppercase tracking-widest font-semibold">Dia 01</p>
            <h3 className="font-bebas text-white text-3xl tracking-wide">Sexta-feira — 08 de Maio</h3>
          </div>
          <div className="p-6">
            <p className="font-inter text-rvl-laranja text-xs uppercase tracking-widest font-bold mb-4">NOITE</p>
            <div className="space-y-4">
              {friday.map(({ time, event }) => (
                <div key={time} className="flex items-start gap-4">
                  <span className="font-inter text-rvl-laranja text-sm font-bold w-14 flex-shrink-0">{time}</span>
                  <span className="font-inter text-rvl-creme/70 text-sm">{event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sábado */}
        <div className="bg-rvl-escuro rounded-2xl overflow-hidden">
          <div className="bg-rvl-vermelho px-6 py-4">
            <p className="font-inter text-white/70 text-xs uppercase tracking-widest font-semibold">Dia 02</p>
            <h3 className="font-bebas text-white text-3xl tracking-wide">Sábado — 09 de Maio</h3>
          </div>
          <div className="p-6 space-y-6">
            {saturday.map(({ period, items }) => (
              <div key={period}>
                <p className="font-inter text-rvl-laranja text-xs uppercase tracking-widest font-bold mb-3">{period}</p>
                <div className="space-y-3">
                  {items.map(({ time, event }) => (
                    <div key={time} className="flex items-start gap-4">
                      <span className="font-inter text-rvl-laranja text-sm font-bold w-14 flex-shrink-0">{time}</span>
                      <span className="font-inter text-rvl-creme/70 text-sm">{event}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image carousel */}
      <div className="aspect-video rounded-2xl overflow-hidden shadow-sm">
        <ImageCarousel images={agendaImages} altPrefix="Programação RVL" />
      </div>
    </div>
  </section>
);

export default AgendaSection;
