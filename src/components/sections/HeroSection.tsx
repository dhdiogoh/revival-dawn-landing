const HeroSection = () => {
  return (
    <section className="hero-gradient relative min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center overflow-hidden px-6 py-12 md:py-16">
      {/* Noise overlay */}
      <div className="hero-noise absolute inset-0 pointer-events-none z-[1]" />

      <div className="relative z-[2] flex flex-col items-center">
        {/* "UM NOVO" with lines */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-16 md:w-24 h-px bg-rvl-creme/50" />
          <span className="font-inter text-rvl-creme uppercase tracking-[0.5em] text-xs md:text-sm">
            UM NOVO
          </span>
          <span className="w-16 md:w-24 h-px bg-rvl-creme/50" />
        </div>

        {/* Logo — hero star */}
        <img
          src="/images/rvl-26-logo-png.png"
          alt="Revival Conference 26 Logo"
          className="w-[320px] md:w-[520px] lg:w-[600px]"
          style={{ mixBlendMode: 'screen' }}
        />

        {/* "AMANHECER" with lines */}
        <div className="flex items-center gap-4 mt-4 mb-2">
          <span className="w-16 md:w-24 h-px bg-rvl-creme/50" />
          <span className="font-inter text-rvl-creme uppercase tracking-[0.5em] text-xs md:text-sm">
            AMANHECER
          </span>
          <span className="w-16 md:w-24 h-px bg-rvl-creme/50" />
        </div>

        {/* CONFERENCE 26' */}
        <p className="font-inter text-rvl-creme uppercase tracking-[0.4em] text-base md:text-lg mb-6">
          CONFERENCE 26'
        </p>

        {/* Date / Location bar */}
        <div className="border border-rvl-creme/40 rounded-lg px-6 py-2.5 flex flex-col md:flex-row items-center gap-2 md:gap-6 text-rvl-creme font-inter text-sm mb-8">
          <span>📅 08 e 09 de maio de 2026</span>
          <span className="hidden md:inline text-rvl-creme/30">|</span>
          <span>📍 Hangar — Centro de Convenções da Amazônia</span>
          <span className="hidden md:inline text-rvl-creme/30">|</span>
          <span>Belém, PA</span>
        </div>

        {/* Verse */}
        <blockquote className="text-center max-w-md text-rvl-creme font-caveat text-lg md:text-xl mb-8 leading-relaxed">
          "O choro pode durar uma noite,<br />
          mas a alegria vem pela manhã."<br />
          <span className="text-base opacity-70">— Salmos 30.5</span>
        </blockquote>

        {/* CTA */}
        <a
          href="#formulario"
          className="bg-rvl-escuro/80 text-rvl-creme rounded-lg px-12 py-4 font-inter font-bold text-base md:text-lg uppercase tracking-[0.15em] hover:bg-rvl-escuro/90 transition-colors w-full max-w-md text-center"
        >
          QUERO RECEBER NOVIDADES ↓
        </a>

        <span className="text-rvl-creme/40 font-inter text-xs mt-4 tracking-widest">↓ role para conhecer</span>
      </div>
    </section>
  );
};

export default HeroSection;
