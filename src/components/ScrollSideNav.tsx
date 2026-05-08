import { useState, useEffect } from 'react';
import { Home, Ticket, CalendarDays, Users, Map, Sparkles, Mic, Utensils, Car, Info, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Section {
  id: string;
  label: string;
  Icon: LucideIcon;
}

const sections: Section[] = [
  { id: 'inicio', label: 'Bem-vindo', Icon: Home },
  { id: 'credenciamento', label: 'Credenciamento', Icon: Ticket },
  { id: 'programacao', label: 'Programação', Icon: CalendarDays },
  { id: 'preletores', label: 'Preletores', Icon: Users },
  { id: 'areas', label: 'Áreas & Experiências', Icon: Map },
  { id: 'sala-profetica', label: 'Sala Profética', Icon: Sparkles },
  { id: 'multi-palcos', label: 'Multi Palcos', Icon: Mic },
  { id: 'alimentacao', label: 'Alimentação', Icon: Utensils },
  { id: 'estacionamento', label: 'Estacionamento', Icon: Car },
  { id: 'informacoes', label: 'Informações', Icon: Info },
];

const ScrollSideNav = () => {
  const [activeSection, setActiveSection] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-25% 0px -55% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div
      className={cn(
        'fixed right-2 md:right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-0.5 md:gap-1',
        'transition-all duration-500',
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      {/* Connecting line — desktop only */}
      <div className="absolute left-1/2 top-3 bottom-3 w-px bg-rvl-escuro/10 -translate-x-1/2 hidden md:block" />

      {sections.map(({ id, label, Icon }) => {
        const isActive = activeSection === id;
        return (
          <button
            key={id}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative flex items-center justify-center z-10 p-0.5"
            aria-label={label}
          >
            {/* Tooltip — desktop only */}
            <span className="absolute right-full mr-2.5 whitespace-nowrap bg-rvl-escuro/90 backdrop-blur-sm text-rvl-creme text-[11px] font-inter font-medium px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg hidden md:block">
              {label}
            </span>

            {/* Icon circle */}
            <span
              className={cn(
                'flex items-center justify-center rounded-full transition-all duration-300 shadow-sm',
                'w-6 h-6 md:w-7 md:h-7',
                isActive
                  ? 'bg-rvl-laranja text-white shadow-[0_0_10px_rgba(245,130,58,0.4)]'
                  : 'bg-white/90 border border-rvl-escuro/12 text-rvl-escuro/35 group-hover:border-rvl-laranja/50 group-hover:text-rvl-laranja'
              )}
            >
              <Icon className="w-3 h-3 md:w-3.5 md:h-3.5" strokeWidth={2} />
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default ScrollSideNav;
