const FooterSection = () => {
  return (
    <footer className="bg-rvl-escuro py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-bebas text-6xl text-rvl-creme mb-4">RVL</h2>
        <p className="font-inter text-sm text-muted-foreground mb-6">
          08 e 09 de maio de 2026 — Hangar, Belém/PA
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="font-inter text-sm text-muted-foreground hover:text-rvl-creme transition-colors">
            Instagram
          </a>
          <a href="#" className="font-inter text-sm text-muted-foreground hover:text-rvl-creme transition-colors">
            YouTube
          </a>
        </div>
        <p className="font-inter text-xs text-muted-foreground/60">
          Revival Conference — Avivamento para Belém
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
