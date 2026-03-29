import { useNavigate } from 'react-router-dom';
import {
  Utensils,
  Clock,
  Smartphone,
  Layers,
  ArrowRight,
  BookOpen,
  Flame,
  HandIcon,
  Music,
  Heart,
} from 'lucide-react';

const fastingTypes = [
  {
    icon: Utensils,
    title: 'Jejum alimentar parcial',
    desc: 'Abrir mão de algum tipo de alimento (ex: doces, café, refeições específicas)',
  },
  {
    icon: Clock,
    title: 'Jejum por período',
    desc: 'Ficar algumas horas do dia sem se alimentar (ex: jejum de 6h, 12h ou mais)',
  },
  {
    icon: Smartphone,
    title: 'Jejum de distrações',
    desc: 'Reduzir ou cortar redes sociais, entretenimento ou qualquer coisa que roube seu foco',
  },
  {
    icon: Layers,
    title: 'Jejum combinado',
    desc: 'Unir mais de um tipo de jejum (ex: alimento + redes sociais)',
  },
];

const dailyFlow = [
  { icon: Music,    label: 'Louvor e adoração' },
  { icon: BookOpen, label: 'Leitura da Palavra (capítulo do dia)' },
  { icon: Flame,    label: 'Busca pela Presença' },
  { icon: HandIcon, label: 'Intercessão (pauta do dia)' },
  { icon: Heart,    label: 'Oração pessoal' },
];

