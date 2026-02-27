const NewDawnSection = () => {
  return (
    <section className="climax-gradient relative min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center px-6 py-16 md:py-20">
      {/* Noise overlay */}
      <div className="hero-noise absolute inset-0 pointer-events-none z-[1]" />

      <div className="relative z-[2] flex flex-col items-center gap-6 md:gap-8">
        <p className="font-inter text-rvl-creme uppercase tracking-[0.3em] text-xs">
          SALMOS 30.5 · REVIVAL CONFERENCE 26
        </p>

        <h2 className="font-bebas text-6xl md:text-8xl text-rvl-creme tracking-wide text-center">
          UM NOVO AMANHECER
        </h2>

        <p className="font-inter text-rvl-creme/90 max-w-xl text-center leading-relaxed">
          O tema da Revival Conference 2026 nasce de uma convicção: noites foram e ainda estão sendo atravessadas, mas uma nova estação se abre. Como nação, reconhecemos que vivemos tempos desafiadores e, por vezes, sombrios. Ainda assim, cremos que nada foge da soberania de Deus.
        </p>

        <blockquote className="border border-rvl-creme/50 p-6 max-w-xl mx-auto text-center font-caveat text-xl md:text-2xl text-rvl-creme mb-6">
          "Este amanhecer não nasce da esperança depositada em homens. Nasce da confiança no Senhor."
        </blockquote>

        <a
          href="#formulario"
          className="border border-rvl-creme text-rvl-creme rounded-full px-8 py-3 font-inter font-bold text-sm uppercase tracking-wide hover:bg-rvl-creme/10 transition-colors"
        >
          QUERO FAZER PARTE →
        </a>
      </div>
    </section>
  );
};

export default NewDawnSection;
