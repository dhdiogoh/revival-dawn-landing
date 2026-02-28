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
    <section className="hero-gradient relative h-[100dvh] min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
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

      <div className="relative z-[2] flex flex-col items-center w-full max-w-5xl mx-auto">
        <img
          src="/images/logo-rvl-26-oficial.png"
          alt="Revival Conference 26 Logo"
          className="w-[400px] sm:w-[450px] md:w-[600px] lg:w-[720px] max-w-[96vw] relative z-0 drop-shadow-[0_0_25px_rgba(251,244,228,0.4)] md:drop-shadow-none"
          style={{
            mixBlendMode: 'screen',
            ...getElementStyle(logoDelay),
          }}
        />

        {/* Tema da conferência */}
        <h2
          className="font-antarctican text-rvl-creme text-2xl sm:text-3xl md:text-4xl tracking-[0.35em] uppercase mt-2 md:mt-4 mb-6 md:mb-10"
          style={{
            ...getElementStyle(logoDelay),
            textShadow: '0 0 20px rgba(251,244,228,0.5), 0 0 40px rgba(245,130,58,0.3)',
          }}
        >
          NOVO AMANHECER
        </h2>

        <div className="flex flex-col items-center gap-6 md:gap-7 relative z-10 w-full px-6">
          {/* Date pill */}
          <div
            className="border border-rvl-creme/50 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-rvl-creme text-xs sm:text-sm md:text-base font-inter bg-rvl-escuro/20 backdrop-blur-sm"
            style={getElementStyle(dateDelay)}
          >
            08 e 09 de Maio de 2026 — Hangar, Belém/PA
          </div>

          {/* Verse */}
          <div
            className="flex flex-col text-[#fff2dc] drop-shadow-md mt-3 w-fit max-w-[95%]"
            style={getElementStyle(verseDelay)}
          >
            <div className="text-left px-2">
              <span className="font-inter font-medium text-[16px] md:text-[18px] lowercase tracking-wide opacity-90 block mb-1">
                o choro pode <span className="line-through decoration-[2px] decoration-[#fff2dc]/90">durar uma noite</span>,
              </span>
              <span className="font-teenage text-[20px] md:text-[26px] uppercase block leading-tight">
                MAS A ALEGRIA VEM PELA MANHÃ...
              </span>
            </div>
            <div className="text-right px-2 mt-1">
              <span className="font-inter font-light text-xs md:text-sm opacity-75">
                — Salmos 30.5
              </span>
            </div>
          </div>

          {/* CTA */}
          <a
            href="#formulario"
            className="bg-rvl-creme text-rvl-escuro rounded-full px-10 py-4 font-inter font-bold text-base md:text-lg uppercase tracking-wide hover:opacity-90 hover:scale-105 shadow-[0_0_30px_rgba(251,244,228,0.3)] mt-2"
            style={getElementStyle(ctaDelay)}
          >
            QUERO RECEBER NOVIDADES ↓
          </a>
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
