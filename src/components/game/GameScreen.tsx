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
  const [sunTop, setSunTop] = useState(window.innerHeight + 100);
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
    // Target center is at 65% of viewport height
    return window.innerHeight * 0.65 - getSunSize() / 2;
  };

  const getStartY = () => window.innerHeight + getSunSize();
  const getEndY = () => -getSunSize() - 20;

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
          className="absolute inset-0 z-0"
          style={{
            opacity: gameState === 'revealing' ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            pointerEvents: 'none',
            backgroundColor: '#E8622A',
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
      {(gameState === 'locked' || gameState === 'leaking' || gameState === 'revealing') && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 20,
            background: `radial-gradient(
              ellipse 80% 70% at ${sunCenter.x}px ${sunCenter.y}px,
              rgba(230, 98,  42,  0.92) 0%,
              rgba(220, 60,  30,  0.80) 20%,
              rgba(200, 50,  30,  0.60) 40%,
              rgba(91,  150, 190, 0.30) 65%,
              rgba(70,  130, 180, 0.10) 82%,
              transparent                100%
            )`,
            opacity: gameState === 'locked' ? 0
              : gameState === 'leaking' ? 0.92
                : 0,
            transition: gameState === 'leaking'
              ? 'opacity 2s cubic-bezier(0.16, 1, 0.3, 1)'
              : 'opacity 1.8s ease-in-out',
          }}
        />
      )}

      {/* Light leak extra — mais difuso para profundidade */}
      {(gameState === 'locked' || gameState === 'leaking' || gameState === 'revealing') && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 19,
            background: `radial-gradient(
              ellipse 200% 150% at ${sunCenter.x}px ${sunCenter.y}px,
              rgba(200, 80,  30,  0.3)  0%,
              rgba(180, 60,  30,  0.2)  25%,
              rgba(160, 45,  30,  0.1)  50%,
              rgba(70,  130, 180, 0.05) 75%,
              transparent                100%
            )`,
            opacity: gameState === 'locked' ? 0
              : gameState === 'leaking' ? 0.85
                : 0,
            transition: 'opacity 2.5s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: gameState === 'locked' ? 'scale(0.5)' : 'scale(1.3)',
            transformOrigin: `${sunCenter.x}px ${sunCenter.y}px`,
            transitionProperty: 'opacity, transform',
          }}
        />
      )}
    </div>
  );
};

export default GameScreen;
