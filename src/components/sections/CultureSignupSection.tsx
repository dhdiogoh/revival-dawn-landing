import { useState } from 'react';
import { Church, X, Clock } from 'lucide-react';

const CultureSignupSection = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="bg-rvl-escuro text-rvl-creme py-20 md:py-28 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Conteúdo principal */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    <div className="w-16 h-16 rounded-full bg-rvl-laranja/20 flex items-center justify-center mb-6">
                        <Church className="w-8 h-8 text-rvl-laranja" />
                    </div>

                    <h2 className="font-bebas text-4xl md:text-6xl tracking-wide mb-6">
                        SUA IGREJA PODE NOS RECEBER!
                    </h2>

                    <div className="font-inter text-base md:text-lg leading-relaxed space-y-4 opacity-80 mb-10">
                        <p>
                            Em breve abriremos o cadastro para igrejas que desejam receber a equipe da RVL Culture.
                        </p>
                        <p>
                            Se você é pastor ou líder e deseja que nossa equipe vá até sua igreja,
                            poderá se inscrever para participar da agenda.
                        </p>
                    </div>

                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-rvl-creme text-rvl-escuro rounded-full px-6 py-3 font-inter font-bold text-sm uppercase tracking-wide hover:opacity-90 hover:scale-105 transition-all shadow-[0_0_30px_rgba(251,244,228,0.15)]"
                    >
                        Quero cadastrar minha Igreja para receber a RVL Culture
                    </button>
                </div>

                {/* Modal informativo */}
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                            onClick={() => setShowModal(false)}
                        />

                        {/* Modal */}
                        <div className="relative bg-rvl-creme-bg text-rvl-escuro rounded-2xl w-full max-w-md p-8 md:p-10 shadow-2xl text-center">
                            {/* Botão fechar */}
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-rvl-escuro/10 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="w-16 h-16 rounded-full bg-rvl-laranja/15 flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-8 h-8 text-rvl-laranja" />
                            </div>

                            <h3 className="font-bebas text-2xl md:text-3xl text-rvl-escuro tracking-wide mb-3">
                                EM BREVE!
                            </h3>
                            <p className="font-inter text-rvl-escuro/70 leading-relaxed mb-8">
                                O cadastro para igrejas que desejam receber a RVL Culture será aberto em breve.
                                Fique atento às nossas redes sociais para não perder a abertura!
                            </p>

                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-rvl-laranja text-primary-foreground rounded-lg px-8 py-3 font-inter font-bold text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
                            >
                                ENTENDI
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CultureSignupSection;
