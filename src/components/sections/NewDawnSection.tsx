const NewDawnSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20"
      style={{
        backgroundImage: 'url(/images/rvl-fundo-2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <p className="font-inter text-rvl-creme uppercase tracking-[0.3em] text-xs mb-8">
        SALMOS 30.5 · REVIVAL CONFERENCE 26
      </p>

      <h2 className="font-bebas text-6xl md:text-8xl text-rvl-creme tracking-wide text-center mb-6">
        UM NOVO AMANHECER
      </h2>

      <p className="font-inter text-rvl-creme/90 max-w-xl text-center leading-relaxed mb-10">
        Uma nova estação se abre. Não pela força dos homens — mas pela soberania de Deus sobre os tempos. Cristo é o nosso amanhecer.
      </p>

      <blockquote className="border border-rvl-creme/50 p-6 max-w-xl mx-auto text-center font-caveat text-xl md:text-2xl text-rvl-creme mb-10">
        "Este amanhecer não nasce da esperança depositada em homens. Nasce da confiança no Senhor."
      </blockquote>

      <a
        href="#formulario"
        className="border border-rvl-creme text-rvl-creme rounded-full px-8 py-3 font-inter font-bold text-sm uppercase tracking-wide hover:bg-rvl-creme/10 transition-colors"
      >
        QUERO FAZER PARTE →
      </a>
    </section>
  );
};

export default NewDawnSection;
