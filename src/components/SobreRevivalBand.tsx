import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SobreRevivalBand = () => (
  <section className="bg-rvl-escuro py-14 px-6 border-b border-white/8">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
      <div>
        <p className="font-inter text-rvl-laranja text-xs uppercase tracking-widest font-medium mb-2">
          Conheça nossa história
        </p>
        <h2 className="font-bebas text-rvl-creme tracking-wide leading-tight" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}>
          O QUE É A REVIVAL CONFERENCE?
        </h2>
        <p className="font-inter text-rvl-creme/50 text-sm mt-3 max-w-lg mx-auto md:mx-0">
          Desde 2022 reunindo gerações no Norte do Brasil — conheça a história, a missão e tudo o que Deus tem feito através da RVL a cada ano.
        </p>
      </div>
      <Link
        to="/sobre"
        className="flex-shrink-0 flex items-center gap-2 bg-rvl-laranja text-white font-inter font-bold text-sm uppercase tracking-wide px-7 py-3.5 rounded-xl hover:bg-rvl-laranja/90 transition-all whitespace-nowrap shadow-md"
      >
        Nossa história
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </section>
);

export default SobreRevivalBand;
