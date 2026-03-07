import RvlCultureSection from '@/components/sections/RvlCultureSection';
import CultureSignupSection from '@/components/sections/CultureSignupSection';
import FooterSection from '@/components/sections/FooterSection';
import { useEffect } from 'react';

const RevivalCulture = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-rvl-creme-bg">
      <RvlCultureSection />
      <CultureSignupSection />
      <FooterSection />
    </main>
  );
};

export default RevivalCulture;
