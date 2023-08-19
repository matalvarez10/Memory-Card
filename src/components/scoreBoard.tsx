interface ScoreBoardProps {
  score: number;
  maxScore: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, maxScore }) => {
  return (
    <section className="flex flex-row gap-3 justify-center my-3">
      <div className="scoreboard-style">
        Current Score: {score}
      </div>
      <div className="scoreboard-style">Max Score: {maxScore}</div>
    </section>
  );
};

export default ScoreBoard;
