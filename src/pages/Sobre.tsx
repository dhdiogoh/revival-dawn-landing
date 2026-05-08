import InstitucionalSection from '@/components/sections/InstitucionalSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProgramacaoSection from '@/components/sections/ProgramacaoSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NewDawnSection from '@/components/sections/NewDawnSection';
import QuandoOndeSection from '@/components/sections/QuandoOndeSection';
import FooterSection from '@/components/sections/FooterSection';

const Sobre = () => (
  <main>
    {/* Mini hero */}
    <section className="bg-rvl-escuro pt-32 pb-16 px-6 text-center">
      <p className="text-rvl-laranja font-inter font-medium uppercase tracking-wider text-sm mb-3">
        Conheça a conferência
      </p>
      <h1 className="font-bebas text-rvl-creme tracking-wide leading-none" style={{ fontSize: 'clamp(2.5rem, 9vw, 6rem)' }}>
        REVIVAL CONFERENCE 2026
      </h1>
      <p className="font-inter text-rvl-creme/50 text-sm mt-4">
        08 e 09 de Maio · Hangar, Belém/PA
      </p>
    </section>

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

export default Sobre;
