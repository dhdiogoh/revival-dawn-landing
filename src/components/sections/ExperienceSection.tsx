import { Heart, Users, Home, Sparkles, Wallet, Flame } from 'lucide-react';

const experiences = [
  { icon: Heart, text: 'Curas físicas' },
  { icon: Flame, text: 'Jovens assumindo chamados' },
  { icon: Home, text: 'Famílias restauradas' },
  { icon: Sparkles, text: 'Milagres sobrenaturais' },
  { icon: Wallet, text: 'Provisão financeira' },
  { icon: Users, text: 'Líderes avivados' },
];

const speakers = [
  'Vitor Ledo', 'Mayra Ledo', 'Gustavo Paiva', 'Alessandro Paiva', 'Davi Lago',
  'Michel Boudreau', 'Daniel Rebolledo', 'Bruce Friezer', 'Dênio Lara', 'Chelo Beltran',
  'Gilberto Araujo', 'Gabriel Prieto', 'Matheus Veiga', 'Daniel Kalta', 'Shawn Gabie', 'Cantarino',
];

const worshipMinistries = ['Link Music', 'Dunamis Music', 'FHOP Music', 'Altomonte Music'];

const ExperienceSection = () => {
  return (
    <section className="bg-rvl-exp-bg py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-bebas text-4xl md:text-6xl text-rvl-escuro tracking-wide mb-4">
          A EXPERIÊNCIA
        </h2>
        <p className="font-inter text-rvl-escuro/70 max-w-2xl leading-relaxed mb-12">
          Não movido apenas por emoção, mas por encontro genuíno com o Espírito Santo. Cada edição tem sido palco de histórias que mudam destinos.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {experiences.map((e) => (
            <div key={e.text} className="flex items-center gap-3">
              <e.icon className="w-5 h-5 text-rvl-laranja shrink-0" />
              <span className="font-inter text-sm text-rvl-escuro">{e.text}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-rvl-laranja/20 my-8" />

        <h3 className="font-bebas text-xl tracking-wide text-rvl-escuro mb-4">
          VOZES QUE JÁ PASSARAM PELA RVL
        </h3>
        <div className="flex flex-wrap gap-2 mb-12">
          {speakers.map((s) => (
            <span key={s} className="border border-rvl-escuro/30 rounded px-3 py-1 text-sm font-inter text-rvl-escuro">
              {s}
            </span>
          ))}
        </div>

        <div className="border-t border-rvl-laranja/20 my-8" />

        <h3 className="font-bebas text-xl tracking-wide text-rvl-escuro mb-4">
          MINISTÉRIOS DE ADORAÇÃO
        </h3>
        <div className="flex flex-wrap gap-3">
          {worshipMinistries.map((m) => (
            <span key={m} className="border-2 border-rvl-escuro font-inter font-bold px-4 py-2 text-sm text-rvl-escuro">
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
