
import Scoreblock from "../Scoreblock/Scoreblock";



const HighScore = ({ score, games }) => {
  return (
    <div className="">
      <Scoreblock  score={score} games={games}/>
    </div>
  );
};

export default HighScore;
