import { Map, ClipboardList, Ticket, Mic2, Sparkles, Utensils, ShoppingBag, Handshake, Car, Bus, type LucideIcon } from 'lucide-react';
import { ImageCarousel } from '@/components/ImageCarousel';

interface QuickLink {
  Icon: LucideIcon;
  label: string;
  href: string;
}

const quickLinks: QuickLink[] = [
  { Icon: Map, label: 'Mapa da conferência', href: '#areas' },
  { Icon: ClipboardList, label: 'Programação', href: '#programacao' },
  { Icon: Ticket, label: 'Credenciamento', href: '#credenciamento' },
  { Icon: Mic2, label: 'Sessões e palcos', href: '#multi-palcos' },
  { Icon: Sparkles, label: 'Sala Profética', href: '#sala-profetica' },
  { Icon: Utensils, label: 'Alimentação', href: '#alimentacao' },
  { Icon: ShoppingBag, label: 'RVL Store', href: '#areas' },
  { Icon: Handshake, label: 'Parceiros e patrocinadores', href: '#areas' },
  { Icon: Car, label: 'Estacionamento', href: '#estacionamento' },
  { Icon: Bus, label: 'Informações para caravanas', href: '#credenciamento' },
];

const carouselImages = [
  '/images/rvl-22-images/dunamis-rvl-22.jpg',
  '/images/rvl-23-images/corredor-de-fogo-rvl-23.JPG',
  '/images/programacao-rvl/sala-profetica-rvl.jpg',
  '/images/programacao-rvl/rvl-box.jpg',
];

const BemVindoSection = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="bg-rvl-creme-bg py-20 md:py-28 px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-rvl-laranja font-medium mb-2 uppercase tracking-wider text-sm font-inter">
            RVL Conference 2026
          </p>
          <h2 className="font-bebas text-rvl-escuro tracking-wide leading-none" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)' }}>
            BEM-VINDO
          </h2>
        </div>

        {/* Welcome text */}
        <div className="bg-white rounded-2xl shadow-sm border border-rvl-escuro/5 p-8 md:p-12 mb-8 text-center">
          <p className="font-inter text-rvl-escuro/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Aqui você encontrará todas as informações necessárias para viver conosco tudo o que Deus preparou para os dias 08 e 09 de maio. Nossa oração é para que esses dias sejam marcados por transformação, encontros reais com Jesus, comunhão, direcionamento e ativação para aquilo que fomos chamados para construir nesta geração.
          </p>
        </div>

        {/* Carousel */}
        <div className="aspect-video rounded-2xl overflow-hidden shadow-sm mb-10">
          <ImageCarousel
            images={carouselImages}
            altPrefix="Evento RVL"
            objectPositions={['object-top', 'object-top', 'object-center', 'object-center']}
          />
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {quickLinks.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleClick(e, href)}
              className="flex flex-col items-center gap-3 p-4 bg-white hover:bg-rvl-laranja/5 rounded-2xl transition-all group border border-rvl-escuro/5 hover:border-rvl-laranja/20 shadow-sm"
            >
              <Icon className="w-6 h-6 text-rvl-escuro/40 group-hover:text-rvl-laranja transition-colors" strokeWidth={1.5} />
              <span className="font-inter text-rvl-escuro/70 text-xs text-center font-medium leading-tight group-hover:text-rvl-laranja transition-colors">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BemVindoSection;
