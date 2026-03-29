import { useEffect } from 'react';
import JejumHeroSection from '@/components/sections/jejum/JejumHeroSection';
import JejumInfoSections from '@/components/sections/jejum/JejumInfoSections';
import FooterSection from '@/components/sections/FooterSection';

const JejumPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Jejum 40 Dias · Revival Conference';
  }, []);

  return (
    <main className="min-h-screen bg-rvl-escuro">
      <JejumHeroSection />
      <JejumInfoSections />
      <FooterSection />
    </main>
  );
};

export default JejumPage;
