interface GameBackgroundProps {
  isDawn: boolean;
}

const GameBackground = ({ isDawn }: GameBackgroundProps) => {
  return (
    <>
      <div className={`game-sky ${isDawn ? 'game-sky--dawn' : ''}`} />
      <div className="game-horizon" />
      <div className="game-ground" />
    </>
  );
};

export default GameBackground;
