interface DawnOverlayProps {
  visible: boolean;
}

const DawnOverlay = ({ visible }: DawnOverlayProps) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center pointer-events-none">
      <div className="dawn-flash absolute inset-0" />
      <h1 className="dawn-text font-bebas text-game-cream text-5xl sm:text-7xl md:text-8xl tracking-wider z-10 text-center px-4 drop-shadow-lg">
        UM NOVO AMANHECER
      </h1>
    </div>
  );
};

export default DawnOverlay;
