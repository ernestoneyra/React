import { Link } from 'react-router-dom'

const Scoreblock = ({ homeScore}) => {
  return (
    <div className="d-flex row">
    
        {homeScore.map((score) => (
          
          <div  className="border border-dark mb-2">
          <Link to={`/games/${score.urlSlug}`}>
            <h4>{score.game.title}</h4>
            </Link>
            <div>
              {score.player}, {score.date}
              <p className="float-end">{score.highscore} p</p>
            </div>
          </div>
        ))}
      </div>
   
  );
};

export default Scoreblock;
