import { useState } from 'react';

const VIDEO_URL =
  'https://pikaso.cdnpk.net/private/production/3759737880/f321115c-1fd6-4592-9b44-b2d147e6fe3b-0.mp4?token=exp=1775001600~hmac=db14e7bd52d1bf1170c8e5d953d874573b06b0983d7a484610e99b9c728bc07e';

const RvlLancamentoSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-rvl-creme-bg py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-rvl-laranja font-medium mb-1 uppercase tracking-wider text-sm text-center">
          RVL | LANÇAMENTO DA SEMANA
        </p>
        <h2 className="font-bebas text-rvl-escuro tracking-wide mb-6 leading-none text-center whitespace-nowrap" style={{ fontSize: 'clamp(1.4rem, 5.5vw, 3rem)' }}>
          Lançamento da t-shirt da RVL
        </h2>
        {playing ? (
          <video
            className="w-full aspect-video rounded-lg bg-black object-cover"
            src={VIDEO_URL}
            controls
            autoPlay
            playsInline
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
