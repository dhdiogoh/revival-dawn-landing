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
          src="/images/rvl-26-logo-adjust.png"
          alt="Revival Conference 26 Logo"
          className="w-[280px] sm:w-[350px] md:w-[560px] lg:w-[700px] max-w-[90vw] relative z-0"
          style={{
            mixBlendMode: 'screen',
            opacity: animated ? 1 : 0,
            transform: animated ? 'translateY(0)' : 'translateY(20px)',
            transition: fromGame ? 'none' : 'opacity 1.2s ease-out, transform 1.2s ease-out',
            transitionDelay: '0ms'
          }}
        />

        <div className="flex flex-col items-center gap-6 md:gap-7 relative z-10 w-full px-6">
          {/* Date pill */}
          <div
            className="border border-rvl-creme/50 rounded-full px-4 py-1.5 text-rvl-creme text-sm md:text-base font-inter bg-rvl-escuro/20 backdrop-blur-sm"
            style={{
              opacity: animated ? 1 : 0,
              transform: animated ? 'translateY(0)' : 'translateY(16px)',
              transition: fromGame ? 'none' : 'opacity 1s ease-out, transform 1s ease-out',
              transitionDelay: fromGame ? '0ms' : '200ms'
            }}
          >
            08 e 09 de Maio de 2026 — Hangar, Belém/PA
          </div>

          {/* Verse */}
          <blockquote
            className="border-l-2 border-rvl-creme pl-4 max-w-md text-rvl-creme font-caveat text-xl md:text-2xl text-left drop-shadow-md"
            style={{
              opacity: animated ? 1 : 0,
              transform: animated ? 'translateY(0)' : 'translateY(16px)',
              transition: fromGame ? 'none' : 'opacity 1s ease-out, transform 1s ease-out',
              transitionDelay: fromGame ? '0ms' : '350ms'
            }}
          >
            "O choro pode durar uma noite, mas a alegria vem pela manhã." — Salmos 30.5
          </blockquote>

          {/* CTA */}
          <a
            href="#formulario"
            className="bg-rvl-creme text-rvl-escuro rounded-full px-10 py-4 font-inter font-bold text-base md:text-lg uppercase tracking-wide hover:opacity-90 hover:scale-105 shadow-[0_0_30px_rgba(251,244,228,0.3)] mt-2"
            style={{
              opacity: animated ? 1 : 0,
              transform: animated ? 'translateY(0)' : 'translateY(16px)',
              transition: fromGame ? 'none' : 'opacity 1s ease-out, transform 1s ease-out, background-color 0.3s, scale 0.3s',
              transitionDelay: fromGame ? '0ms' : '500ms'
            }}
          >
            QUERO RECEBER NOVIDADES ↓
          </a>
        </div>
      </div>

      <MarqueeBanner />
    </section>
  );
};

export default HeroSection;
