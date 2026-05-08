import { Utensils } from 'lucide-react';

const restaurants = [
  { name: 'Amazônia na Cuia', address: 'Av. Duque de Caxias, 1444 — Marco' },
  { name: "Churrascaria Boi D'Ouro", address: 'Av. Duque de Caxias, 427' },
  { name: 'Empório Amazônico', address: 'Tv. Alferes Costa, 2695' },
  { name: "Bob's", address: 'Praça de alimentação do Hangar Centro de Convenções da Amazônia' },
  { name: 'Praça de alimentação do Shopping Grão-Pará', address: '' },
];

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
          Além disso, existem restaurantes próximos ao local do evento:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {restaurants.map(({ name, address }) => (
          <div key={name} className="flex items-start gap-4 bg-rvl-creme-bg rounded-xl p-5 border border-rvl-escuro/5">
            <Utensils className="w-5 h-5 text-rvl-laranja flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <p className="font-inter text-rvl-escuro font-semibold text-sm">{name}</p>
              {address && (
                <p className="font-inter text-rvl-escuro/50 text-xs mt-0.5">{address}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AlimentacaoSection;
