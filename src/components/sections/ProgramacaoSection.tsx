import { ImageCarousel } from '../ImageCarousel';

const ProgramacaoSection = () => {
    // Placeholder images for the carousel
    const programacaoImages = [
        '/images/programacao-rvl/programacao-compressed/rvl-box.jpg',
        '/images/programacao-rvl/programacao-compressed/sala-profetica-rvl.jpg',
        '/images/programacao-rvl/programacao-compressed/workshop-rvl-2.jpg',
        '/images/programacao-rvl/programacao-compressed/workshop-rvl.jpg',
    ];

    return (
        <section className="bg-rvl-creme-bg text-rvl-escuro py-20 md:py-28 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2">
                    <h2 className="font-bebas text-4xl md:text-6xl tracking-wide mb-6">
                        PROGRAMAÇÃO
                    </h2>

                    <div className="font-inter text-base md:text-lg leading-relaxed space-y-4 opacity-80">
                        <p>
                            Além das sessões com preletores, a conferência conta com workshops sobre temas específicos,
                            abrangendo as esferas da sociedade, dons, ministérios e chamados, conduzidos por pastores
                            convidados.
                        </p>
                        <p>
                            Também temos a sala profética, onde nossa equipe de intercessão ora, declara e se move no
                            profético sobre a vida das pessoas.
                        </p>
                        <p>
                            Além disso, podcasts acontecem em tempo real e stands com ativações físicas de parceiros, da
                            nossa escola e da nossa loja.
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl">
                    <ImageCarousel images={programacaoImages} altPrefix="Programação" />
                </div>
            </div>
        </section>
    );
};

export default ProgramacaoSection;
