import { useNavigate } from 'react-router-dom';
import { Timer } from 'lucide-react';

const JejumHeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="climax-gradient relative min-h-[70vh] flex flex-col items-center justify-center px-6 py-24 pt-40">
      <div className="hero-noise absolute inset-0 pointer-events-none z-[1]" />

      <div className="relative z-[2] flex flex-col items-center gap-5 text-center max-w-3xl mx-auto">
        <p className="font-inter text-rvl-creme/60 uppercase tracking-[0.3em] text-xs">
          REVIVAL CONFERENCE · 40 DIAS DE JEJUM
        </p>

        <h1 className="font-bebas text-7xl md:text-9xl text-rvl-creme tracking-wide leading-none">
          JEJUM DE<br />40 DIAS
        </h1>

        <p className="font-inter text-rvl-creme/80 text-base md:text-lg leading-relaxed max-w-xl">
          Um tempo coletivo de alinhamento espiritual com o que cremos que Deus está fazendo na cidade de Belém.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button
            onClick={() => navigate('/jejum/timer')}
            className="flex items-center gap-2 bg-rvl-laranja text-white rounded-full px-8 py-3.5 font-inter font-bold text-sm uppercase tracking-wide hover:opacity-90 hover:scale-105 transition-all shadow-[0_0_40px_rgba(232,98,42,0.35)]"
          >
            <Timer className="w-4 h-4" />
            INICIAR DEVOCIONAL
          </button>
          <a
            href="#jejum-info"
            className="flex items-center justify-center gap-2 border border-rvl-creme/30 text-rvl-creme rounded-full px-8 py-3.5 font-inter font-bold text-sm uppercase tracking-wide hover:border-rvl-creme/60 transition-all"
          >
            SAIBA MAIS
          </a>
        </div>
      </div>
    </section>
  );
};

export default JejumHeroSection;
