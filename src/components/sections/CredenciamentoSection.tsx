import { Check, Zap, Bus } from 'lucide-react';

interface Ticket {
  title: string;
  subtitle?: string;
  desc: string;
  items: string[];
  image: string;
}

const tickets: Ticket[] = [
  {
    title: 'RVL PASS',
    desc: 'Ingresso individual para acesso aos dois dias da conferência.',
    items: ['Acesso à nave da RVL Conference', 'Entrada nos dias 08 e 09 de maio'],
    image: '/images/ingressos/Ingressos sem fundo_Revival Pass.png',
  },
  {
    title: 'COMBO — T-SHIRT + RVL PASS',
    desc: 'Combo especial com ingresso e produtos oficiais da conferência.',
    items: ['Ingresso RVL Pass', 'T-shirt oficial exclusiva da conferência'],
    image: '/images/ingressos/Ingressos sem fundo_Combo RVL.png',
  },
  {
    title: 'KIT RVL',
    desc: 'Experiência completa com itens oficiais da conferência.',
    items: ['Ingresso RVL Pass', 'T-shirt oficial', 'Garrafa oficial', 'Stickers exclusivos', 'Fast Pass'],
    image: '/images/ingressos/Ingressos sem fundo_Kit RVL.png',
  },
  {
    title: 'GEN Z PASS',
    subtitle: 'Para jovens de 15 a 25 anos',
    desc: 'Ingresso especial para a geração que está sendo levantada por Deus.',
    items: ['Acesso à nave da RVL Conference', 'Entrada nos dias 08 e 09 de maio'],
    image: '/images/ingressos/Ingressos sem fundo_GEN Z.png',
  },
];

const CredenciamentoSection = () => (
  <section id="credenciamento" className="bg-rvl-escuro py-20 md:py-28 px-6 scroll-mt-40 md:scroll-mt-44">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-rvl-laranja font-medium mb-2 uppercase tracking-wider text-sm font-inter">
          Acesso ao Evento
        </p>
        <h2 className="font-bebas text-rvl-creme tracking-wide leading-none" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)' }}>
          CREDENCIAMENTO
        </h2>
        <p className="font-inter text-rvl-creme/60 text-sm md:text-base mt-4 max-w-2xl mx-auto">
          Os portões serão abertos às 18h para início do credenciamento. Para facilitar o acesso, teremos filas organizadas por modalidade de ingresso e caravanas.
        </p>
      </div>

      {/* Grid 2x2 — 4 tickets com imagem */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {tickets.map((ticket) => (
          <div key={ticket.title} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex flex-col">
            <div className="bg-white/5 flex items-center justify-center p-6 h-44">
              <img
                src={ticket.image}
                alt={ticket.title}
                className="h-full w-full object-contain drop-shadow-lg"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-bebas text-rvl-laranja text-xl tracking-wide leading-tight mb-0.5">
                {ticket.title}
              </h3>
              {ticket.subtitle && (
                <p className="font-inter text-rvl-laranja/60 text-xs mb-2">{ticket.subtitle}</p>
              )}
              <p className="font-inter text-rvl-creme/60 text-xs mb-3">{ticket.desc}</p>
              <p className="font-inter text-rvl-creme/40 text-[10px] uppercase tracking-wider mb-2 font-semibold">Inclui:</p>
              <ul className="space-y-1.5 mt-auto">
                {ticket.items.map(item => (
                  <li key={item} className="flex items-center gap-2 font-inter text-rvl-creme/70 text-xs">
                    <Check className="w-3 h-3 text-rvl-laranja flex-shrink-0" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Fast Pass — sem imagem, acima das caravanas */}
      <div className="bg-rvl-laranja/10 rounded-2xl border border-rvl-laranja/30 mb-5">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-5 h-5 text-rvl-laranja" strokeWidth={2} />
            <h3 className="font-bebas text-rvl-laranja text-2xl tracking-wide">FAST PASS</h3>
          </div>
          <p className="font-inter text-rvl-creme/60 text-sm mb-4">
            Uma experiência com acesso facilitado para quem deseja mais agilidade durante o evento.
          </p>
          <p className="font-inter text-rvl-creme/40 text-xs uppercase tracking-wider mb-2 font-semibold">Inclui:</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1.5">
            {['Entrada exclusiva', 'Fila separada para credenciamento', 'Acesso prioritário'].map(item => (
              <li key={item} className="flex items-center gap-2 font-inter text-rvl-creme/70 text-sm">
                <Check className="w-3 h-3 text-rvl-laranja flex-shrink-0" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Caravanas */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <div className="flex items-center gap-2 mb-1">
          <Bus className="w-5 h-5 text-rvl-laranja" strokeWidth={2} />
          <h3 className="font-bebas text-rvl-laranja text-2xl tracking-wide">CARAVANAS</h3>
        </div>
        <p className="font-inter text-rvl-creme/60 text-sm mb-4">
          As caravanas também contarão com fila separada para acesso ao evento.
        </p>
        <p className="font-inter text-rvl-creme/40 text-xs uppercase tracking-wider mb-2 font-semibold">Benefícios:</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-1.5">
          {['Entrada organizada e exclusiva', 'Acesso à Sala Profética', 'Lugares reservados na nave principal'].map(item => (
            <li key={item} className="flex items-center gap-2 font-inter text-rvl-creme/70 text-sm">
              <Check className="w-3 h-3 text-rvl-laranja flex-shrink-0" strokeWidth={2.5} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <p className="font-inter text-rvl-creme/40 text-sm text-center mt-8">
        Recomendamos que todos cheguem com antecedência para garantir uma entrada tranquila.
      </p>
    </div>
  </section>
);

export default CredenciamentoSection;
