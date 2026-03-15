import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

const PreSaleSection = () => {
  return (
    <section id="pre-venda" className="bg-rvl-creme-bg py-20 md:py-28 px-6 scroll-mt-0 md:scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left column */}
          <div>
            <p className="text-rvl-laranja font-medium mb-1 uppercase tracking-wider text-sm">
              Garanta seu lugar | RVL 26
            </p>
            <h2 className="font-bebas text-5xl md:text-6xl text-rvl-escuro tracking-wide mb-4 leading-tight">
              PRÉ VENDA
            </h2>
            <p className="font-inter text-rvl-escuro/80 mb-8 leading-relaxed text-base">
              A pré-venda está aberta com acessos especiais para quem não quer perder aquilo que
              Deus fará nesses dias!
            </p>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-rvl-laranja mt-0.5 flex-shrink-0 w-5 h-5" />
                <div>
                  <p className="font-inter font-semibold text-rvl-escuro text-sm mb-1">
                    Fila prioritária no check-in
                  </p>
                  <p className="font-inter text-sm text-rvl-escuro/70 leading-relaxed">
                    Ao chegar no evento você entra numa fila que será mais rápida para fazer check-in,
                    entrando primeiro na nave e tendo a tranquilidade de escolher seu lugar.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-rvl-laranja mt-0.5 flex-shrink-0 w-5 h-5" />
                <div>
                  <p className="font-inter font-semibold text-rvl-escuro text-sm mb-1">
                    Ficha Sala Profética incluída
                  </p>
                  <p className="font-inter text-sm text-rvl-escuro/70 leading-relaxed">
                    Acesso garantido à Sala Profética, um espaço único de ministração e encontro com Deus.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="text-rvl-laranja mt-0.5 flex-shrink-0 w-5 h-5" />
                <p className="font-inter text-sm text-rvl-escuro/80 leading-relaxed mt-0.5">
                  Aproveite o lote com acessos especiais para viver essa experiência!
                </p>
              </li>
            </ul>
          </div>

          {/* Right column — CTA card */}
          <div className="bg-rvl-escuro rounded-2xl p-8 md:p-10 flex flex-col items-center text-center shadow-xl">
            <div className="inline-block bg-rvl-laranja/20 border border-rvl-laranja/40 text-rvl-laranja text-xs font-inter font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Pré-venda aberta
            </div>

            <h3 className="font-bebas text-3xl md:text-4xl text-rvl-creme tracking-wide leading-tight mb-4">
              QUERO GARANTIR<br />MEU LUGAR NA RVL26
            </h3>

            <p className="font-inter text-rvl-creme/60 text-sm mb-8 leading-relaxed">
              Garanta agora seu ingresso com todos os acessos especiais antes que o lote encerre.
            </p>

            <a
              href="https://www.tiketo.com.br/evento/4610"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-rvl-laranja text-white rounded-xl py-4 px-6 font-inter font-bold text-sm uppercase tracking-wide hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_4px_24px_rgba(245,130,58,0.35)] flex items-center justify-center gap-2"
            >
              GARANTIR MEU INGRESSO
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PreSaleSection;
