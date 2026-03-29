import { useEffect } from 'react';
import DevocionalClock from '@/components/sections/jejum/DevocionalClock';

const JejumTimerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Devocional · Jejum 40 Dias · RVL';
  }, []);

  return (
    <main className="min-h-screen bg-rvl-escuro">
      <DevocionalClock />
    </main>
  );
};

export default JejumTimerPage;
