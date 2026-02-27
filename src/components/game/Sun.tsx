interface SunProps {
  topPosition: number;
  isSnapping: boolean;
  isLocked?: boolean;
}

const Sun = ({ topPosition, isSnapping, isLocked }: SunProps) => {
  return (
    <div
      className={`game-sun ${isSnapping ? 'game-sun--snap' : ''} ${isLocked ? 'game-sun--locked' : ''}`}
      style={{ top: `${topPosition}px` }}
    />
  );
};

export default Sun;
