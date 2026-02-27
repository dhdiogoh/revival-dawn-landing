const editions = [
  { year: '2021', theme: 'Do It Again', desc: 'A primeira edição que ousou acreditar no impossível.', side: 'left' },
  { year: '2022', theme: 'Unidade', desc: 'Igrejas de toda a cidade marchando juntas pela primeira vez.', side: 'right' },
  { year: '2023', theme: 'Manifesto', desc: 'Uma declaração profética sobre o Norte do Brasil.', side: 'left' },
  { year: '2024', theme: 'Atos', desc: 'O mover apostólico restaurado ao seu lugar de origem.', side: 'right' },
  { year: '2025', theme: 'Reset', desc: 'Um ano de pausa intencional. Preparando o terreno.', side: 'left' },
];

const TimelineSection = () => {
  return (
    <section className="bg-rvl-creme-bg py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bebas text-4xl md:text-6xl text-rvl-escuro tracking-wide text-center mb-2">
          NOSSA HISTÓRIA
        </h2>
        <p className="font-inter text-rvl-escuro/60 text-center mb-16">
          Cinco edições. Cinco capítulos de história.
        </p>

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
                  <div className="flex gap-3 flex-wrap">
                    {/* TODO: substituir por fotos reais */}
                    <div className="border-2 border-dashed border-muted-foreground/30 bg-muted rounded-lg h-32 w-40 flex items-center justify-center text-muted-foreground text-xs">
                      Foto
                    </div>
                    <div className="border-2 border-dashed border-muted-foreground/30 bg-muted rounded-lg h-32 w-40 flex items-center justify-center text-muted-foreground text-xs">
                      Foto
                    </div>
                  </div>
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
