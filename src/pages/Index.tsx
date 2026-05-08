import HeroSection from '@/components/sections/HeroSection';
import { useTransition } from '@/context/TransitionContext';
import QuandoOndeSection from '@/components/sections/QuandoOndeSection';
import PreSaleSection from '@/components/sections/PreSaleSection';
import RvlLancamentoSection from '@/components/sections/RvlLancamentoSection';
import ApoiadoresSection from '@/components/sections/ApoiadoresSection';
import FAQSection from '@/components/sections/FAQSection';
import FooterSection from '@/components/sections/FooterSection';
import ScrollSideNav from '@/components/ScrollSideNav';
import SobreRevivalBand from '@/components/SobreRevivalBand';
import BemVindoSection from '@/components/sections/BemVindoSection';
import CredenciamentoSection from '@/components/sections/CredenciamentoSection';
import AgendaSection from '@/components/sections/AgendaSection';
import PreletoresSection from '@/components/sections/PreletoresSection';
import AreasExperienciasSection from '@/components/sections/AreasExperienciasSection';
import SalaProfeticaSection from '@/components/sections/SalaProfeticaSection';
import MultiPalcosSection from '@/components/sections/MultiPalcosSection';
import AlimentacaoSection from '@/components/sections/AlimentacaoSection';
import EstacionamentoSection from '@/components/sections/EstacionamentoSection';
import InformacoesImportantesSection from '@/components/sections/InformacoesImportantesSection';

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
      <BemVindoSection />
      <CredenciamentoSection />
      <AgendaSection />
      <PreletoresSection />
      <AreasExperienciasSection />
      <SalaProfeticaSection />
      <MultiPalcosSection />
      <AlimentacaoSection />
      <EstacionamentoSection />
      <InformacoesImportantesSection />
      <RvlLancamentoSection />
      <QuandoOndeSection />
      <SobreRevivalBand />
      <ApoiadoresSection />
      <FAQSection />
      <FooterSection />
      <div style={{ display: 'none' }}>
        <PreSaleSection />
      </div>
      <ScrollSideNav />
    </main>
  );
};

export default Index;
