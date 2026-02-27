const NewDawnSection = () => {
  return (
    <section className="climax-gradient relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
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
          Uma nova estação se abre. Não pela força dos homens — mas pela soberania de Deus sobre os tempos. Cristo é o nosso amanhecer.
        </p>

        <blockquote className="border border-rvl-creme/50 p-6 max-w-xl mx-auto text-center font-caveat text-xl md:text-2xl text-rvl-creme">
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
