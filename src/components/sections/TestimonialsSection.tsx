import { Play } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="bg-rvl-creme-bg py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-bebas text-4xl md:text-6xl text-rvl-escuro tracking-wide mb-2">
          TESTEMUNHOS
        </h2>
        <p className="font-inter text-rvl-escuro/60 mb-12">
          Histórias reais. Vidas transformadas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i}>
              {/* TODO: substituir pelos embeds reais do Instagram */}
              <div className="relative bg-muted rounded-xl overflow-hidden h-56 flex items-center justify-center">
                <div className="absolute inset-0 bg-[repeating-conic-gradient(hsl(var(--muted))_0%_25%,hsl(var(--muted-foreground)/0.05)_0%_50%)] bg-[length:20px_20px]" />
                <button className="relative z-10 w-14 h-14 border-2 border-rvl-creme rounded-full flex items-center justify-center bg-rvl-escuro/50 hover:bg-rvl-escuro/70 transition-colors">
                  <Play className="w-5 h-5 text-rvl-creme ml-0.5" />
                </button>
              </div>
              <p className="font-caveat italic text-rvl-escuro/70 mt-3 text-lg">
                {i === 1 ? '"Minha vida nunca mais foi a mesma depois daquele encontro."' : '"Vi Deus restaurar minha família em um único momento."'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
