export function MarqueeBanner() {
    const items = [
        'AVIVAMENTO', 'UNIDADE', 'EXCELÊNCIA', 'BELÉM',
        'NORTE DO BRASIL', 'UM NOVO AMANHECER', 'REVIVAL',
        '08.05.2026', 'CONFERENCE 26\''
    ]

    const separator = <span className="mx-3 text-[#E8622A]">·</span>

    const renderItems = () => items.map((item, i) => (
        <span key={i} className="whitespace-nowrap">
            {item}{separator}
        </span>
    ))

    return (
        <div className="absolute bottom-0 left-0 right-0 h-[36px] md:h-[44px] bg-white overflow-hidden flex items-center z-20 pointer-events-none text-[#E8622A] font-inter font-semibold uppercase text-[11px] md:text-[13px]">
            <div
                className="flex whitespace-nowrap"
                style={{ animation: 'marquee 18s linear infinite' }}
            >
                {/* Repetir 3x para loop sem gap visível */}
                <span className="flex">{renderItems()}</span>
                <span className="flex">{renderItems()}</span>
                <span className="flex">{renderItems()}</span>
            </div>
        </div>
    )
}
