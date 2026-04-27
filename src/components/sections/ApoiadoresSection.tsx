const bigPartners = [
  { src: '/images/partners/Pleno att.png', alt: 'Pleno Saúde Integral', href: 'https://plenosaudeintegral.com.br/', mobileClass: 'h-24 max-w-[160px]', desktopClass: 'h-28 max-w-[200px]' },
  { src: '/images/partners/logo-sushi-ruy-barbosa.png', alt: 'SRB', href: 'https://www.instagram.com/sushiruybarbosa/', mobileClass: 'h-24 max-w-[160px]', desktopClass: 'h-28 max-w-[200px]' },
  { src: '/images/partners/BENEVI_Marca_azul.png', alt: 'Benevi', href: '#', mobileClass: 'h-14 max-w-[100px]', desktopClass: 'h-16 max-w-[130px]' },
];

const smallPartners = [
  { src: '/images/partners/logo-zenith.png', alt: 'Zenith', href: 'https://www.instagram.com/zenith_belem/', mobileClass: 'h-14 max-w-[100px]', desktopClass: 'h-16 max-w-[130px]' },
  { src: '/images/partners/logo-blum.PNG', alt: 'Blum', href: 'https://www.instagram.com/blum.cookies/', mobileClass: 'h-14 max-w-[100px]', desktopClass: 'h-16 max-w-[130px]' },
  { src: '/images/partners/logo-rusty-burger.PNG', alt: 'Rusty Burger', href: 'https://www.instagram.com/rustyburgeroficial/', mobileClass: 'h-14 max-w-[100px]', desktopClass: 'h-16 max-w-[130px]' },
  { src: '/images/partners/track-and-field-logo.png', alt: 'Track & Field', href: 'https://www.instagram.com/trackfieldbelem/', mobileClass: 'h-14 max-w-[100px]', desktopClass: 'h-16 max-w-[130px]' },
];

const apoioPartners = [
  { src: '/images/partners/bermax-logo.png', alt: 'Bermax', href: 'https://www.instagram.com/bermaxculture/', mobileClass: 'h-12 max-w-[80px]', desktopClass: 'h-14 max-w-[110px]' },
  { src: '/images/partners/Logo_unineuro_diagnosticos.jpg-removebg-preview.png', alt: 'Unineuro', href: 'https://unineurodiagnosticos.com.br/', mobileClass: 'h-12 max-w-[80px]', desktopClass: 'h-14 max-w-[110px]' },
];

const ApoiadoresSection = () => {
  return (
    <section className="bg-rvl-escuro py-16 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-playfair text-2xl md:text-3xl text-rvl-creme mb-12 tracking-widest uppercase">
          Empresas Parceiras
        </h2>

        {/* Cotas maiores — Mobile: 2 por linha, último centralizado */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 mb-12 md:hidden">
          {bigPartners.map((partner, i) => (
            <a
              key={partner.alt}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center ${i === bigPartners.length - 1 && bigPartners.length % 2 !== 0 ? 'col-span-2' : ''}`}
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className={`w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 mix-blend-screen ${partner.mobileClass}`}
              />
            </a>
          ))}
        </div>

        {/* Cotas maiores — Desktop */}
        <div className="hidden md:flex flex-nowrap justify-center items-center gap-10 mb-12">
          {bigPartners.map((partner) => (
            <a
              key={partner.alt}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center justify-center"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className={`w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 mix-blend-screen ${partner.desktopClass}`}
              />
            </a>
          ))}
        </div>

        {/* Cotas menores — Mobile */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-10 mb-12 md:hidden">
          {smallPartners.map((partner) => (
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

        {/* Cotas menores — Desktop */}
        <div className="hidden md:flex flex-nowrap justify-center items-center gap-10 mb-12">
          {smallPartners.map((partner) => (
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

        {/* Divisor Apoio */}
        <div className="border-t border-white/10 mb-10" />

        <h3 className="font-playfair text-lg md:text-xl text-rvl-creme/70 mb-8 tracking-widest uppercase">
          Apoio
        </h3>

        {/* Apoio — logos */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8">
          {apoioPartners.map((partner) => (
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
                className={`w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 mix-blend-screen ${partner.mobileClass} md:${partner.desktopClass}`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApoiadoresSection;
