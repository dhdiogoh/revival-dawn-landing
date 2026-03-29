import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Music, BookOpen, Flame, HandIcon, Heart, RotateCcw, ArrowLeft, Pause, Play, CheckCheck } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DevocionalStep {
  icon: React.ElementType;
  title: string;
  suggestedSec: number; // sugestão, não limite
}

interface DailyVerse {
  text: string;
  reference: string;
}

type Phase = 'idle' | 'running' | 'paused' | 'complete';

const STEPS: DevocionalStep[] = [
  { icon: Music,    title: 'Louvor e adoração',          suggestedSec: 7 * 60  },
  { icon: BookOpen, title: 'Leitura da Palavra',         suggestedSec: 10 * 60 },
  { icon: Flame,    title: 'Busca pela Presença',         suggestedSec: 5 * 60  },
  { icon: HandIcon, title: 'Intercessão — pauta do dia', suggestedSec: 5 * 60  },
  { icon: Heart,    title: 'Oração pessoal',             suggestedSec: 10 * 60 },
];

const VERSES: DailyVerse[] = [
  { text: 'Buscai ao Senhor enquanto se pode achar; invocai-o enquanto está perto.', reference: 'Isaías 55.6' },
  { text: 'O choro pode durar uma noite, mas a alegria vem pela manhã.', reference: 'Salmos 30.5' },
  { text: 'E eu lhes darei um coração para me conhecer, porque eu sou o Senhor.', reference: 'Jeremias 24.7' },
  { text: 'Aproximai-vos de Deus, e ele se aproximará de vós.', reference: 'Tiago 4.8' },
  { text: 'Mas tu, quando jejuares, unge a tua cabeça e lava o teu rosto.', reference: 'Mateus 6.17' },
  { text: 'Confiai nele em todos os tempos, ó povo; derramai diante dele os vossos corações.', reference: 'Salmos 62.8' },
  { text: 'Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes.', reference: 'Jeremias 33.3' },
  { text: 'Sede cheios do Espírito, falando uns com os outros em salmos, hinos e cânticos espirituais.', reference: 'Efésios 5.18–19' },
  { text: 'Sem fé é impossível agradar a Deus, porque é necessário que aquele que se aproxima de Deus creia que ele existe.', reference: 'Hebreus 11.6' },
  { text: 'Não cessei de dar graças por vós, lembrando-me de vós nas minhas orações.', reference: 'Efésios 1.16' },
  { text: 'Sede sóbrios e vigilantes. O diabo, vosso adversário, anda em derredor, como leão que ruge, procurando alguém para devorar.', reference: '1 Pedro 5.8' },
  { text: 'Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos darei descanso.', reference: 'Mateus 11.28' },
  { text: 'Porque eu bem sei os planos que tenho para vós, diz o Senhor, planos de paz e não de mal.', reference: 'Jeremias 29.11' },
  { text: 'Portanto, confessai os vossos pecados uns aos outros e orai uns pelos outros, para serdes curados.', reference: 'Tiago 5.16' },
  { text: 'O Senhor é o meu pastor; nada me faltará.', reference: 'Salmos 23.1' },
  { text: 'Não andeis ansiosos por coisa alguma; antes em tudo fazei conhecidas as vossas petições a Deus.', reference: 'Filipenses 4.6' },
  { text: 'O amor de Deus foi derramado em nossos corações pelo Espírito Santo que nos foi dado.', reference: 'Romanos 5.5' },
  { text: 'Quem habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.', reference: 'Salmos 91.1' },
  { text: 'Respondeu Jesus: Escrito está: Nem só de pão viverá o homem, mas de toda palavra que sai da boca de Deus.', reference: 'Mateus 4.4' },
  { text: 'Porque onde estiverem dois ou três reunidos em meu nome, aí estou no meio deles.', reference: 'Mateus 18.20' },
  { text: 'Deleita-te também no Senhor, e ele te concederá o que deseja o teu coração.', reference: 'Salmos 37.4' },
  { text: 'Ora, aquele que é poderoso para fazer infinitamente mais do que tudo quanto pedimos ou pensamos.', reference: 'Efésios 3.20' },
  { text: 'Sede fortes e corajosos. Não temais nem vos assusteis, porque o Senhor, vosso Deus, vai convosco.', reference: 'Deuteronômio 31.6' },
  { text: 'Mas os que esperam no Senhor renovarão as forças, subirão com asas como águias.', reference: 'Isaías 40.31' },
  { text: 'Porque separados de mim nada podeis fazer.', reference: 'João 15.5' },
  { text: 'O Espírito do Senhor está sobre mim, porque ele me ungiu para evangelizar os pobres.', reference: 'Lucas 4.18' },
  { text: 'Sede, pois, imitadores de Deus, como filhos amados.', reference: 'Efésios 5.1' },
  { text: 'O Senhor te guardará de todo o mal; ele guardará a tua alma.', reference: 'Salmos 121.7' },
  { text: 'Alegrai-vos sempre no Senhor; outra vez digo: alegrai-vos.', reference: 'Filipenses 4.4' },
  { text: 'Porque assim diz o Alto e o Sublime, que habita a eternidade: Habito no alto e santo lugar, mas também com o contrito e humilde de espírito.', reference: 'Isaías 57.15' },
  { text: 'De madrugada, Senhor, ouves a minha voz; de madrugada te apresento a minha oração e fico esperando.', reference: 'Salmos 5.3' },
  { text: 'Então orareis a mim, e eu vos ouvirei; buscar-me-eis e me achareis quando me buscardes de todo o coração.', reference: 'Jeremias 29.12–13' },
  { text: 'Portanto, submetei-vos a Deus; mas resisti ao diabo, e ele fugirá de vós.', reference: 'Tiago 4.7' },
  { text: 'Não vos conformeis com este século, mas transformai-vos pela renovação da vossa mente.', reference: 'Romanos 12.2' },
  { text: 'Eis que estou à porta e bato; se alguém ouvir a minha voz e abrir a porta, entrarei em sua casa.', reference: 'Apocalipse 3.20' },
  { text: 'E este é o avivamento que tivemos dele: que, se pedirmos alguma coisa segundo a sua vontade, ele nos ouve.', reference: '1 João 5.14' },
  { text: 'Edificando-vos na vossa santíssima fé e orando no Espírito Santo.', reference: 'Judas 1.20' },
  { text: 'E toda a assembleia adorou, e os cantores cantavam; e os trombeteiros soavam.', reference: '2 Crônicas 29.28' },
  { text: 'O Senhor está perto de todos os que o invocam, de todos os que o invocam em verdade.', reference: 'Salmos 145.18' },
  { text: 'Ora, o Deus da esperança vos encha de todo o gozo e paz em crença, para que abundeis em esperança pelo poder do Espírito Santo.', reference: 'Romanos 15.13' },
];

