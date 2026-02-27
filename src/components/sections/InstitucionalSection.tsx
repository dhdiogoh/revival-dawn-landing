const cards = [
  { num: '01', title: 'UNIDADE', text: 'Igrejas e líderes de diferentes denominações unidos por um só propósito: avivamento genuíno.' },
  { num: '02', title: 'EXCELÊNCIA', text: 'Cada detalhe pensado para honrar a Deus e proporcionar a melhor experiência possível.' },
  { num: '03', title: 'AVIVAMENTO', text: 'Mais que um evento — um movimento que transforma vidas, famílias e cidades inteiras.' },
];

const InstitucionalSection = () => {
  return (
    <section className="bg-rvl-creme-bg py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-bebas text-4xl md:text-6xl text-rvl-escuro tracking-wide mb-6">
          O QUE É A REVIVAL CONFERENCE?
        </h2>
        <p className="font-inter text-rvl-escuro/80 text-base md:text-lg max-w-3xl leading-relaxed mb-14">
          A Revival Conference é o maior encontro interdenominacional de avivamento do Norte do Brasil. Nasceu do desejo de posicionar Belém e a Amazônia no mapa do mover de Deus — reunindo igrejas, líderes e gerações em torno de um único propósito: avivamento genuíno.
        </p>

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
