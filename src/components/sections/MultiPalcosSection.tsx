import { Mic, MessageSquare, Headphones, type LucideIcon } from 'lucide-react';

interface Stage {
  Icon: LucideIcon;
  label: string;
}

const stages: Stage[] = [
  { Icon: Mic, label: 'Painéis' },
  { Icon: MessageSquare, label: 'Conversas Especiais' },
  { Icon: Headphones, label: 'Podcasts ao Vivo' },
];

const MultiPalcosSection = () => (
  <section id="multi-palcos" className="bg-rvl-creme-bg py-20 md:py-28 px-6 scroll-mt-40 md:scroll-mt-44">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-rvl-laranja font-medium mb-2 uppercase tracking-wider text-sm font-inter">
          Programação
        </p>
        <h2 className="font-bebas text-rvl-escuro tracking-wide leading-none" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)' }}>
          MULTI PALCOS
        </h2>
        <p className="font-inter text-rvl-escuro/60 text-sm md:text-base mt-4 max-w-3xl mx-auto">
          A RVL contará com um palco alternativo com painéis, conversas especiais e podcasts gravados ao vivo. Será um espaço de aprofundamento, troca e ativações ao longo da conferência, aberto ao público em momentos específicos da programação.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stages.map(({ Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl border border-rvl-escuro/5 shadow-sm text-center">
            <div className="w-14 h-14 rounded-full bg-rvl-laranja/8 flex items-center justify-center">
              <Icon className="w-7 h-7 text-rvl-laranja" strokeWidth={1.5} />
            </div>
            <span className="font-bebas text-rvl-escuro text-2xl tracking-wide">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MultiPalcosSection;
