import { useState, useEffect } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const FALLBACK_TICKET_URL = 'https://www.tiketo.com.br/evento/4610';

const SHIRT_VIDEO_ID = 'RdR8BC6uB6o';

const RvlLancamentoSection = () => {
  const [playing, setPlaying] = useState(false);
  const [ticketUrl, setTicketUrl] = useState(FALLBACK_TICKET_URL);

  useEffect(() => {
    supabase
      .from('settings')
      .select('value')
      .eq('key', 'ticket_url')
      .single()
      .then(({ data }) => { if (data?.value) setTicketUrl(data.value); });
  }, []);

  return (
    <section className="bg-rvl-creme-bg py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* COMBO RVL — destaque */}
        <div className="mb-12">
          <p className="text-rvl-laranja font-medium mb-1 uppercase tracking-wider text-sm text-center font-inter">
            RVL | LANÇAMENTO DA SEMANA
          </p>
          <h2 className="font-bebas text-rvl-escuro tracking-wide mb-8 leading-none text-center whitespace-nowrap" style={{ fontSize: 'clamp(1.4rem, 5.5vw, 3rem)' }}>
            Lançamento da t-shirt da RVL
          </h2>

          {/* Ticket COMBO destacado */}
          <div className="relative bg-rvl-escuro rounded-2xl shadow-2xl ring-2 ring-rvl-laranja/60 max-w-lg mx-auto overflow-visible">

            {/* Top stub */}
            <div className="px-8 pt-7 pb-5 text-center">
              <div className="inline-block bg-rvl-laranja/20 border border-rvl-laranja/40 text-rvl-laranja text-[10px] font-inter font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                PRIMEIRO LOTE
              </div>
              <h3 className="font-bebas text-3xl text-rvl-creme tracking-wide leading-tight mb-2">
                COMBO RVL
              </h3>
              <ul className="font-inter text-rvl-creme/60 text-xs flex items-center justify-center gap-4 mb-4">
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-rvl-laranja/60 inline-block" />
                  Ingresso RVL
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-rvl-laranja/60 inline-block" />
                  T-shirt exclusiva
                </li>
              </ul>
              <div className="flex items-center justify-center gap-5 text-rvl-creme/30 text-xs font-inter">
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
            <div className="px-8 py-6 text-center">
              <p className="font-bebas text-4xl text-rvl-creme tracking-wide mb-1">R$229</p>
              <p className="font-inter text-rvl-creme/40 text-xs mb-5">ingresso + t-shirt</p>
              <a
                href={ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-rvl-laranja text-white rounded-xl py-4 px-6 font-inter font-bold text-sm uppercase tracking-wide hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_4px_24px_rgba(245,130,58,0.35)] flex items-center justify-center"
              >
                GARANTA SEU LUGAR
              </a>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-rvl-escuro/10" />
          <span className="font-inter text-rvl-escuro/30 text-xs uppercase tracking-widest">incluída no combo · escolha a sua</span>
          <div className="flex-1 h-px bg-rvl-escuro/10" />
        </div>

        {/* Vídeo da t-shirt — YouTube */}
        {playing ? (
          <iframe
            className="w-full aspect-video rounded-lg"
            src={`https://www.youtube.com/embed/${SHIRT_VIDEO_ID}?autoplay=1`}
            title="Lançamento da t-shirt da RVL"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <button
            className="relative w-full aspect-video rounded-lg overflow-hidden group"
            onClick={() => setPlaying(true)}
            aria-label="Reproduzir vídeo lançamento t-shirt RVL"
          >
            <img
              src="https://ldttnxxnplkwyimpcgmf.supabase.co/storage/v1/object/public/images/rvl-tshirt.jpeg"
              alt="Lançamento da t-shirt da RVL"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10 ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        )}

      </div>
    </section>
  );
};

export default RvlLancamentoSection;
