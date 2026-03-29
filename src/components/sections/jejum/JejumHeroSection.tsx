import { Timer } from 'lucide-react';

const JejumHeroSection = () => {

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
          <a
            href="#fluxo-devocional"
            className="flex items-center gap-2 bg-rvl-laranja text-white rounded-full px-8 py-3.5 font-inter font-bold text-sm uppercase tracking-wide hover:opacity-90 hover:scale-105 transition-all shadow-[0_0_40px_rgba(232,98,42,0.35)]"
          >
            <Timer className="w-4 h-4" />
            INICIAR DEVOCIONAL
          </a>
          <a
            href="https://chat.whatsapp.com/Lu7EaWpM7Lf2Jp89o1ehAf?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-full px-8 py-3.5 font-inter font-bold text-sm uppercase tracking-wide hover:opacity-90 hover:scale-105 transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.533 5.857L.054 23.25a.75.75 0 0 0 .916.99l5.629-1.763A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.512-5.228-1.405l-.374-.223-3.882 1.216 1.159-3.773-.245-.388A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            GRUPO DO JEJUM
          </a>
        </div>
      </div>
    </section>
  );
};

export default JejumHeroSection;
