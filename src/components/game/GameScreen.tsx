import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import GameBackground from './GameBackground';
import Sun from './Sun';
import TargetCircle from './TargetCircle';
import DawnOverlay from './DawnOverlay';
import Index from '../../pages/Index';
import { useTransition } from '../../context/TransitionContext';

type GameState = 'idle' | 'starting' | 'playing' | 'locked' | 'leaking' | 'revealing' | 'fail';

const ANIMATION_DURATION = 3500; // 3.5s
const HIT_TOLERANCE = 40;
const SUN_SIZE_DESKTOP = 60;
const SUN_SIZE_MOBILE = 48;

const GameScreen = () => {
  const navigate = useNavigate();
  const { setFromGame, setTransitionProgress } = useTransition();
  const [gameState, setGameState] = useState<GameState>('idle');
  const [sunTop, setSunTop] = useState(-80);
  const [isShaking, setIsShaking] = useState(false);
  const [isSnapping, setIsSnapping] = useState(false);
  const [sunCenter, setSunCenter] = useState({ x: 0, y: 0 });

  const animFrameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const getSunSize = () => {
    return window.innerWidth <= 640 ? SUN_SIZE_MOBILE : SUN_SIZE_DESKTOP;
  };

  const getTargetY = () => {
    // Target center is at 75% of viewport height
    return window.innerHeight * 0.75 - getSunSize() / 2;
  };

  const getStartY = () => -getSunSize() - 20;
  const getEndY = () => window.innerHeight + getSunSize();

  const animate = useCallback((timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / ANIMATION_DURATION, 1);

    const startY = getStartY();
    const endY = getEndY();
    const currentY = startY + (endY - startY) * progress;

    setSunTop(currentY);

    if (progress < 1) {
      animFrameRef.current = requestAnimationFrame(animate);
    } else {
      // Sun passed without click — auto fail and reset
      setGameState('fail');
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
        resetAndPlay();
      }, 800);
    }
  }, []);

  const resetAndPlay = useCallback(() => {
    setSunTop(getStartY());
    startTimeRef.current = 0;
    setGameState('playing');
    animFrameRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const handleTap = () => {
    if (gameState === 'idle') {
      setGameState('starting');
      setTimeout(() => {
        resetAndPlay();
      }, 300);
      return;
    }

    if (gameState === 'starting') return;

    if (gameState !== 'playing') return;

    const targetY = getTargetY();
    const sunCenter = sunTop + getSunSize() / 2;
    const targetCenter = targetY + getSunSize() / 2;
    const diff = Math.abs(sunCenter - targetCenter);

    if (diff <= HIT_TOLERANCE) {
      // SUCCESS
      cancelAnimationFrame(animFrameRef.current);
      setIsSnapping(true);
      setSunTop(targetY);
      setSunCenter({
        x: window.innerWidth / 2,
        y: targetY + getSunSize() / 2
      });

      setGameState('locked');

      setTimeout(() => {
        setGameState('leaking');
      }, 2000);

      setTimeout(() => {
        setGameState('revealing');
        setFromGame(true);
        setTransitionProgress('revealing');
        navigate('/', { state: { fromGame: true } });
      }, 4000); // mesmo timing — landing já começa a montar enquanto light leak some
    } else {
      // FAIL
      cancelAnimationFrame(animFrameRef.current);
      setGameState('fail');
      setIsShaking(true);

      setTimeout(() => {
        setIsShaking(false);
        resetAndPlay();
      }, 800);
    }
  };

  useEffect(() => {
    return () => {
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="game-container"
      style={{
        height: '100dvh',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 9999
      }}
      onClick={handleTap}
      onTouchStart={(e) => {
        e.preventDefault();
        handleTap();
      }}
    >
      {/* Retaguarda: LandingPage invisível até o reveal */}
      {gameState !== 'idle' && gameState !== 'playing' && gameState !== 'fail' && (
        <div
          className="absolute inset-0 z-0 bg-background"
          style={{
            opacity: gameState === 'revealing' ? 1 : 0,
            transition: 'opacity 2s ease-in-out',
            pointerEvents: 'none'
          }}
        >
          <Index animateIn={gameState === 'revealing'} />
        </div>
      )}

      {/* Cena do game */}
      <div
        style={{
          opacity: (gameState === 'leaking' || gameState === 'revealing') ? 0 : 1,
          transition: 'opacity 2s ease-in-out',
        }}
        className="absolute inset-0 z-5 w-full h-full pointer-events-none"
      >
        <GameBackground isDawn={false} />
        <TargetCircle isPulsing={gameState === 'playing'} isShaking={isShaking} />
        <Sun topPosition={sunTop} isSnapping={isSnapping} isLocked={gameState === 'locked'} />

        {/* UI Text Layer */}
        <div className="absolute inset-0 z-10 flex flex-col items-center pointer-events-none">
          {gameState === 'idle' && (
            <div className="flex flex-col items-center mt-[30vh]">
              <p className="font-caveat opacity-90" style={{ fontSize: '2rem', color: '#F5EDD8' }}>
                toque para começar
              </p>
            </div>
          )}

          {gameState === 'playing' && (
            <p className="font-caveat text-game-cream text-xl sm:text-2xl mt-8 sm:mt-12 opacity-90">
              toque quando o sol encaixar
            </p>
          )}

          {gameState === 'fail' && (
            <p className="font-caveat text-game-cream text-xl sm:text-2xl mt-8 sm:mt-12 opacity-90">
              quase... tente novamente
            </p>
          )}
        </div>
      </div>

      {/* Light leak orgânico nascendo do centro do sol */}
      {(gameState === 'leaking' || gameState === 'revealing') && (
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background: `radial-gradient(
              ellipse 80% 60% at ${sunCenter.x}px ${sunCenter.y}px,
              rgba(255, 248, 220, 0.95) 0%,
              rgba(245, 200, 66, 0.7)   15%,
              rgba(245, 130, 58, 0.5)   35%,
              rgba(232, 53, 42, 0.25)   55%,
              rgba(91, 184, 212, 0.1)   75%,
              transparent               100%
            )`,
            opacity: gameState === 'leaking' ? 0 : 1,
            transition: gameState === 'leaking'
              ? 'opacity 2s cubic-bezier(0.16, 1, 0.3, 1)'
              : 'opacity 2s cubic-bezier(0.7, 0, 0.84, 0)',
            backgroundSize: gameState === 'leaking' ? '100% 100%' : '300% 300%',
          }}
        />
      )}

      {/* Light leak extra - mais difuso para luz lateral */}
      {(gameState === 'leaking' || gameState === 'revealing') && (
        <div
          className="absolute inset-0 z-19 pointer-events-none"
          style={{
            background: `radial-gradient(
              ellipse 140% 100% at ${sunCenter.x}px ${sunCenter.y}px,
              rgba(245, 200, 66, 0.3)  0%,
              rgba(245, 130, 58, 0.15) 30%,
              rgba(232, 53, 42, 0.05)  60%,
              transparent              100%
            )`,
            opacity: gameState === 'leaking' ? 0 : 0.8,
            transition: 'opacity 2.5s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: gameState === 'leaking' ? 'scale(0.6)' : 'scale(1.4)',
            transformOrigin: `${sunCenter.x}px ${sunCenter.y}px`,
            transitionProperty: 'opacity, transform',
          }}
        />
      )}
    </div>
  );
};

export default GameScreen;
