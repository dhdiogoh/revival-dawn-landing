import { useEffect, useState } from 'react';

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    const el = document.getElementById('pre-venda');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-rvl-laranja text-white font-bebas tracking-widest text-sm md:text-base px-8 py-3 rounded-full shadow-lg hover:brightness-110 active:scale-95 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      GARANTA SEU LUGAR
    </button>
  );
};

export default FloatingCTA;
