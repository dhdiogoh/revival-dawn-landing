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

        <div className="font-inter text-rvl-creme/90 max-w-2xl text-center leading-relaxed space-y-5 mb-8">
          <p>
            O tema da Revival Conference 2026 nasce de uma convicção: noites foram e ainda estão sendo atravessadas, mas uma nova estação se abre.
          </p>
          <p>
            Como nação, reconhecemos que vivemos tempos desafiadores e, por vezes, sombrios. Ainda assim, cremos que nada foge da soberania de Deus. Este amanhecer não nasce da esperança depositada em homens.
          </p>
          <blockquote className="font-bebas text-2xl md:text-3xl tracking-widest text-rvl-creme mx-auto my-8 py-3 w-fit border-y border-rvl-creme/20 text-center">
            NASCE DA CONFIANÇA NO SENHOR.
          </blockquote>
          <p>
            E quanto maior a escuridão, mais visível se torna a luz que a Igreja do Senhor carrega.
            Cremos que Deus está se movendo sobre a Igreja no Brasil, e que este é um tempo de posicionamento, entrega, busca e fluir no Espírito Santo.
          </p>
          <div className="text-rvl-creme font-bebas tracking-widest text-2xl md:text-3xl pt-4 pb-2 space-y-1">
            <p>UM TEMPO DE AVIVAMENTO PARA A IGREJA.</p>
            <p>PARA O NORTE DO BRASIL.</p>
            <p>E PARA AS NAÇÕES!</p>
          </div>
        </div>

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
