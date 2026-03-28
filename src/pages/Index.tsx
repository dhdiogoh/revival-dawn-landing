import HeroSection from '@/components/sections/HeroSection';
import LineUpSection from '@/components/sections/LineUpSection';
import { useTransition } from '@/context/TransitionContext';
import InstitucionalSection from '@/components/sections/InstitucionalSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProgramacaoSection from '@/components/sections/ProgramacaoSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NewDawnSection from '@/components/sections/NewDawnSection';
import QuandoOndeSection from '@/components/sections/QuandoOndeSection';
import PreSaleSection from '@/components/sections/PreSaleSection';
import RvlLancamentoSection from '@/components/sections/RvlLancamentoSection';
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
      <LineUpSection />
      <RvlLancamentoSection />
      <PreSaleSection />
      <InstitucionalSection />
      <TimelineSection />
      <ExperienceSection />
      <ProgramacaoSection />
      <TestimonialsSection />
      <NewDawnSection />
      <QuandoOndeSection />
      <FooterSection />
    </main>
  );
};

export default Index;
