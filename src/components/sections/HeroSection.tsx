const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/rvl-fundo-1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Logo area */}
      <div className="relative flex items-center justify-center gap-4 md:gap-8 mb-2">
        <span className="hidden md:block font-inter text-rvl-creme uppercase tracking-[0.35em] text-sm">
          UM NOVO
        </span>
        <img
          src="/images/rvl-26-logo-png.png"
          alt="Revival Conference 26 Logo"
          className="w-64 md:w-80"
          style={{ mixBlendMode: 'screen' }}
        />
        <span className="hidden md:block font-inter text-rvl-creme uppercase tracking-[0.35em] text-sm">
          AMANHECER
        </span>
      </div>

      {/* Mobile subtitle */}
      <div className="flex gap-6 md:hidden mb-2">
        <span className="font-inter text-rvl-creme uppercase tracking-[0.35em] text-xs">UM NOVO</span>
        <span className="font-inter text-rvl-creme uppercase tracking-[0.35em] text-xs">AMANHECER</span>
      </div>

      <p className="font-inter text-rvl-creme uppercase tracking-[0.4em] text-xs md:text-sm mb-6">
        CONFERENCE 26'
      </p>

      {/* SVG curve */}
      <svg className="w-48 h-6 mb-6 opacity-40" viewBox="0 0 200 24" fill="none">
        <path d="M0 20 Q50 0 100 12 Q150 24 200 4" stroke="hsl(var(--rvl-creme))" strokeWidth="1.5" fill="none" />
      </svg>

      {/* Date pill */}
      <div className="border border-rvl-creme/50 rounded-full px-4 py-1 text-rvl-creme text-sm font-inter mb-8">
        08 e 09 de Maio de 2026 — Hangar, Belém/PA
      </div>

      {/* Verse */}
      <blockquote className="border-l-2 border-rvl-creme pl-4 max-w-md text-rvl-creme font-caveat text-lg md:text-xl mb-10 text-left">
        "o choro pode <span className="line-through">durar uma noite</span>, mas a alegria vem pela manhã..."
      </blockquote>

      {/* CTA */}
      <a
        href="#formulario"
        className="bg-rvl-creme text-rvl-escuro rounded-full px-8 py-3 font-inter font-bold text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
      >
        QUERO RECEBER NOVIDADES ↓
      </a>
    </section>
  );
};

export default HeroSection;
