const partners = [
  { src: '/images/partners/logo-sushi-ruy-barbosa.png', alt: 'Sushi Ruy Barbosa', href: 'https://www.instagram.com/sushiruybarbosa/', mobileClass: 'h-20 max-w-[130px]', desktopClass: 'h-20 max-w-[160px]' },
  { src: '/images/partners/logo-blum.PNG', alt: 'Blum', href: 'https://www.instagram.com/blum.cookies/', mobileClass: 'h-20 max-w-[130px]', desktopClass: 'h-20 max-w-[160px]' },
  { src: '/images/partners/logo-rusty-burger.PNG', alt: 'Rusty Burger', href: 'https://www.instagram.com/rustyburgeroficial/', mobileClass: 'h-20 max-w-[130px]', desktopClass: 'h-20 max-w-[160px]' },
  { src: '/images/partners/logo-zenith.png', alt: 'Zenith', href: 'https://www.instagram.com/zenith_belem/', mobileClass: 'h-16 max-w-[110px]', desktopClass: 'h-16 max-w-[140px]' },
  { src: '/images/partners/bermax-logo.png', alt: 'Bermax', href: 'https://www.instagram.com/bermaxculture/', mobileClass: 'h-14 max-w-[90px]', desktopClass: 'h-14 max-w-[120px]' },
  { src: '/images/partners/track-and-field-logo.png', alt: 'Track & Field', href: 'https://www.instagram.com/trackfieldbelem/', mobileClass: 'h-16 max-w-[110px]', desktopClass: 'h-16 max-w-[140px]' },
];

const ApoiadoresSection = () => {
  return (
    <section className="bg-rvl-escuro py-16 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-playfair text-2xl md:text-3xl text-rvl-creme mb-10 tracking-widest uppercase">
          Apoiadores
        </h2>

        {/* Mobile: 3 por linha */}
        <div className="grid grid-cols-3 gap-y-10 md:hidden">
          {partners.map((partner) => (
            <a
              key={partner.alt}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className={`w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 mix-blend-screen ${partner.mobileClass}`}
              />
            </a>
          ))}
        </div>

        {/* Desktop: linha estática */}
        <div className="hidden md:flex flex-nowrap justify-center items-center gap-10">
          {partners.map((partner) => (
            <a
              key={partner.alt}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className={`w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 mix-blend-screen ${partner.desktopClass}`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApoiadoresSection;
