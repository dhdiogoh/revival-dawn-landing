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

const sexta = [
  { time: '18h30', title: 'Evangelho e Cultura', desc: 'aprendendo a dialogar com o mundo' },
  { time: '19h30', title: 'Escândalos na Igreja', desc: 'Falhas Humanas ou Crise Espiritual' },
];

const sabado = [
  { time: '9h00',  title: 'Abuso e Violência', desc: 'por que a igreja precisa falar disso?' },
  { time: '9h30',  title: 'Entre distrações e propósito', desc: 'o desafio da nova geração' },
  { time: '14h00', title: 'Ano de Eleições', desc: 'como um cristão deve se posicionar?' },
  { time: '14h30', title: 'Pelo Espírito e pela Palavra', desc: 'por que a igreja precisa dos dois?' },
  { time: '18h00', title: 'Glow', desc: 'A sobrecarga silenciosa da mulher moderna' },
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

      {/* Tipos de conteúdo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {stages.map(({ Icon, label }) => (
          <div key={label} className="flex items-center gap-3 p-5 bg-white rounded-2xl border border-rvl-escuro/5 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-rvl-laranja/8 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-rvl-laranja" strokeWidth={1.5} />
            </div>
            <span className="font-bebas text-rvl-escuro text-xl tracking-wide">{label}</span>
          </div>
        ))}
      </div>

      {/* Grade de programação */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sexta */}
        <div className="bg-rvl-escuro rounded-2xl overflow-hidden">
          <div className="bg-rvl-laranja px-6 py-4">
            <p className="font-inter text-white/70 text-xs uppercase tracking-widest font-semibold">Dia 01</p>
            <h3 className="font-bebas text-white text-3xl tracking-wide">Sexta-feira — 08 de Maio</h3>
          </div>
          <div className="p-6 space-y-5">
            {sexta.map(({ time, title, desc }) => (
              <div key={time} className="flex items-start gap-4">
                <span className="font-inter text-rvl-laranja text-sm font-bold w-14 flex-shrink-0">{time}</span>
                <div>
                  <p className="font-inter text-rvl-creme text-sm font-semibold leading-tight">{title}</p>
                  <p className="font-inter text-rvl-creme/50 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sábado */}
        <div className="bg-rvl-escuro rounded-2xl overflow-hidden">
          <div className="bg-rvl-vermelho px-6 py-4">
            <p className="font-inter text-white/70 text-xs uppercase tracking-widest font-semibold">Dia 02</p>
            <h3 className="font-bebas text-white text-3xl tracking-wide">Sábado — 09 de Maio</h3>
          </div>
          <div className="p-6 space-y-5">
            {sabado.map(({ time, title, desc }) => (
              <div key={time} className="flex items-start gap-4">
                <span className="font-inter text-rvl-laranja text-sm font-bold w-14 flex-shrink-0">{time}</span>
                <div>
                  <p className="font-inter text-rvl-creme text-sm font-semibold leading-tight">{title}</p>
                  <p className="font-inter text-rvl-creme/50 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MultiPalcosSection;
