import { CheckCircle2, Sparkles, ArrowRight, MapPin, Calendar } from 'lucide-react';

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

          {/* Right column — Ticket card */}
          <div className="relative">
            {/* Ticket shape */}
            <div className="bg-rvl-escuro rounded-2xl shadow-2xl overflow-visible relative">

              {/* Top stub */}
              <div className="px-8 pt-8 pb-6 text-center">
                <div className="inline-block bg-rvl-laranja/20 border border-rvl-laranja/40 text-rvl-laranja text-xs font-inter font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                  Pré-venda aberta
                </div>

                <h3 className="font-bebas text-3xl md:text-4xl text-rvl-creme tracking-wide leading-tight mb-5">
                  REVIVAL CONFERENCE 26
                </h3>

                {/* Event details row */}
                <div className="flex items-center justify-center gap-5 text-rvl-creme/50 text-xs font-inter mb-1">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    08 e 09 de Maio, 2026
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Hangar, Belém/PA
                  </span>
                </div>
              </div>

              {/* Tear line with notches */}
              <div className="relative flex items-center px-0">
                {/* Left notch */}
                <div className="absolute -left-3.5 w-7 h-7 rounded-full bg-rvl-creme-bg z-10" />
                {/* Dashed line */}
                <div className="w-full border-t-2 border-dashed border-white/15 mx-6" />
                {/* Right notch */}
                <div className="absolute -right-3.5 w-7 h-7 rounded-full bg-rvl-creme-bg z-10" />
              </div>

              {/* Bottom — CTA stub */}
              <div className="px-8 py-6 text-center">
                <p className="font-bebas text-xl text-rvl-creme/70 tracking-widest mb-1">
                  ACESSO ESPECIAL — 1º LOTE
                </p>
                <p className="font-inter text-rvl-creme/40 text-xs mb-6">
                  Garanta seu ingresso antes que o lote encerre.
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

        </div>
      </div>
    </section>
  );
};

export default PreSaleSection;
