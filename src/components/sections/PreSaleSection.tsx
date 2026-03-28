import { useEffect, useRef, useState } from 'react';
import { Lock, MapPin, Calendar } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const FALLBACK_TICKET_URL = 'https://www.tiketo.com.br/evento/4610';

interface TicketCardProps {
  badge: string;
  badgeActive?: boolean;
  title: string;
  subtitle?: string;
  items: string[];
  price: string;
  priceLabel?: string;
  locked?: boolean;
  highlighted?: boolean;
  ctaLabel: string;
  href?: string;
}

const TicketCard = ({
  badge,
  badgeActive = false,
  title,
  subtitle,
  items,
  price,
  priceLabel,
  locked = false,
  highlighted = false,
  ctaLabel,
  href,
}: TicketCardProps) => (
  <div className={`relative bg-rvl-escuro rounded-2xl shadow-2xl overflow-visible h-full flex flex-col ${highlighted ? 'ring-2 ring-rvl-laranja/60' : ''}`}>

    {locked && (
      <div className="absolute inset-0 z-10 bg-black/20 backdrop-blur-[1.5px] rounded-2xl flex items-center justify-center">
        <div className="bg-white/10 rounded-full p-3">
          <Lock className="w-8 h-8 text-white" />
        </div>
      </div>
    )}

    {/* Top stub */}
    <div className="px-5 pt-6 pb-4 text-center flex-1">
      <div className={`inline-block border text-[10px] font-inter font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${badgeActive ? 'bg-rvl-laranja/20 border-rvl-laranja/40 text-rvl-laranja' : 'bg-white/10 border-white/20 text-white/50'}`}>
        {badge}
      </div>

      <h3 className="font-bebas text-2xl text-rvl-creme tracking-wide leading-tight mb-1">
        {title}
      </h3>
      {subtitle && (
        <p className="font-inter text-rvl-creme/50 text-xs mb-2">{subtitle}</p>
      )}

      <ul className={`font-inter text-rvl-creme/60 text-xs mb-4 mt-3 ${items.length > 2 ? 'grid grid-cols-2 gap-x-3 gap-y-1' : 'space-y-1'}`}>
        {items.map((item) => (
          <li key={item} className="flex items-center justify-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-rvl-laranja/60 inline-block flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center gap-4 text-rvl-creme/30 text-xs font-inter">
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          08 e 09 de Maio, 2026
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" />
          Hangar, Belém/PA
        </span>
      </div>
    </div>

    {/* Tear line */}
    <div className="relative flex items-center px-0">
      <div className="absolute -left-3.5 w-7 h-7 rounded-full bg-rvl-creme-bg z-20" />
      <div className="w-full border-t-2 border-dashed border-white/15 mx-6" />
      <div className="absolute -right-3.5 w-7 h-7 rounded-full bg-rvl-creme-bg z-20" />
    </div>

    {/* Bottom stub */}
    <div className="px-5 py-5 text-center">
      <p className="font-bebas text-3xl text-rvl-creme tracking-wide mb-0.5">
        {locked ? 'R$ ???' : price}
      </p>
      {priceLabel
        ? <p className="font-inter text-rvl-creme/40 text-xs mb-4">{priceLabel}</p>
        : <div className="mb-4" />
      }

      {!locked && href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-rvl-laranja text-white rounded-xl py-4 px-6 font-inter font-bold text-sm uppercase tracking-wide hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_4px_24px_rgba(245,130,58,0.35)] flex items-center justify-center"
        >
          {ctaLabel}
        </a>
      ) : (
        <button
          disabled
          className="w-full bg-white/10 text-white/30 rounded-xl py-4 px-6 font-inter font-bold text-sm uppercase tracking-wide cursor-not-allowed flex items-center justify-center opacity-50"
        >
          {ctaLabel}
        </button>
      )}
    </div>
  </div>
);

const PreSaleSection = () => {
  const [ticketUrl, setTicketUrl] = useState(FALLBACK_TICKET_URL);
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);

  useEffect(() => {
    supabase
      .from('settings')
      .select('value')
      .eq('key', 'ticket_url')
      .single()
      .then(({ data }) => { if (data?.value) setTicketUrl(data.value); });
  }, []);

  const tickets: TicketCardProps[] = [
    {
      badge: 'PRIMEIRO LOTE',
      badgeActive: true,
      title: 'RVL PASS',
      items: ['Apenas ingresso'],
      price: 'R$129',
      highlighted: true,
      ctaLabel: 'GARANTA SEU LUGAR',
      href: ticketUrl,
    },
    {
      badge: 'EM BREVE',
      title: 'GEN Z PASS',
      subtitle: 'Para jovens de 15 a 25 anos',
      items: ['Apenas ingresso'],
      price: 'R$109',
      locked: true,
      ctaLabel: 'EM BREVE',
    },
    {
      badge: 'EM BREVE',
      title: 'COMBO RVL',
      items: ['Ingresso RVL', 'T-shirt'],
      price: 'R$229',
      locked: true,
      ctaLabel: 'EM BREVE',
    },
    {
      badge: 'EM BREVE',
      title: 'TRIPLE PASS',
      subtitle: '3 amigos',
      items: ['Lote para 3 pessoas com preço promocional'],
      price: 'R$109',
      priceLabel: '/pessoa',
      locked: true,
      ctaLabel: 'EM BREVE',
    },
    {
      badge: 'EM BREVE',
      title: 'KIT RVL',
      items: ['Fast Pass', 'Sala Profética', 'Stickers', 'Garrafa', 'T-shirt'],
      price: 'R$319',
      locked: true,
      ctaLabel: 'EM BREVE',
    },
  ];

  return (
    <section id="pre-venda" className="bg-rvl-creme-bg py-20 md:py-28 px-6 scroll-mt-0 md:scroll-mt-20">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-rvl-laranja font-medium mb-2 uppercase tracking-wider text-sm font-inter">
            Ingressos | RVL 26
          </p>
          <h2 className="font-bebas text-rvl-escuro tracking-wide leading-none whitespace-nowrap" style={{ fontSize: 'clamp(1.5rem, 6vw, 3.75rem)' }}>
            ESCOLHA COMO FAZER PARTE
          </h2>
        </div>

        {/* Mobile — carrossel 1 card por vez */}
        <div className="md:hidden flex flex-col items-center">
          {/* Setas + card */}
          <div className="flex items-center gap-3 w-full justify-center">
            <button
              onClick={() => setCurrent(c => (c - 1 + tickets.length) % tickets.length)}
              className="flex-shrink-0 w-7 h-7 rounded-full bg-rvl-escuro/10 hover:bg-rvl-escuro/20 flex items-center justify-center transition-colors"
              aria-label="Anterior"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-rvl-escuro">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div
              className="w-[85vw] max-w-[380px] h-[380px]"
              onTouchStart={e => { touchStart.current = e.touches[0].clientX; }}
              onTouchEnd={e => {
                const diff = touchStart.current - e.changedTouches[0].clientX;
                if (diff > 50) setCurrent(c => (c + 1) % tickets.length);
                if (diff < -50) setCurrent(c => (c - 1 + tickets.length) % tickets.length);
              }}
            >
              <div key={current} className="animate-in fade-in duration-300 h-full">
                <TicketCard {...tickets[current]} />
              </div>
            </div>

            <button
              onClick={() => setCurrent(c => (c + 1) % tickets.length)}
              className="flex-shrink-0 w-7 h-7 rounded-full bg-rvl-escuro/10 hover:bg-rvl-escuro/20 flex items-center justify-center transition-colors"
              aria-label="Próximo"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-rvl-escuro">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2 mt-6">
            {tickets.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-4 bg-rvl-laranja' : 'w-2 bg-rvl-escuro/20'}`}
                aria-label={`Card ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop — grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 items-stretch mb-5">
          {tickets.slice(0, 3).map((ticket) => (
            <TicketCard key={ticket.title} {...ticket} />
          ))}
        </div>
        <div className="hidden md:flex justify-center gap-5">
          {tickets.slice(3).map((ticket) => (
            <div key={ticket.title} className="w-[calc(33.333%-10px)]">
              <TicketCard {...ticket} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PreSaleSection;