const JejumInfoSections = () => {
  const navigate = useNavigate();

  return (
    <div id="jejum-info">
      {/* ── Bloco 1: O que é ─────────────────────────────────── */}
      <section className="bg-rvl-creme py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-inter text-rvl-laranja uppercase tracking-[0.3em] text-xs mb-4">
            JEJUM DE 40 DIAS — RVL CONFERENCE
          </p>
          <h2 className="font-bebas text-5xl md:text-7xl text-rvl-escuro tracking-wide mb-8 leading-tight">
            O QUE É O JEJUM<br />DE 40 DIAS?
          </h2>
          <p className="font-inter text-rvl-escuro/80 text-base md:text-lg leading-relaxed mb-6">
            O jejum de 40 dias da RVL será um tempo coletivo de alinhamento espiritual com o que cremos que Deus está fazendo na cidade de Belém.
          </p>
          <p className="font-inter text-rvl-escuro/70 text-base leading-relaxed mb-4">
            Durante esse tempo, nos posicionamos para:
          </p>
          <ul className="space-y-2 mb-8">
            {['ajustar o coração', 'silenciar distrações', 'fortalecer o espírito', 'e nos preparar para aquilo que Deus irá fazer!'].map((item) => (
              <li key={item} className="flex items-center gap-3 font-inter text-rvl-escuro/80 text-base">
                <ArrowRight className="w-4 h-4 text-rvl-laranja flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="border-l-4 border-rvl-laranja pl-6 mb-8">
            <p className="font-inter text-rvl-escuro font-semibold text-base md:text-lg leading-relaxed">
              A RVL JÁ COMEÇOU! E precisamos construir esse altar ao Senhor de entrega e adoração para o que viveremos dias 08 e 09 de maio no Hangar - Centro de Convenções da Amazônia.
            </p>
          </div>

          <p className="font-inter text-rvl-escuro/70 text-base leading-relaxed mb-4">
            São 40 dias caminhando juntos como corpo, com uma mesma direção:
          </p>
          <ul className="space-y-2 mb-8">
            {['Palavra', 'oração', 'consagração'].map((item) => (
              <li key={item} className="flex items-center gap-3 font-inter text-rvl-escuro/80 text-base font-medium">
                <ArrowRight className="w-4 h-4 text-rvl-laranja flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="font-inter text-rvl-escuro/70 text-base leading-relaxed">
            É um tempo de preparação espiritual que antecede a RVL Conference, onde cremos que viveremos um novo nível como igreja de Belém.
          </p>
        </div>
      </section>

      {/* ── Bloco 2: Tipos de jejum ──────────────────────────── */}
      <section className="bg-rvl-escuro py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-inter text-rvl-laranja uppercase tracking-[0.3em] text-xs mb-4">
            TIPOS DE JEJUM
          </p>
          <h2 className="font-bebas text-5xl md:text-7xl text-rvl-creme tracking-wide mb-4 leading-tight">
            ESCOLHA O SEU<br />FORMATO
          </h2>
          <p className="font-inter text-rvl-creme/50 text-base mb-12">
            Você pode escolher o formato que faz sentido para sua realidade:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {fastingTypes.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-rvl-creme/10 bg-white/5 p-6 space-y-3 hover:border-rvl-laranja/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-rvl-laranja/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-rvl-laranja" />
                  </div>
                  <span className="font-inter font-semibold text-rvl-creme text-sm">{title}</span>
                </div>
                <p className="font-inter text-rvl-creme/55 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bloco 3: Como escolher ───────────────────────────── */}
      <section className="bg-rvl-creme py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-inter text-rvl-laranja uppercase tracking-[0.3em] text-xs mb-4">
            COMO ESCOLHER O SEU JEJUM?
          </p>
          <h2 className="font-bebas text-5xl md:text-7xl text-rvl-escuro tracking-wide mb-10 leading-tight">
            ALGUMAS PERGUNTAS<br />SIMPLES
          </h2>

          <div className="space-y-4 mb-12">
            {[
              'O que hoje mais disputa minha atenção com Deus?',
              'O que, se eu abrir mão, vai gerar mais espaço espiritual na minha rotina?',
              'O que é desafiador, mas possível de sustentar por 40 dias?',
            ].map((q, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="font-bebas text-3xl text-rvl-laranja leading-none mt-0.5">{i + 1}</span>
                <p className="font-inter text-rvl-escuro/80 text-base leading-relaxed">{q}</p>
              </div>
            ))}
          </div>

          <div className="bg-rvl-escuro rounded-2xl p-8">
            <p className="font-inter text-rvl-creme/60 uppercase tracking-[0.2em] text-xs mb-5">
              O jejum precisa ser:
            </p>
            <div className="space-y-4">
              {[
                { label: 'intencional', desc: 'com propósito claro diante de Deus' },
                { label: 'sustentável', desc: 'possível de manter por 40 dias' },
                { label: 'espiritual', desc: 'jejum sem oração é dieta!' },
              ].map(({ label, desc }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-rvl-laranja flex-shrink-0" />
                  <div>
                    <span className="font-inter font-bold text-rvl-creme text-sm uppercase tracking-wide">{label}</span>
                    <span className="font-inter text-rvl-creme/50 text-sm"> — {desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bloco 4: Fluxo devocional + CTA ─────────────────── */}
      <section className="bg-rvl-escuro px-6 pt-20 md:pt-28 pb-0">
        {/* Topo escuro — título e descrição */}
        <div className="max-w-3xl mx-auto pb-14">
          <p className="font-inter text-rvl-laranja uppercase tracking-[0.3em] text-xs mb-4">
            COMO VIVER ESSES 40 DIAS?
          </p>
          <h2 className="font-bebas text-5xl md:text-7xl text-rvl-creme tracking-wide mb-6 leading-tight">
            FLUXO DEVOCIONAL<br />DIÁRIO
          </h2>
          <p className="font-inter text-rvl-creme/55 text-base leading-relaxed mb-4">
            Durante o jejum, você será direcionado diariamente através de:
          </p>
          <ul className="space-y-1 mb-6">
            {['devocionais', 'leitura bíblica', 'pautas de oração', 'momentos guiados'].map((item) => (
              <li key={item} className="flex items-center gap-2 font-inter text-rvl-creme/60 text-sm">
                <ArrowRight className="w-3.5 h-3.5 text-rvl-laranja flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="font-inter text-rvl-creme/55 text-base">
            A proposta é que você construa uma rotina constante.
          </p>
        </div>

        {/* Bloco claro — cards + CTA */}
        <div className="bg-rvl-creme rounded-t-3xl px-6 pt-10 pb-20 md:pb-28">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-3 mb-12">
              {dailyFlow.map(({ icon: Icon, label }, i) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-xl border border-rvl-escuro/8 bg-white hover:border-rvl-laranja/30 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 rounded-full bg-rvl-laranja/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-rvl-laranja" />
                  </div>
                  <div className="flex-1">
                    <p className="font-inter text-rvl-escuro text-sm font-medium">{label}</p>
                  </div>
                  <span className="font-bebas text-2xl text-rvl-escuro/20">{i + 1}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4 text-center">
              <p className="font-inter text-rvl-escuro/50 text-sm">
                Use o relógio devocional para guiar cada etapa do seu tempo com Deus.
              </p>
              <button
                onClick={() => window.location.href = '/jejum/timer'}
                className="bg-rvl-escuro text-rvl-creme rounded-full px-10 py-4 font-inter font-bold text-sm uppercase tracking-wide hover:opacity-80 hover:scale-105 transition-all"
              >
                INICIAR MEU DEVOCIONAL →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JejumInfoSections;
