const GameOverComponent = ({
  handleModalClick,modalText,score,
}: {
  handleModalClick: () => void,
  modalText : string,
  score: number,
}) => {
  return (
    <div className="flex gap-4 flex-col justify-center items-center font-pixel text-white bg-red backdrop-blur-xl bg-opacity-30 border border-white h-1/5 w-1/4 rounded-md ">
      <p className="text-2xl">{modalText} SCORE: {score}</p>
      <button
        className="bg-pink-600 px-4 py-2 border border-white rounded-md"
        onClick={handleModalClick}
      >
        PLAY AGAIN
      </button>
    </div>
  );
};

export default GameOverComponent;