const STORAGE_KEY = 'jejum_day_started';
const CIRCUMFERENCE = 2 * Math.PI * 100;

function getTodayVerse(): DailyVerse {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return VERSES[dayOfYear % VERSES.length];
}

function formatTime(secs: number): string {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60).toString().padStart(2, '0');
  const s = (secs % 60).toString().padStart(2, '0');
  return h > 0 ? `${h}:${m}:${s}` : `${m}:${s}`;
}

const DevocionalClock = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<Phase>('idle');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [showVerse, setShowVerse] = useState(false);
  const [stepTimes, setStepTimes] = useState<number[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const step = STEPS[currentStepIndex];
  // Anel preenche até o tempo sugerido; depois fica cheio
  const progress = Math.min(elapsed / step.suggestedSec, 1);
  const dashOffset = CIRCUMFERENCE * (1 - progress);
  const reachedSuggestion = elapsed >= step.suggestedSec;

  useEffect(() => {
    if (phase !== 'running') {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setElapsed(prev => prev + 1);
    }, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [phase]);

  function handleStart() {
    localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    setPhase('running');
  }

  function handlePause() {
    setPhase('paused');
  }

  function handleResume() {
    setPhase('running');
  }

  function handleFinalize() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    const recorded = [...stepTimes, elapsed];
    setStepTimes(recorded);
    const nextIndex = currentStepIndex + 1;
    if (nextIndex >= STEPS.length) {
      setPhase('complete');
      setShowVerse(true);
      return;
    }
    setCurrentStepIndex(nextIndex);
    setElapsed(0);
    setPhase('idle');
  }

  function handleRestart() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentStepIndex(0);
    setElapsed(0);
    setPhase('idle');
    setShowVerse(false);
    setStepTimes([]);
  }

  const totalTime = stepTimes.reduce((a, b) => a + b, 0);

  const StepIcon = step.icon;

  return (
    <div className="min-h-screen bg-rvl-escuro flex flex-col items-center justify-center px-6 py-16 relative">
      {/* Voltar */}
      <button
        onClick={() => navigate('/jejum')}
        className="absolute top-8 left-6 flex items-center gap-2 font-inter text-rvl-creme/40 text-xs uppercase tracking-widest hover:text-rvl-creme/80 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Voltar
      </button>

      <div className="flex flex-col items-center text-center gap-8 max-w-sm w-full">

        {/* Label da etapa */}
        <div>
          <p className="font-inter text-rvl-laranja uppercase tracking-[0.3em] text-xs mb-2">
            DEVOCIONAL DIÁRIO
          </p>
          {phase !== 'complete' && (
            <>
              <h2 className="font-bebas text-3xl md:text-4xl text-rvl-creme tracking-wide">
                {step.title}
              </h2>
              <p className="font-inter text-rvl-creme/40 text-xs mt-1">
                Passo {currentStepIndex + 1} de {STEPS.length}
                {' · '}sugestão: {Math.round(step.suggestedSec / 60)} min
              </p>
            </>
          )}
        </div>

        {/* Anel SVG + cronômetro */}
        {phase !== 'complete' && (
          <div className="relative flex items-center justify-center">
            <svg viewBox="0 0 240 240" className="w-56 h-56 md:w-64 md:h-64 -rotate-90">
              {/* Track */}
              <circle
                cx="120" cy="120" r="100"
                fill="none"
                stroke="rgba(247,243,237,0.07)"
                strokeWidth="6"
              />
              {/* Progresso — preenche até o tempo sugerido */}
              <circle
                cx="120" cy="120" r="100"
                fill="none"
                stroke={reachedSuggestion ? '#F5C842' : '#E8622A'}
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={dashOffset}
                style={{ transition: 'stroke-dashoffset 0.9s ease-out, stroke 0.5s ease', willChange: 'stroke-dashoffset' }}
              />
            </svg>

            {/* Centro */}
            <div className="absolute flex flex-col items-center gap-2">
              <StepIcon className={cn('w-7 h-7 transition-colors', reachedSuggestion ? 'text-rvl-amarelo' : 'text-rvl-laranja')} />
              <span className="font-antarctican text-4xl md:text-5xl text-rvl-creme tracking-widest tabular-nums">
                {formatTime(elapsed)}
              </span>
              {reachedSuggestion && (
                <span className="font-inter text-rvl-amarelo text-[10px] uppercase tracking-widest animate-pulse">
                  sugestão atingida
                </span>
              )}
            </div>
          </div>
        )}

        {/* Indicadores de etapa */}
        {phase !== 'complete' && (
          <div className="flex items-center gap-4">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className={cn(
                    'flex flex-col items-center gap-1.5 transition-all duration-300',
                    i === currentStepIndex ? 'opacity-100 scale-110' : i < currentStepIndex ? 'opacity-40' : 'opacity-20'
                  )}
                >
                  <Icon className="w-4 h-4 text-rvl-creme" />
                  <div className={cn(
                    'h-0.5 rounded-full transition-all duration-300',
                    i === currentStepIndex ? 'w-5 bg-rvl-laranja' : i < currentStepIndex ? 'w-5 bg-rvl-creme/40' : 'w-1.5 bg-rvl-creme/20'
                  )} />
                </div>
              );
            })}
          </div>
        )}

        {/* Controles */}
        <div className="flex flex-col items-center gap-3 w-full">
          {/* Idle */}
          {phase === 'idle' && (
            <button
              onClick={handleStart}
              className="w-full flex items-center justify-center gap-2 bg-rvl-creme text-rvl-escuro rounded-full py-4 font-inter font-bold text-sm uppercase tracking-wide hover:opacity-90 hover:scale-105 transition-all"
            >
              <Play className="w-4 h-4" />
              INICIAR
            </button>
          )}

          {/* Rodando */}
          {phase === 'running' && (
            <div className="flex gap-3 w-full">
              <button
                onClick={handlePause}
                className="flex-1 flex items-center justify-center gap-2 border border-rvl-creme/20 text-rvl-creme/60 rounded-full py-4 font-inter font-bold text-sm uppercase tracking-wide hover:border-rvl-creme/40 hover:text-rvl-creme/80 transition-all"
              >
                <Pause className="w-4 h-4" />
                PAUSAR
              </button>
              <button
                onClick={handleFinalize}
                className={cn(
                  'flex-1 flex items-center justify-center gap-2 rounded-full py-4 font-inter font-bold text-sm uppercase tracking-wide transition-all',
                  reachedSuggestion
                    ? 'bg-rvl-laranja text-white hover:opacity-90 shadow-[0_0_24px_rgba(232,98,42,0.35)]'
                    : 'border border-rvl-creme/20 text-rvl-creme/50 hover:border-rvl-creme/40 hover:text-rvl-creme/80'
                )}
              >
                <CheckCheck className="w-4 h-4" />
                FINALIZAR
              </button>
            </div>
          )}

          {/* Pausado */}
          {phase === 'paused' && (
            <div className="flex gap-3 w-full">
              <button
                onClick={handleResume}
                className="flex-1 flex items-center justify-center gap-2 bg-rvl-creme text-rvl-escuro rounded-full py-4 font-inter font-bold text-sm uppercase tracking-wide hover:opacity-90 transition-all"
              >
                <Play className="w-4 h-4" />
                RETOMAR
              </button>
              <button
                onClick={handleFinalize}
                className="flex-1 flex items-center justify-center gap-2 border border-rvl-creme/20 text-rvl-creme/50 rounded-full py-4 font-inter font-bold text-sm uppercase tracking-wide hover:border-rvl-creme/40 hover:text-rvl-creme/80 transition-all"
              >
                <CheckCheck className="w-4 h-4" />
                FINALIZAR
              </button>
            </div>
          )}

          {/* Concluído */}
          {phase === 'complete' && (
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="w-16 h-16 rounded-full bg-rvl-laranja/15 flex items-center justify-center mb-2">
                <Heart className="w-8 h-8 text-rvl-laranja" />
              </div>
              <p className="font-bebas text-3xl text-rvl-creme tracking-wide">DEVOCIONAL CONCLUÍDO</p>
              <p className="font-inter text-rvl-creme/50 text-sm">Que Deus honre cada minuto entregue a Ele hoje.</p>

              {/* Resumo de tempo por etapa */}
              <div className="w-full mt-2 border border-rvl-creme/10 rounded-2xl overflow-hidden">
                {STEPS.map((s, i) => {
                  const Icon = s.icon;
                  const t = stepTimes[i] ?? 0;
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between px-5 py-3 border-b border-rvl-creme/5 last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-rvl-laranja/70 flex-shrink-0" />
                        <span className="font-inter text-rvl-creme/60 text-xs">{s.title}</span>
                      </div>
                      <span className="font-antarctican text-rvl-creme text-sm tabular-nums">
                        {formatTime(t)}
                      </span>
                    </div>
                  );
                })}
                <div className="flex items-center justify-between px-5 py-3 bg-rvl-laranja/10">
                  <span className="font-inter text-rvl-laranja text-xs uppercase tracking-widest font-semibold">Total</span>
                  <span className="font-antarctican text-rvl-laranja text-sm tabular-nums">{formatTime(totalTime)}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Versículo do dia */}
        <AnimatePresence>
          {showVerse && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="w-full border border-rvl-laranja/25 rounded-2xl p-7 bg-rvl-laranja/5 text-center"
            >
              <p className="font-inter text-rvl-laranja uppercase tracking-[0.3em] text-xs mb-4">
                VERSÍCULO DO DIA
              </p>
              <blockquote className="font-inter text-rvl-creme text-base md:text-lg leading-relaxed italic mb-4">
                "{getTodayVerse().text}"
              </blockquote>
              <p className="font-bebas text-rvl-laranja text-xl tracking-widest">
                {getTodayVerse().reference}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Recomeçar */}
        {phase === 'complete' && (
          <button
            onClick={handleRestart}
            className="flex items-center gap-2 border border-rvl-creme/20 text-rvl-creme/40 rounded-full px-6 py-2.5 font-inter text-xs uppercase tracking-wide hover:text-rvl-creme/70 hover:border-rvl-creme/40 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Recomeçar
          </button>
        )}
      </div>
    </div>
  );
};

export default DevocionalClock;
