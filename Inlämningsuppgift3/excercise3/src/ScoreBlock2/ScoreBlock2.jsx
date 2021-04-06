//import { Link } from 'react-router-dom'

const Scoreblock2 = ({ scores }) => {
  return (
    <div className="d-flex row">
      {scores.map((score) => (
        <div className="border border-dark mb-2">
          <div className="mt-2">
            {score.player}, {score.date}, {score.game}
            <p className="float-end">{score.highscore} p</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Scoreblock2;
