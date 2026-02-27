import HeroSection from '@/components/sections/HeroSection';
import { useTransition } from '@/context/TransitionContext';
import InstitucionalSection from '@/components/sections/InstitucionalSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NewDawnSection from '@/components/sections/NewDawnSection';
import FormSection from '@/components/sections/FormSection';
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
      <InstitucionalSection />
      <TimelineSection />
      <ExperienceSection />
      <TestimonialsSection />
      <NewDawnSection />
      <FormSection />
      <FooterSection />
    </main>
  );
};

export default Index;
