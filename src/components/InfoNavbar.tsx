import { useState, useEffect } from 'react';

const links = [
  { id: 'inicio', label: 'Início' },
  { id: 'credenciamento', label: 'Credenciamento' },
  { id: 'programacao', label: 'Programação' },
  { id: 'areas', label: 'Áreas & Experiências' },
  { id: 'sala-profetica', label: 'Sala Profética' },
  { id: 'multi-palcos', label: 'Multi Palcos' },
  { id: 'alimentacao', label: 'Alimentação' },
  { id: 'estacionamento', label: 'Estacionamento' },
  { id: 'informacoes', label: 'Informações Importantes' },
];

const InfoNavbar = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <nav className="sticky top-[88px] md:top-[120px] z-40 bg-rvl-escuro/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide py-2">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleClick(e, link.id)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-lg font-inter text-[11px] font-semibold uppercase tracking-wider transition-all ${
                activeSection === link.id
                  ? 'bg-rvl-laranja text-white'
                  : 'text-rvl-creme/60 hover:text-rvl-creme hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default InfoNavbar;
