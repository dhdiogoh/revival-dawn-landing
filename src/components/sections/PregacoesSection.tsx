import { useState } from 'react';
import { Clock } from 'lucide-react';

interface Sermon {
  speaker: string;
  title: string;
  reference?: string;
  videoId?: string;
  photo?: string;
  photoPosition?: string;
  photoScale?: number;
}

const sermons: Sermon[] = [
  {
    speaker: 'Davi Lago',
    title: 'O clamor por avivamento',
    videoId: 'RAoimduFhh0',
  },
  {
    speaker: 'Denio Lara',
    title: 'O Deus que vem até nós',
    photo: '/images/preletores-rvl-26/denio-lara-rvl26.webp',
  },
  {
    speaker: 'Gabriel Cantarino',
    title: 'A promessa do derramamento do Espírito',
    photo: '/images/preletores-rvl-26/gabriel-cantarino-rvl26.webp',
  },
  {
    speaker: 'PL Rios',
    title: 'Jesus como fim da performance',
    photo: '/images/preletores-rvl-26/plrios-rvl26.webp',
  },
  {
    speaker: 'Alessandro Paiva',
    title: 'O silêncio da cisterna',
    photo: '/images/preletores-rvl-26/alessandro-paiva-rvl26.webp',
    photoPosition: '50% 10%',
  },
  {
    speaker: 'Vitor Ledo',
    title: 'Tempo de arrependimento',
    photo: '/images/preletores-rvl-26/pr-vitor-ledo-rvl26.webp',
  },
  {
    speaker: 'Vinícius Motta',
    title: 'A razão da nossa ousadia',
    photo: '/images/preletores-rvl-26/vinicius-motta-rvl26-1.webp',
    photoPosition: '50% 5%',
    photoScale: 1.35,
  },
];

interface SermonCardProps {
  sermon: Sermon;
}

const SermonCard = ({ sermon }: SermonCardProps) => {
  const [playing, setPlaying] = useState(false);
  const available = !!sermon.videoId;

  return (
    <div className={`rounded-2xl overflow-hidden border ${available ? 'border-rvl-laranja/20 bg-white' : 'border-rvl-escuro/8 bg-white/60'}`}>
      {/* Thumbnail / player area */}
      <div className="relative aspect-video bg-rvl-escuro/5 overflow-hidden">
        {available && sermon.videoId ? (
          playing ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${sermon.videoId}?autoplay=1`}
              title={sermon.title}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <button
              className="relative w-full h-full group"
              onClick={() => setPlaying(true)}
              aria-label={`Reproduzir: ${sermon.title}`}
            >
              <img
                src={`https://img.youtube.com/vi/${sermon.videoId}/maxresdefault.jpg`}
                alt={sermon.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          )
        ) : sermon.photo ? (
          <div className="relative w-full h-full">
            <img
              src={sermon.photo}
              alt={sermon.speaker}
              className="w-full h-full object-cover"
              style={{
                objectPosition: sermon.photoPosition ?? 'center top',
                transform: sermon.photoScale ? `scale(${sermon.photoScale})` : undefined,
                transformOrigin: 'top center',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-rvl-escuro/60 backdrop-blur-sm flex items-center justify-center">
                <Clock className="w-3.5 h-3.5 text-white/70" strokeWidth={1.5} />
              </div>
              <span className="font-inter text-[11px] text-white/70 uppercase tracking-wider font-medium">
                Em breve
              </span>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-rvl-escuro/[0.03]">
            <div className="w-12 h-12 rounded-full bg-rvl-escuro/8 flex items-center justify-center">
              <Clock className="w-5 h-5 text-rvl-escuro/30" strokeWidth={1.5} />
            </div>
            <span className="font-inter text-xs text-rvl-escuro/30 uppercase tracking-wider font-medium">
              Em breve
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <p className={`font-inter text-xs font-bold uppercase tracking-wider mb-1 truncate ${available ? 'text-rvl-laranja' : 'text-rvl-escuro/40'}`}>
          {sermon.speaker}
        </p>
        <h3 className={`font-bebas text-xl tracking-wide leading-tight truncate ${available ? 'text-rvl-escuro' : 'text-rvl-escuro/50'}`}>
          {sermon.title}
        </h3>
      </div>
    </div>
  );
};

const PregacoesSection = () => {
  return (
    <section id="pregacoes" className="bg-rvl-creme-bg py-20 md:py-28 px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-rvl-laranja font-medium mb-2 uppercase tracking-wider text-sm font-inter">
            RVL Conference 2026
          </p>
          <h2
            className="font-bebas text-rvl-escuro tracking-wide leading-none"
            style={{ fontSize: 'clamp(2rem, 7vw, 4rem)' }}
          >
            PREGAÇÕES DA RVL26
          </h2>
          <p className="font-inter text-rvl-escuro/60 text-sm md:text-base mt-4 max-w-2xl mx-auto">
            As palavras que marcaram esses dias. Mais pregações serão adicionadas em breve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sermons.map((sermon) => (
            <SermonCard key={sermon.speaker} sermon={sermon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PregacoesSection;
