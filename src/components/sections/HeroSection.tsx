import { useState, useEffect } from 'react';
import { useTransition } from '../../context/TransitionContext';
import { SunRise } from '../SunRise';
import { MarqueeBanner } from '../MarqueeBanner';

interface HeroSectionProps {
  animateIn?: boolean;
}

const HeroSection = ({ animateIn }: HeroSectionProps) => {
  const { fromGame, transitionProgress, setTransitionProgress, setFromGame } = useTransition();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!fromGame) {
      // Rota direta — anima normalmente
      const t = setTimeout(() => setAnimated(true), 300);
      return () => clearTimeout(t);
    }

    // Vindo do game — aguarda sinal de 'revealing'
    if (fromGame && transitionProgress === 'revealing') {
      // Anima imediatamente, sem delay — já está no meio do crossfade
      setAnimated(true);
      // Marca como completo após terminar
      const t = setTimeout(() => setTransitionProgress('complete'), 2000);
      return () => clearTimeout(t);
    }
  }, [fromGame, transitionProgress]);

  // Limpar estado após conclusão
  useEffect(() => {
    if (transitionProgress === 'complete') {
      const t = setTimeout(() => {
        setFromGame(false);
        setTransitionProgress('idle');
      }, 500);
      return () => clearTimeout(t);
    }
  }, [transitionProgress]);

  // Helper for staggered element styles
  const getElementStyle = (delay: string) => ({
    opacity: animated ? 1 : 0,
    transform: animated ? 'translateY(0px)' : 'translateY(24px)',
    filter: animated ? 'blur(0px)' : 'blur(4px)',
    transition: `opacity 1.2s ease-out ${delay}, transform 1.2s ease-out ${delay}, filter 1.2s ease-out ${delay}`,
  });

  // Delays for staggered entrance (from game)
  const logoDelay = fromGame ? '0ms' : '0ms';
  const dateDelay = fromGame ? '150ms' : '200ms';
  const verseDelay = fromGame ? '300ms' : '350ms';
  const ctaDelay = fromGame ? '450ms' : '500ms';
  const marqueeDelay = fromGame ? '750ms' : '0ms';

  return (
    <section className="hero-gradient relative h-[100dvh] min-h-[100dvh] overflow-hidden">
      <SunRise />

      {/* Noise overlay */}
      <div className="hero-noise absolute inset-0 pointer-events-none z-[1]" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 60% at 0% 0%,   #5BB8D4CC 0%, transparent 60%),
            radial-gradient(ellipse 60% 60% at 100% 0%,  #5BB8D4CC 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 0% 100%,  #5BB8D499 0%, transparent 55%)
          `,
          zIndex: 1
        }}
      />

      {/* Container que centraliza o conteúdo no espaço acima do banner */}
      <div
        className="hero-content relative z-[2] flex flex-col items-center justify-center w-full max-w-5xl mx-auto pt-16 md:pt-20"
        style={{ height: 'calc(100dvh - var(--banner-h))' }}
      >
        <img
          src="/images/logo-um-novo-amanhecer.png"
          alt="Revival Conference 26 Logo"
          className="w-[300px] sm:w-[306px] md:w-[380px] lg:w-[420px] xl:w-[490px] max-w-[90vw] max-h-[42vh] object-contain relative z-0 mb-3 md:mb-4 xl:mb-6"
          style={{
            mixBlendMode: 'screen',
            filter: 'drop-shadow(0 0 18px rgba(251,244,228,0.35)) drop-shadow(0 0 60px rgba(245,130,58,0.15))',
            ...getElementStyle(logoDelay),
          }}
        />



        <div className="flex flex-col items-center gap-4 md:gap-5 lg:gap-5 xl:gap-7 relative z-10 w-full px-4 sm:px-6">
          {/* Tag */}
          <div
            className="border border-rvl-creme/50 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-rvl-creme text-[11px] sm:text-sm md:text-base font-inter bg-rvl-escuro/20 backdrop-blur-sm whitespace-nowrap"
            style={getElementStyle(dateDelay)}
          >
            Revival Conference 26 — Belém/PA
          </div>

          {/* Headline */}
          <div
            className="flex flex-col text-[#fff2dc] drop-shadow-md mt-3 w-fit max-w-[95%] text-center"
            style={getElementStyle(verseDelay)}
          >
            <span className="font-bebas uppercase block leading-none tracking-wide" style={{ fontSize: 'clamp(25px, 7vw, 56px)' }}>
              NOS VEMOS EM 2027!
            </span>
            <span className="font-inter font-medium opacity-75 mt-2 block" style={{ fontSize: 'clamp(13px, 3.5vw, 20px)' }}>
              O que vivemos em 2026 foi apenas o começo.
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2" style={getElementStyle(ctaDelay)}>
            <a
              href="#pregacoes"
              onClick={(e) => { e.preventDefault(); document.getElementById('pregacoes')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-rvl-creme text-rvl-escuro rounded-full px-6 py-3 sm:px-10 sm:py-4 font-inter font-bold text-xs sm:text-sm md:text-base uppercase tracking-wide hover:opacity-90 hover:scale-105 shadow-[0_0_30px_rgba(251,244,228,0.3)] whitespace-nowrap text-center"
            >
              Acesse as pregações
            </a>
            <a
              href="#fotos"
              onClick={(e) => { e.preventDefault(); document.getElementById('fotos')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="border border-rvl-creme/60 text-rvl-creme rounded-full px-6 py-3 sm:px-10 sm:py-4 font-inter font-bold text-xs sm:text-sm md:text-base uppercase tracking-wide hover:bg-rvl-creme/10 transition-colors whitespace-nowrap text-center"
            >
              Ver as fotos
            </a>
          </div>
        </div>
      </div>

      {/* Marquee — entra por último */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20"
        style={{
          opacity: animated ? 1 : 0,
          transform: animated ? 'translateY(0)' : 'translateY(100%)',
          transition: `opacity 0.8s ease-out ${marqueeDelay}, transform 0.8s ease-out ${marqueeDelay}`,
        }}
      >
        <MarqueeBanner />
      </div>
    </section>
  );
};

export default HeroSection;
