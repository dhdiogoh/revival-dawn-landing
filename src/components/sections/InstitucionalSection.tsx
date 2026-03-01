const cards = [
  { num: '01', title: 'UNIDADE', text: 'Igrejas, líderes e gerações reunidas em um só propósito: o avanço do Reino de Deus.' },
  { num: '02', title: 'EXCELÊNCIA', text: 'Acreditamos que a própria criação manifesta a excelência do nosso Deus. Por isso, buscamos refletir Seu caráter em tudo o que fazemos com zelo, organização, responsabilidade e honra, como quem serve ao Senhor.' },
  { num: '03', title: 'AVIVAMENTO', text: 'Não buscamos apenas momentos marcantes. Buscamos frutos que permanecem e vidas verdadeiramente transformadas.' },
];

const InstitucionalSection = () => {
  return (
    <section className="bg-rvl-creme-bg py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-bebas text-4xl md:text-6xl text-rvl-escuro tracking-wide mb-6">
          O QUE É A REVIVAL CONFERENCE?
        </h2>
        <div className="font-inter text-rvl-escuro/80 text-base md:text-lg max-w-4xl leading-relaxed mb-14 space-y-4">
          <p>
            A Revival Conference nasceu com um propósito de servir a cidade, clamar pelo avivamento em
            Belém e posicionar o Norte do Brasil dentro do que Deus está fazendo nesta geração.
            Cremos que vivemos um tempo profético, de ativação, maturidade e responsabilidade espiritual.
          </p>
          <p>
            A RVL não é apenas um evento anual. É um movimento contínuo de alinhamento, presença e
            ativação. Buscamos fortalecer cristãos saudáveis, promover unidade entre igrejas, ativar dons e chamados
            e levar o Reino de Deus às esferas da sociedade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.num} className="bg-background rounded-2xl p-8">
              <span className="font-bebas text-8xl text-rvl-laranja/20 leading-none">{c.num}</span>
              <h3 className="font-bebas text-2xl text-rvl-escuro tracking-wide mt-2 mb-3">{c.title}</h3>
              <p className="font-inter text-sm text-rvl-escuro/70 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitucionalSection;
