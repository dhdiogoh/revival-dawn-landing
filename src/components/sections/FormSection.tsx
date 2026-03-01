import { useState } from 'react';
import { Check, ShieldCheck, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const bullets = [
  'Notificação de abertura de inscrições',
  'Anúncios exclusivos de preletores',
  'Programação completa antecipada',
  'Conteúdos de aquecimento',
];

// Máscara de telefone BR: (XX) XXXXX-XXXX
const formatPhone = (value: string): string => {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : '';
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

// Validação de email simples
const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const FormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (emailError && isValidEmail(value)) {
      setEmailError('');
    }
  };

  const handlePhoneChange = (value: string) => {
    setPhone(formatPhone(value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setEmailError('');

    // Validar email
    if (!isValidEmail(email)) {
      setEmailError('Por favor, insira um e-mail válido.');
      return;
    }

    setLoading(true);

    try {
      const { error: supabaseError } = await supabase
        .from('rvl_leads')
        .insert({
          nome: name.trim(),
          email: email.trim().toLowerCase(),
          telefone: phone.replace(/\D/g, ''),
          data_inscricao: new Date().toISOString(),
        });

      if (supabaseError) {
        if (supabaseError.code === '23505') {
          setError('Este e-mail já está cadastrado! Fique tranquilo, você receberá as novidades.');
        } else {
          setError('Ocorreu um erro ao salvar. Tente novamente.');
          console.error('Supabase error:', supabaseError);
        }
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setError('Erro de conexão. Verifique sua internet e tente novamente.');
      console.error('Network error:', err);
    } finally {
      setLoading(false);
    }
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
              <p className="text-rvl-laranja font-medium mb-1 uppercase tracking-wider text-sm">Quero receber novidades</p>
              <h2 className="font-bebas text-4xl md:text-5xl text-rvl-escuro tracking-wide mb-3">
                PREENCHA E RECEBA VOUCHERS EXCLUSIVOS!
              </h2>
              <p className="font-inter text-rvl-escuro/70 mb-2 leading-relaxed">
                Inscreva-se agora e garanta seus vouchers para a sala profética, loja e muito mais. Você também
                receberá todas as novidades da RVL 26 em primeira mão.
              </p>
              <p className="font-inter text-sm italic text-rvl-escuro/50 mb-6">
                (Inscreva-se para receber atualizações por e-mail ou WhatsApp)
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
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="font-inter text-sm text-rvl-escuro/70 block mb-1">E-mail</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  className={`w-full border rounded-lg px-4 py-3 font-inter text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-rvl-laranja/50 ${emailError ? 'border-red-500' : 'border-border'
                    }`}
                  placeholder="seu@email.com"
                />
                {emailError && (
                  <p className="text-red-500 text-xs mt-1 font-inter">{emailError}</p>
                )}
              </div>
              <div>
                <label className="font-inter text-sm text-rvl-escuro/70 block mb-1">Telefone (WhatsApp)</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className="w-full border border-border rounded-lg px-4 py-3 font-inter text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-rvl-laranja/50"
                  placeholder="(91) 99999-9999"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-600 text-sm font-inter">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-rvl-laranja text-primary-foreground rounded-lg py-3 font-inter font-bold text-sm uppercase tracking-wide hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    ENVIANDO...
                  </>
                ) : (
                  'QUERO FAZER PARTE'
                )}
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
