import { Link } from 'react-router-dom';

const JejumTeaserSection = () => (
  <section className="bg-rvl-escuro py-14 px-6">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <p className="text-rvl-laranja font-inter font-medium uppercase tracking-widest text-xs mb-2">
          Pré-Conferência
        </p>
        <h2 className="font-bebas text-3xl md:text-4xl text-rvl-creme tracking-wide leading-tight">
          40 DIAS DE JEJUM
        </h2>
        <p className="font-inter text-rvl-creme/50 text-sm mt-2 max-w-md leading-relaxed">
          Um tempo coletivo de alinhamento espiritual antes do encontro. Faça parte.
        </p>
      </div>

      <Link
        to="/jejum"
        className="flex-shrink-0 bg-rvl-laranja text-white rounded-full px-8 py-3.5 font-inter font-bold text-sm uppercase tracking-wide hover:opacity-90 hover:scale-105 transition-all shadow-[0_0_30px_rgba(245,130,58,0.25)]"
      >
        SAIBA MAIS
      </Link>
    </div>
  </section>
);

export default JejumTeaserSection;
