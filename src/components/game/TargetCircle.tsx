interface TargetCircleProps {
  isPulsing: boolean;
  isShaking: boolean;
}

const TargetCircle = ({ isPulsing, isShaking }: TargetCircleProps) => {
  const classes = [
    'game-target',
    isPulsing ? 'game-target--pulse' : '',
    isShaking ? 'game-target--shake' : '',
  ].filter(Boolean).join(' ');

  return <div className={classes} />;
};

export default TargetCircle;
