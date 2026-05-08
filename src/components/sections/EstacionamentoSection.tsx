import { Car, MapPin } from 'lucide-react';

const EstacionamentoSection = () => (
  <section id="estacionamento" className="bg-rvl-creme-bg py-20 md:py-28 px-6 scroll-mt-40 md:scroll-mt-44">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-rvl-laranja font-medium mb-2 uppercase tracking-wider text-sm font-inter">
          Logística
        </p>
        <h2 className="font-bebas text-rvl-escuro tracking-wide leading-none" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)' }}>
          ESTACIONAMENTO
        </h2>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-rvl-escuro/5 p-8 flex flex-col items-center gap-5 text-center">
          <div className="w-16 h-16 rounded-full bg-rvl-laranja/8 flex items-center justify-center">
            <Car className="w-8 h-8 text-rvl-laranja" strokeWidth={1.5} />
          </div>
          <p className="font-inter text-rvl-escuro/70 text-base leading-relaxed">
            O estacionamento do evento é privativo do Hangar Centro de Convenções da Amazônia.
          </p>
          <div className="flex items-center gap-2 text-rvl-laranja">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="font-inter text-sm font-medium">Hangar Centro de Convenções da Amazônia</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EstacionamentoSection;
