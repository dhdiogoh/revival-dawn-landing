import { useEffect, useState } from 'react';
import { useTransition } from '../context/TransitionContext';

export function SunRise() {
    const { fromGame } = useTransition();
    const [mounted, setMounted] = useState(fromGame ? true : false);

    useEffect(() => {
        if (fromGame) return;
        const t = setTimeout(() => setMounted(true), 500);
        return () => clearTimeout(t);
    }, [fromGame]);

    return (
        <div className="absolute bottom-[-80px] sm:bottom-[-120px] md:bottom-[-200px] lg:bottom-[-280px] left-0 right-0 flex justify-center pointer-events-none z-0 overflow-visible">
            <svg
                viewBox="0 0 900 450"
                className="w-full max-w-[1400px] h-auto transition-all duration-[1500ms]"
                style={{
                    transform: mounted ? 'translateY(0)' : 'translateY(100%)',
                    opacity: mounted ? 1 : 0,
                    transitionTimingFunction: 'ease-out'
                }}
            >
                {/* Glow interno do sol */}
                <defs>
                    <radialGradient id="sunGlow" cx="50%" cy="100%" r="50%">
                        <stop offset="0%" stopColor="#F5C842" stopOpacity="0.2" />
                        <stop offset="60%" stopColor="#F5823A" stopOpacity="0.08" />
                        <stop offset="100%" stopColor="#F5823A" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Fundo glow */}
                <ellipse cx="450" cy="450" rx="450" ry="300" fill="url(#sunGlow)"
                    className="animate-pulse" style={{ animationDuration: '3s' }} />

                {/* Raios de luz */}
                <g
                    style={{
                        opacity: mounted ? 1 : 0,
                        transition: 'opacity 1s ease-in 1.5s'
                    }}
                >
                    {/* 7 linhas em leque saindo do centro (450, 450) para cima */}
                    <line x1="450" y1="450" x2="150" y2="50" stroke="#F5EDD8" strokeOpacity="0.07" strokeWidth="1" />
                    <line x1="450" y1="450" x2="250" y2="20" stroke="#F5EDD8" strokeOpacity="0.07" strokeWidth="1" />
                    <line x1="450" y1="450" x2="370" y2="5" stroke="#F5EDD8" strokeOpacity="0.07" strokeWidth="1" />
                    <line x1="450" y1="450" x2="450" y2="0" stroke="#F5EDD8" strokeOpacity="0.09" strokeWidth="1" />
                    <line x1="450" y1="450" x2="530" y2="5" stroke="#F5EDD8" strokeOpacity="0.07" strokeWidth="1" />
                    <line x1="450" y1="450" x2="650" y2="20" stroke="#F5EDD8" strokeOpacity="0.07" strokeWidth="1" />
                    <line x1="450" y1="450" x2="750" y2="50" stroke="#F5EDD8" strokeOpacity="0.07" strokeWidth="1" />
                </g>

                {/* Arco principal do sol */}
                <circle cx="450" cy="450" r="440"
                    fill="none"
                    stroke="#F5EDD8"
                    strokeOpacity="0.3"
                    strokeWidth="1"
                />
            </svg>
        </div>
    );
}
