interface ScoreBoardProps {
  score: number;
  maxScore: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, maxScore }) => {
  return (
    <section className="flex flex-col gap-3 justify-center items-center my-3 mx-4 lg:flex-row">
      <div className="scoreboard-style">
        Current Score: {score}
      </div>
      <div className="scoreboard-style">Max Score: {maxScore}</div>
    </section>
  );
};

export default ScoreBoard;
