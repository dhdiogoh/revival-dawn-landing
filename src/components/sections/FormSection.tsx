import { useState } from 'react';
import { Check, ShieldCheck } from 'lucide-react';

const bullets = [
  'Notificação de abertura de inscrições',
  'Anúncios exclusivos de preletores',
  'Programação completa antecipada',
  'Conteúdos de aquecimento',
];

const FormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="formulario" className="bg-rvl-creme-bg py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {submitted ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-rvl-laranja flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-bebas text-3xl text-rvl-escuro tracking-wide mb-2">VOCÊ ESTÁ NA LISTA!</h3>
            <p className="font-inter text-rvl-escuro/60">Fique de olho no seu e-mail e WhatsApp.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-bebas text-4xl md:text-5xl text-rvl-escuro tracking-wide mb-4">
                QUERO RECEBER NOVIDADES
              </h2>
              <p className="font-inter text-rvl-escuro/70 mb-6">
                Em breve: programação, preletores e inscrições.
              </p>
              <ul className="space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 font-inter text-sm text-rvl-escuro/80">
                    <span className="text-rvl-laranja mt-0.5">●</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-inter text-sm text-rvl-escuro/70 block mb-1">Nome completo</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-border rounded-lg px-4 py-3 font-inter text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-rvl-laranja/50"
                />
              </div>
              <div>
                <label className="font-inter text-sm text-rvl-escuro/70 block mb-1">E-mail</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-border rounded-lg px-4 py-3 font-inter text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-rvl-laranja/50"
                />
              </div>
              <div>
                <label className="font-inter text-sm text-rvl-escuro/70 block mb-1">Telefone (WhatsApp)</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-border rounded-lg px-4 py-3 font-inter text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-rvl-laranja/50"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-rvl-laranja text-primary-foreground rounded-lg py-3 font-inter font-bold text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
              >
                QUERO FAZER PARTE
              </button>
              <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5 mt-4">
                <ShieldCheck className="w-4 h-4 text-rvl-laranja/70" /> Dados salvos com segurança. Sem spam.
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default FormSection;
