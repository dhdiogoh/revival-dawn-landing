import { useState } from 'react';
import { Church, X, Check, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

// Formatters
const formatPhone = (value: string): string => {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return digits.length ? `(${digits}` : '';
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const formatCEP = (value: string): string => {
    const digits = value.replace(/\D/g, '').slice(0, 8);
    if (digits.length <= 5) return digits;
    return `${digits.slice(0, 5)}-${digits.slice(5)}`;
};

const CultureSignupSection = () => {
    const [showModal, setShowModal] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        nome_contato: '',
        email: '',
        telefone: '',
        nome_igreja: '',
        nome_pastor: '',
        cep: '',
        cidade: '',
        endereco: '',
        media_frequentadores: '',
        mensagem: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        let formattedValue = value;
        if (name === 'telefone') formattedValue = formatPhone(value);
        if (name === 'cep') formattedValue = formatCEP(value);
        if (name === 'media_frequentadores') formattedValue = value.replace(/\D/g, '');

        setFormData(prev => ({ ...prev, [name]: formattedValue }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const { error: supabaseError } = await supabase
                .from('rvl_culture_churches')
                .insert({
                    nome_contato: formData.nome_contato.trim(),
                    email: formData.email.trim().toLowerCase(),
                    telefone: formData.telefone.replace(/\D/g, ''),
                    nome_igreja: formData.nome_igreja.trim(),
                    nome_pastor: formData.nome_pastor.trim(),
                    cep: formData.cep.replace(/\D/g, ''),
                    cidade: formData.cidade.trim(),
                    endereco: formData.endereco.trim(),
                    media_frequentadores: parseInt(formData.media_frequentadores, 10) || 0,
                    mensagem: formData.mensagem.trim() || null,
                });

            if (supabaseError) {
                if (supabaseError.code === '23505') {
                    setError('Este e-mail já está cadastrado em nossa lista de espera!');
                } else {
                    setError('Ocorreu um erro ao enviar seu cadastro. Tente novamente.');
                }
                console.error('Supabase error:', supabaseError);
            } else {
                setSubmitted(true);
            }
        } catch (err) {
            setError('Erro de conexão. Verifique sua internet.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-rvl-escuro text-rvl-creme py-20 md:py-28 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    <div className="w-16 h-16 rounded-full bg-rvl-laranja/20 flex items-center justify-center mb-6">
                        <Church className="w-8 h-8 text-rvl-laranja" />
                    </div>

                    <h2 className="font-bebas text-4xl md:text-6xl tracking-wide mb-6">
                        SUA IGREJA PODE NOS RECEBER!
                    </h2>

                    <div className="font-inter text-base md:text-lg leading-relaxed space-y-4 opacity-80 mb-10">
                        <p>
                            Se você é pastor ou líder e deseja que a equipe da RVL Culture vá até sua igreja,
                            preencha o formulário abaixo para participar da nossa agenda.
                        </p>
                    </div>

                    <button
                        onClick={() => {
                            setShowModal(true);
                            setSubmitted(false);
                        }}
                        className="bg-rvl-creme text-rvl-escuro rounded-full px-6 py-3 font-inter font-bold text-sm uppercase tracking-wide hover:opacity-90 hover:scale-105 transition-all shadow-[0_0_30px_rgba(251,244,228,0.15)]"
                    >
                        Quero cadastrar minha Igreja para receber a RVL Culture
                    </button>
                </div>

                {/* Modal Forms */}
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div
                            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                            onClick={() => setShowModal(false)}
                        />

                        <div className="relative bg-rvl-creme-bg text-rvl-escuro rounded-2xl w-full max-w-2xl p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-rvl-escuro/10 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {submitted ? (
                                <div className="text-center py-10">
                                    <div className="w-16 h-16 rounded-full bg-rvl-laranja flex items-center justify-center mx-auto mb-6">
                                        <Check className="w-8 h-8 text-primary-foreground" />
                                    </div>
                                    <h3 className="font-bebas text-3xl tracking-wide mb-4">MUITO OBRIGADO!</h3>
                                    <p className="font-inter text-rvl-escuro/80 text-lg">
                                        Seu cadastro foi recebido com sucesso. Em breve, nossa equipe entrará em contato para formalizar as informações e verificar a disponibilidade de agenda.
                                    </p>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="mt-8 bg-rvl-laranja text-primary-foreground rounded-lg px-8 py-3 font-inter font-bold text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
                                    >
                                        FECHAR
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="text-center mb-8 mt-4">
                                        <h3 className="font-bebas text-3xl tracking-wide mb-2">CADASTRO DE IGREJA</h3>
                                        <p className="font-inter text-sm text-rvl-escuro/70">
                                            Preencha as informações abaixo para solicitar a RVL Culture na sua igreja.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4 text-left">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="font-inter text-sm text-rvl-escuro/80 block mb-1 font-semibold">Seu Nome</label>
                                                <input required type="text" name="nome_contato" value={formData.nome_contato} onChange={handleChange} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background focus:ring-2 focus:ring-rvl-laranja/50 outline-none" placeholder="Ex: João Silva" />
                                            </div>
                                            <div>
                                                <label className="font-inter text-sm text-rvl-escuro/80 block mb-1 font-semibold">Nome da Igreja</label>
                                                <input required type="text" name="nome_igreja" value={formData.nome_igreja} onChange={handleChange} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background focus:ring-2 focus:ring-rvl-laranja/50 outline-none" placeholder="Ex: Igreja Exemplo" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="font-inter text-sm text-rvl-escuro/80 block mb-1 font-semibold">E-mail</label>
                                                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background focus:ring-2 focus:ring-rvl-laranja/50 outline-none" placeholder="contato@email.com" />
                                            </div>
                                            <div>
                                                <label className="font-inter text-sm text-rvl-escuro/80 block mb-1 font-semibold">WhatsApp / Telefone</label>
                                                <input required type="tel" name="telefone" value={formData.telefone} onChange={handleChange} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background focus:ring-2 focus:ring-rvl-laranja/50 outline-none" placeholder="(00) 00000-0000" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="font-inter text-sm text-rvl-escuro/80 block mb-1 font-semibold">Nome do Pastor Sênior</label>
                                                <input required type="text" name="nome_pastor" value={formData.nome_pastor} onChange={handleChange} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background focus:ring-2 focus:ring-rvl-laranja/50 outline-none" placeholder="Ex: Pr. Marcos" />
                                            </div>
                                            <div>
                                                <label className="font-inter text-sm text-rvl-escuro/80 block mb-1 font-semibold">Média de Frequentadores</label>
                                                <input required type="text" name="media_frequentadores" value={formData.media_frequentadores} onChange={handleChange} inputMode="numeric" className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background focus:ring-2 focus:ring-rvl-laranja/50 outline-none" placeholder="Ex: 500" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="font-inter text-sm text-rvl-escuro/80 block mb-1 font-semibold">CEP</label>
                                                <input required type="text" name="cep" value={formData.cep} onChange={handleChange} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background focus:ring-2 focus:ring-rvl-laranja/50 outline-none" placeholder="00000-000" />
                                            </div>
                                            <div>
                                                <label className="font-inter text-sm text-rvl-escuro/80 block mb-1 font-semibold">Cidade / Estado</label>
                                                <input required type="text" name="cidade" value={formData.cidade} onChange={handleChange} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background focus:ring-2 focus:ring-rvl-laranja/50 outline-none" placeholder="Sua cidade - UF" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-inter text-sm text-rvl-escuro/80 block mb-1 font-semibold">Endereço Completo</label>
                                            <input required type="text" name="endereco" value={formData.endereco} onChange={handleChange} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background focus:ring-2 focus:ring-rvl-laranja/50 outline-none" placeholder="Rua, Número, Bairro" />
                                        </div>

                                        <div>
                                            <label className="font-inter text-sm text-rvl-escuro/80 block mb-1 font-semibold">Mensagem (Opcional)</label>
                                            <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} rows={3} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background focus:ring-2 focus:ring-rvl-laranja/50 outline-none resize-none" placeholder="Deixe uma mensagem adicional se desejar..." />
                                        </div>

                                        {error && (
                                            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                                                <p className="text-red-600 text-sm font-inter text-center">{error}</p>
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full mt-4 bg-rvl-laranja text-primary-foreground rounded-lg py-3 font-inter font-bold text-sm uppercase tracking-wide hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
                                        >
                                            {loading ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                    ENVIANDO...
                                                </>
                                            ) : (
                                                'ENVIAR CADASTRO'
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CultureSignupSection;
