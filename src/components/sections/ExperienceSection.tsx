import { useState, useEffect, useRef } from 'react';
import { Heart, Users, Home, Sparkles, Wallet, Flame } from 'lucide-react';

const experiences = [
  { icon: Heart, text: 'Pessoas curadas' },
  { icon: Flame, text: 'Jovens assumindo seus chamados' },
  { icon: Users, text: 'Líderes sendo avivados' },
  { icon: Home, text: 'Famílias restauradas' },
  { icon: Sparkles, text: 'Liberação de destino e dons' },
  { icon: Users, text: 'Igrejas fortalecidas' },
  { icon: Heart, text: 'Projetos sociais sendo ativados' },
  { icon: Heart, text: 'Curas físicas' },
  { icon: Sparkles, text: 'Milagres sobrenaturais' },
  { icon: Wallet, text: 'Provisão financeira inesperada' },
];

const speakers = [
  { name: 'Vitor Ledo', image: '/images/preletores-rvl/iloveimg-compressed/vitor-ledo-rvl.jpeg' },
  { name: 'Mayra Ledo', image: '/images/preletores-rvl/iloveimg-compressed/mayra-ledo-rvl.jpeg' },
  { name: 'Gustavo Paiva', image: '/images/preletores-rvl/iloveimg-compressed/gustavo-paiva-rvl.jpeg' },
  { name: 'Gilberto Araujo', image: '/images/preletores-rvl/iloveimg-compressed/gilberto-araujo-rvl.jpeg' },
  { name: 'Gabriel Cantarino', image: '/images/preletores-rvl/iloveimg-compressed/gabriel-cantarion-rvl.jpeg' },
  { name: 'Dênio Lara', image: '/images/preletores-rvl/iloveimg-compressed/denio-lara-rvl.jpeg' },
  { name: 'Daniel Kalta', image: '/images/preletores-rvl/iloveimg-compressed/daniel-kalta-rvl.jpeg' },
  { name: 'Alessandro Paiva', image: '/images/preletores-rvl/iloveimg-compressed/alessandro-paiva-rvl.jpeg' },
  { name: 'Davi Lago', image: '/images/preletores-rvl/davi-lago-rvl.jpeg' },
  { name: 'Bruce Friezer', image: '/images/preletores-rvl/bruce-rvl.jpeg' },
  { name: 'Michel Brodeur', image: '/images/preletores-rvl/michael-brodeur.jpeg' },
  { name: 'Daniel Rebolledo', image: '/images/preletores-rvl/daniel-rebolledo-rvl.jpeg' },
  { name: 'Chelo Beltran', image: '/images/preletores-rvl/iloveimg-compressed/chelo-rvl.jpeg' },
  { name: 'Shawn Gabie', image: '/images/preletores-rvl/iloveimg-compressed/shawn-gabie-rvl.jpeg' },
  { name: 'Francisco Vasco', image: '/images/preletores-rvl/franscisco-vasco-rvl (1).jpeg' },
];

const worshipMinistries = [
  { name: 'Link Music', image: '/images/preletores-rvl/ministerios-adoracao-compressed/link-music-rvl.jpeg' },
  { name: 'Dunamis Music', image: '/images/preletores-rvl/ministerios-adoracao-compressed/dunamis-music-rvl.jpeg' },
  { name: 'FHOP Music', image: '/images/preletores-rvl/ministerios-adoracao-compressed/fhop-music-rvl.jpg' },
];

const ExperienceSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);

  const [currentWorship, setCurrentWorship] = useState(0);
  const [isWorshipPaused, setIsWorshipPaused] = useState(false);
  const touchStartWorshipX = useRef(0);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % speakers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Auto-play Worship
  useEffect(() => {
    if (isWorshipPaused) return;
    const interval = setInterval(() => {
      setCurrentWorship(prev => (prev + 1) % worshipMinistries.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isWorshipPaused]);

  const next = () => setCurrent(prev => (prev + 1) % speakers.length);
  const prev = () => setCurrent(prev => (prev - 1 + speakers.length) % speakers.length);

  const nextWorship = () => setCurrentWorship(prev => (prev + 1) % worshipMinistries.length);
  const prevWorship = () => setCurrentWorship(prev => (prev - 1 + worshipMinistries.length) % worshipMinistries.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    setIsPaused(false);
  };

  const handleTouchStartWorship = (e: React.TouchEvent) => {
    touchStartWorshipX.current = e.touches[0].clientX;
    setIsWorshipPaused(true);
  };

  const handleTouchEndWorship = (e: React.TouchEvent) => {
    const diff = touchStartWorshipX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextWorship() : prevWorship();
    }
    setIsWorshipPaused(false);
  };

  return (
    <section className="bg-rvl-exp-bg py-20 md:py-28 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-bebas text-4xl md:text-6xl text-rvl-escuro tracking-wide mb-4">
          A EXPERIÊNCIA
        </h2>
        <p className="font-inter text-rvl-escuro/70 max-w-2xl leading-relaxed mb-12">
          Buscamos trazer homens e mulheres de Deus pelo que carregam, não pelo nome. Não queremos um ambiente movido apenas por emoção ou atmosfera momentânea. Queremos um lugar onde pessoas sejam encontradas, alcançadas e profundamente tocadas pelo Espírito Santo.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {experiences.map((e) => (
            <div key={e.text} className="flex items-center gap-3">
              <e.icon className="w-5 h-5 text-rvl-laranja shrink-0" />
              <span className="font-inter text-sm text-rvl-escuro">{e.text}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-rvl-laranja/20 my-8" />

        <h3 className="font-bebas text-2xl tracking-wide text-rvl-escuro mb-6">
          VOZES QUE JÁ PASSARAM PELA RVL
        </h3>

        <div className="w-full max-w-[600px] mx-auto mb-12">
          {/* Card Carousel */}
          <div
            className="relative w-full aspect-[3/2] sm:aspect-video rounded-lg overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {speakers.map((s, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-all duration-300 ease-in-out"
                style={{
                  opacity: current === index ? 1 : 0,
                  transform: `translateX(${(index - current) * 10}%)`,
                  pointerEvents: current === index ? 'auto' : 'none'
                }}
              >
                {/* Imagem ou placeholder */}
                {s.image ? (
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : null}

                {/* Placeholder de fallback */}
                <div className={`absolute inset-0 w-full h-full bg-[#1A1A1A] flex items-center justify-center ${s.image ? 'hidden' : ''}`}>
                  <span className="text-[#F5EDD8]/30 text-sm font-inter">foto em breve</span>
                </div>

                {/* Gradiente escuro na base para o nome */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Nome */}
                <div className="absolute bottom-4 left-6 md:bottom-6 md:left-8 pointer-events-none">
                  <p className="font-bebas text-3xl md:text-4xl text-[#F5EDD8] tracking-widest drop-shadow-md">
                    {s.name}
                  </p>
                </div>
              </div>
            ))}

            {/* Setas */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-[#F5EDD8]/30 text-[#F5EDD8] flex items-center justify-center hover:bg-black/60 transition z-10 hidden sm:flex"
              aria-label="Preletor anterior"
            >
              ←
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-[#F5EDD8]/30 text-[#F5EDD8] flex items-center justify-center hover:bg-black/60 transition z-10 hidden sm:flex"
              aria-label="Próximo preletor"
            >
              →
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-6 flex-wrap">
            {speakers.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current
                  ? 'w-6 bg-[#E8622A]'
                  : 'w-1.5 bg-[#403F3B]/30 hover:bg-[#403F3B]/50'
                  }`}
                aria-label={`Ir para o preletor ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="border-t border-rvl-laranja/20 my-8" />

        <h3 className="font-bebas text-2xl tracking-wide text-rvl-escuro mb-6">
          MINISTÉRIOS DE ADORAÇÃO
        </h3>

        <div className="w-full max-w-[600px] mx-auto mb-12">
          {/* Card Carousel for Worship */}
          <div
            className="relative w-full aspect-[3/2] sm:aspect-video rounded-lg overflow-hidden"
            onMouseEnter={() => setIsWorshipPaused(true)}
            onMouseLeave={() => setIsWorshipPaused(false)}
            onTouchStart={handleTouchStartWorship}
            onTouchEnd={handleTouchEndWorship}
          >
            {worshipMinistries.map((m, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-all duration-300 ease-in-out"
                style={{
                  opacity: currentWorship === index ? 1 : 0,
                  transform: `translateX(${(index - currentWorship) * 10}%)`,
                  pointerEvents: currentWorship === index ? 'auto' : 'none'
                }}
              >
                {/* Imagem ou placeholder */}
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : null}

                {/* Placeholder de fallback */}
                <div className={`absolute inset-0 w-full h-full bg-[#1A1A1A] flex items-center justify-center ${m.image ? 'hidden' : ''}`}>
                  <span className="text-[#F5EDD8]/30 text-sm font-inter">foto em breve</span>
                </div>

                {/* Gradiente escuro na base para o nome */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Nome */}
                <div className="absolute bottom-4 left-6 md:bottom-6 md:left-8 pointer-events-none">
                  <p className="font-bebas text-3xl md:text-4xl text-[#F5EDD8] tracking-widest drop-shadow-md">
                    {m.name}
                  </p>
                </div>
              </div>
            ))}

            {/* Setas */}
            <button
              onClick={(e) => { e.stopPropagation(); prevWorship(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-[#F5EDD8]/30 text-[#F5EDD8] flex items-center justify-center hover:bg-black/60 transition z-10 hidden sm:flex"
              aria-label="Ministério anterior"
            >
              ←
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextWorship(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-[#F5EDD8]/30 text-[#F5EDD8] flex items-center justify-center hover:bg-black/60 transition z-10 hidden sm:flex"
              aria-label="Próximo ministério"
            >
              →
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-6 flex-wrap">
            {worshipMinistries.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentWorship(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentWorship
                  ? 'w-6 bg-[#E8622A]'
                  : 'w-1.5 bg-[#403F3B]/30 hover:bg-[#403F3B]/50'
                  }`}
                aria-label={`Ir para o ministério ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

