const TestimonyCard = () => {
    return (
        <div className="relative w-full aspect-[9/16] max-w-[328px] shrink-0 rounded-xl overflow-hidden shadow-lg border border-border">

            {/* Camada 1 — fundo gradiente */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(135deg, #E8622A 0%, #E8352A 40%, #F5823A 70%, #5BB8D4 100%)',
                    backgroundSize: '200% 200%',
                    animation: 'gradientShift 8s ease infinite',
                }}
            />

            {/* Camada 2 — textura de papel */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px 200px',
                }}
            />

            {/* Camada 3 — overlay escuro para legibilidade */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.4) 100%)',
                }}
            />

            {/* Camada 4 — aspas decorativas */}
            <div className="absolute top-4 left-4 font-bebas text-[120px] leading-none text-[#F5EDD8] opacity-15 select-none pointer-events-none">
                &ldquo;
            </div>

            {/* Camada 5 — conteúdo */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">

                {/* Tag no topo */}
                <div className="self-end">
                    <span className="text-[10px] tracking-[0.25em] uppercase font-inter text-[#F5EDD8]/70 border border-[#F5EDD8]/30 rounded-full px-3 py-1">
                        GRANDES COISAS O SENHOR FEZ
                    </span>
                </div>

                {/* Texto do testemunho com scroll interno */}
                <div
                    className="flex-1 mt-6 overflow-y-auto scrollbar-hide"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 2%, black 93%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 2%, black 93%, transparent 100%)',
                    }}
                >
                    <p className="font-inter text-[#F5EDD8] text-base leading-relaxed">
                        &ldquo;Em 2023, eu e meu marido estávamos afundados em dívidas. O cartão estava estourado com juros e as contas que não fechavam. Nós dois trabalhávamos, mas nos perdemos nas finanças e quando fizemos as contas, devíamos um valor muito alto, que ia além da nossa realidade. Como iríamos resolver? Não sabíamos. Mas seguimos servindo ao Senhor, amando pessoas e sendo fiéis.
                        <br /><br />
                        Fomos para RVL Conference, dias incríveis, em um momento específico, ouvimos de Deus em fazer uma entrega. No momento dos dízimos e ofertas, entregamos todo o valor que tínhamos na conta. No dia seguinte, recebemos uma ligação e uma pessoa disse que o Senhor havia direcionado ela para ofertar em nossa vida.
                        <br /><br />
                        Recebemos um valor que cobria toda a nossa dívida! A oferta foi suficiente para pagarmos as nossas contas e ainda sobrou um valor, justamente o que precisávamos para tirar nosso carro no consórcio.
                        <br /><br />
                        Nunca vou esquecer dessa experiência com Deus que tivemos na RVL! Grandes coisas o Senhor fez, grandes coisas o Senhor faz!&rdquo;
                    </p>
                </div>

                {/* Rodapé */}
                <div className="mt-4 pt-3 border-t border-[#F5EDD8]/20">
                    <p className="font-bebas text-[#F5EDD8] text-sm tracking-widest">
                        RVL CONFERENCE 2023
                    </p>
                    <p className="font-inter text-[#F5EDD8]/60 text-xs mt-0.5">
                        Testemunho de provisão
                    </p>
                </div>

            </div>
        </div>
    );
};

export default TestimonyCard;
