const QuandoOndeSection = () => {
    return (
        <section className="bg-white text-rvl-escuro py-20 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 justify-between items-start md:items-center">
                <div className="md:w-1/2">
                    <h2 className="font-bebas text-5xl md:text-7xl tracking-wide text-rvl-laranja mb-6">
                        QUANDO E ONDE
                    </h2>
                    <div className="font-inter space-y-4">
                        <p className="font-bebas text-2xl md:text-3xl tracking-widest text-rvl-escuro">
                            08 E 09 DE MAIO DE 2026
                        </p>
                        <p className="text-lg text-rvl-escuro/90">
                            <strong>Hangar — Centro de Convenções da Amazônia</strong><br />
                            Av. Dr. Freitas, s/n – Marco – Belém/PA
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 font-inter text-lg text-rvl-escuro/80 space-y-2 border-l-2 border-rvl-laranja/30 pl-6 md:pl-10 py-2">
                    <p>Estamos nos preparando.</p>
                    <p>Algo maior está sendo construído.</p>
                    <p className="text-rvl-laranja font-medium mt-4 pt-2 tracking-wide uppercase text-sm md:text-base">Em breve: programação, preletores e inscrições.</p>
                </div>
            </div>
        </section>
    );
};

export default QuandoOndeSection;
