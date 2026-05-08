import { Users, CheckCircle2, Ban, Check, X } from 'lucide-react';

const children = [
  'Não teremos espaço kids ou ambiente apropriado para crianças durante a conferência.',
  'Por isso, não recomendamos a participação de crianças menores de 10 anos.',
  'Caso os pais ou responsáveis optem por levar crianças, a permanência será de total responsabilidade e supervisão da família.',
  'Crianças a partir de 10 anos precisam possuir ingresso individual.',
];

const tips = [
  'Leve sua garrafinha de água',
  'Evite transitar durante as ministrações',
  'Mantenha o celular no modo silencioso',
  'Fique atento aos horários das sessões',
];

const forbidden = [
  'Guardar lugares',
  'Entrar com alimentos na nave',
];

const InformacoesImportantesSection = () => (
  <section id="informacoes" className="bg-rvl-creme-bg py-20 md:py-28 px-6 scroll-mt-40 md:scroll-mt-44">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-rvl-laranja font-medium mb-2 uppercase tracking-wider text-sm font-inter">
          Atenção
        </p>
        <h2 className="font-bebas text-rvl-escuro tracking-wide leading-none" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)' }}>
          INFORMAÇÕES IMPORTANTES
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-rvl-escuro/5 p-6">
          <h3 className="font-bebas text-rvl-escuro text-2xl tracking-wide mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-rvl-laranja" strokeWidth={1.5} />
            Crianças
          </h3>
          <ul className="space-y-3">
            {children.map((text, i) => (
              <li key={i} className="flex items-start gap-2 font-inter text-rvl-escuro/60 text-xs leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-rvl-laranja/60 flex-shrink-0 mt-1.5" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-rvl-escuro/5 p-6">
          <h3 className="font-bebas text-rvl-escuro text-2xl tracking-wide mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-rvl-laranja" strokeWidth={1.5} />
            Dicas
          </h3>
          <ul className="space-y-3">
            {tips.map((text) => (
              <li key={text} className="flex items-center gap-2 font-inter text-rvl-escuro/70 text-xs">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" strokeWidth={2.5} />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-rvl-escuro/5 p-6">
          <h3 className="font-bebas text-rvl-escuro text-2xl tracking-wide mb-4 flex items-center gap-2">
            <Ban className="w-6 h-6 text-rvl-laranja" strokeWidth={1.5} />
            Não Permitido
          </h3>
          <ul className="space-y-3">
            {forbidden.map((text) => (
              <li key={text} className="flex items-center gap-2 font-inter text-rvl-escuro/70 text-xs">
                <X className="w-4 h-4 text-red-500 flex-shrink-0" strokeWidth={2.5} />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default InformacoesImportantesSection;
