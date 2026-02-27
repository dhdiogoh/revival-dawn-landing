const HeroSection = () => {
  return (
    <section className="hero-gradient relative min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center overflow-hidden px-6 py-12 md:py-16">
      {/* Noise overlay */}
      <div className="hero-noise absolute inset-0 pointer-events-none z-[1]" />

      <div className="relative z-[2] flex flex-col items-center gap-6 md:gap-8">
        {/* Logo area */}
        <div className="relative flex items-center justify-center gap-4 md:gap-8">
          <span className="hidden md:block font-inter text-rvl-creme uppercase tracking-widest text-xl md:text-2xl">
            UM NOVO
          </span>
          <img
            src="/images/rvl-26-logo-png.png"
            alt="Revival Conference 26 Logo"
            className="w-[260px] md:w-[420px]"
            style={{ mixBlendMode: 'screen' }}
          />
          <span className="hidden md:block font-inter text-rvl-creme uppercase tracking-widest text-xl md:text-2xl">
            AMANHECER
          </span>
        </div>

        {/* Mobile subtitle */}
        <div className="flex gap-6 md:hidden">
          <span className="font-inter text-rvl-creme uppercase tracking-widest text-lg">UM NOVO</span>
          <span className="font-inter text-rvl-creme uppercase tracking-widest text-lg">AMANHECER</span>
        </div>

        <p className="font-inter text-rvl-creme uppercase tracking-[0.4em] text-base md:text-lg">
          CONFERENCE 26'
        </p>

        {/* SVG curve */}
        <svg className="w-48 h-6 opacity-40" viewBox="0 0 200 24" fill="none">
          <path d="M0 20 Q50 0 100 12 Q150 24 200 4" stroke="hsl(var(--rvl-creme))" strokeWidth="1.5" fill="none" />
        </svg>

        {/* Date pill */}
        <div className="border border-rvl-creme/50 rounded-full px-4 py-1 text-rvl-creme text-sm md:text-base font-inter">
          08 e 09 de Maio de 2026 — Hangar, Belém/PA
        </div>

        {/* Verse */}
        <blockquote className="border-l-2 border-rvl-creme pl-4 max-w-md text-rvl-creme font-caveat text-lg md:text-xl text-left">
          "o choro pode <span className="line-through">durar uma noite</span>, mas a alegria vem pela manhã..."
        </blockquote>

        {/* CTA */}
        <a
          href="#formulario"
          className="bg-rvl-creme text-rvl-escuro rounded-full px-10 py-4 font-inter font-bold text-base md:text-lg uppercase tracking-wide hover:opacity-90 transition-opacity"
        >
          QUERO RECEBER NOVIDADES ↓
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
