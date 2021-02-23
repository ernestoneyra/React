
import Scoreblock from "../Scoreblock/Scoreblock";



const HighScore = ({ score }) => {
  return (
    <div className="">
      <Scoreblock key={score.id} score={score} />
    </div>
  );
};

export default HighScore;
