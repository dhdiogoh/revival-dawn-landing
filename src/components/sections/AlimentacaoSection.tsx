const AlimentacaoSection = () => (
  <section id="alimentacao" className="bg-white py-20 md:py-28 px-6 scroll-mt-40 md:scroll-mt-44">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-rvl-laranja font-medium mb-2 uppercase tracking-wider text-sm font-inter">
          Refeições
        </p>
        <h2 className="font-bebas text-rvl-escuro tracking-wide leading-none" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)' }}>
          ONDE COMER
        </h2>
        <p className="font-inter text-rvl-escuro/60 text-sm md:text-base mt-4 max-w-2xl mx-auto">
          Na área da RVL não será permitida a entrada com alimentos. Porém, o Hangar possui uma praça de alimentação onde você poderá realizar suas refeições.
        </p>
        <p className="font-inter text-rvl-escuro/60 text-sm mt-3 max-w-2xl mx-auto">
          Além disso, existem restaurantes próximos ao local do evento.
        </p>
      </div>
    </div>
  </section>
);

export default AlimentacaoSection;
