import { ImageCarousel } from '../ImageCarousel';

const RvlCultureSection = () => {
    // Placeholder images for the carousel
    const cultureImages = [
        '/images/rvl-culture-2024/11zon_compressed/11zon_compressed/foto1-rvl-culture_1_11zon.webp',
        '/images/rvl-culture-2024/11zon_compressed/11zon_compressed/foto2-rvl-culture_2_11zon.webp',
        '/images/rvl-culture-2024/11zon_compressed/11zon_compressed/foto3-rvl-culture_3_11zon.webp',
        '/images/rvl-culture-2024/11zon_compressed/11zon_compressed/foto4-rvl-culture_4_11zon.webp',
    ];

    return (
        <section className="bg-rvl-creme text-rvl-escuro py-20 md:py-28 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2">
                    <h2 className="font-bebas text-4xl md:text-6xl tracking-wide mb-6">
                        RVL CULTURE
                    </h2>

                    <div className="font-inter text-base md:text-lg leading-relaxed space-y-4 opacity-80">
                        <p>
                            Expressão prática de uma igreja que decidiu sair das quatro paredes e viver a Grande Comissão
                            (Mateus 28.19-20), espalhando a cultura do Reino por meio da manifestação de poder, mover
                            profético, curas, milagres, libertação e da presença de Deus.
                        </p>
                        <p>
                            RVL Culture é sobre ativar pessoas, fortalecer igrejas e gerar unidade no Corpo de Cristo. Nosso
                            objetivo é transmitir a cultura do Reino e propagar o poder do Espírito Santo, impactando
                            territórios e transformando corações.
                        </p>
                        <p>
                            Em 2024, passamos por 7 igrejas e visitamos 4 cidades: Castanhal, Bragança, Salvaterra e
                            Belém, além de 4 bairros da capital: Jurunas, Pedreira, Icoaraci e Marambaia.
                        </p>
                    </div>

                    <ul className="mt-8 space-y-3 font-inter font-medium text-rvl-laranja drop-shadow-sm text-sm md:text-base">
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-rvl-laranja"></span>
                            Mais de 400 pessoas ativadas
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-rvl-laranja"></span>
                            Mais de 50 servos envolvidos diretamente
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-rvl-laranja"></span>
                            Mais de 200 pessoas ministradas na sala profética e no corredor de fogo
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-rvl-laranja"></span>
                            Mais de 17 horas de ministração
                        </li>
                    </ul>
                </div>

                <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl">
                    <ImageCarousel images={cultureImages} altPrefix="RVL Culture" />
                </div>
            </div>
        </section>
    );
};

export default RvlCultureSection;
