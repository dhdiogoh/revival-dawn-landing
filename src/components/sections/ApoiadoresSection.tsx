const partners = [
  { src: '/images/partners/logo-blum.PNG', alt: 'Blum', href: 'https://www.instagram.com/blum.cookies/' },
  { src: '/images/partners/logo-rusty-burger.PNG', alt: 'Rusty Burger', href: 'https://www.instagram.com/rustyburgeroficial/' },
  { src: '/images/partners/logo-sushi-ruy-barbosa.png', alt: 'Sushi Ruy Barbosa', href: 'https://www.instagram.com/sushiruybarbosa/' },
  { src: '/images/partners/logo-zenith.png', alt: 'Zenith', href: 'https://www.instagram.com/zenith_belem/' },
  { src: '/images/partners/bermax-logo.png', alt: 'Bermax', href: 'https://www.instagram.com/bermaxculture/', small: true },
  { src: '/images/partners/track-and-field-logo.png', alt: 'Track & Field', href: 'https://www.instagram.com/trackfieldbelem/' },
];

const ApoiadoresSection = () => {
  return (
    <section className="bg-rvl-escuro py-16 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-playfair text-2xl md:text-3xl text-rvl-creme mb-10 tracking-widest uppercase">
          Apoiadores
        </h2>
        <div className="flex flex-nowrap justify-center items-center gap-6 md:gap-10 overflow-x-auto">
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
                className={`w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 mix-blend-screen ${
                  partner.small
                    ? 'h-8 md:h-10 max-w-[100px]'
                    : 'h-10 md:h-14 max-w-[130px]'
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApoiadoresSection;
