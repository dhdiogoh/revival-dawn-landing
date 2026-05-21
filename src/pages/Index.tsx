import HeroSection from '@/components/sections/HeroSection';
import { useTransition } from '@/context/TransitionContext';
import EventPhotosSection from '@/components/sections/EventPhotosSection';
import PregacoesSection from '@/components/sections/PregacoesSection';
import GaleriaFotosSection from '@/components/sections/GaleriaFotosSection';
import InstagramSection from '@/components/sections/InstagramSection';
import RvlCultureSection from '@/components/sections/RvlCultureSection';
import InstitucionalSection from '@/components/sections/InstitucionalSection';
import ApoiadoresSection from '@/components/sections/ApoiadoresSection';
import FooterSection from '@/components/sections/FooterSection';

interface IndexProps {
  animateIn?: boolean;
}

const Index = ({ animateIn }: IndexProps) => {
  const { fromGame, transitionProgress } = useTransition();
  const isVisible = !fromGame || transitionProgress === 'revealing' || transitionProgress === 'complete';

  return (
    <main
      style={{
        opacity: isVisible ? 1 : 0,
        transition: fromGame ? 'opacity 1.5s ease-in-out' : 'none'
      }}
    >
      <HeroSection animateIn={animateIn} />
      <EventPhotosSection />
      <PregacoesSection />
      <GaleriaFotosSection />
      <InstagramSection />
      <RvlCultureSection />
      <InstitucionalSection />
      <ApoiadoresSection />
      <FooterSection />
    </main>
  );
};

export default Index;
