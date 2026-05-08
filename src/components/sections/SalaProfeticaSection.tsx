import { Check } from 'lucide-react';

const SalaProfeticaSection = () => (
  <section id="sala-profetica" className="bg-white py-20 md:py-28 px-6 scroll-mt-40 md:scroll-mt-44">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-rvl-laranja font-medium mb-2 uppercase tracking-wider text-sm font-inter">
          Experiência
        </p>
        <h2 className="font-bebas text-rvl-escuro tracking-wide leading-none" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)' }}>
          SALA PROFÉTICA
        </h2>
      </div>

      <div className="bg-rvl-creme-bg rounded-2xl border border-rvl-escuro/5 p-8 md:p-10 mb-8 text-center">
        <p className="font-inter text-rvl-escuro/70 text-base md:text-lg leading-relaxed mb-4">
          A Sala Profética funcionará durante os períodos da manhã e tarde, apenas no sábado. Não teremos Sala Profética na sexta-feira.
        </p>
        <p className="font-inter text-rvl-escuro/50 text-sm">
          As fichas serão limitadas e distribuídas no balcão de credenciamento.
        </p>
      </div>

      <div>
        <p className="font-inter text-rvl-escuro/40 text-xs uppercase tracking-widest font-semibold text-center mb-6">
          Quem pode participar
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Público geral', 'Caravanas', 'Lotes exclusivos'].map((group) => (
            <div key={group} className="flex items-center gap-3 bg-rvl-laranja/8 border border-rvl-laranja/15 rounded-xl px-5 py-4">
              <Check className="w-5 h-5 text-rvl-laranja flex-shrink-0" strokeWidth={2.5} />
              <span className="font-inter text-rvl-escuro/80 text-sm font-medium">{group}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SalaProfeticaSection;
