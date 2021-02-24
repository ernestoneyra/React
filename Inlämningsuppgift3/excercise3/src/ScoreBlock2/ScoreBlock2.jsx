import { Link } from 'react-router-dom'

const Scoreblock2 = ({ scores }) => {
  return (
    <div className="d-flex row">
    
        {scores.map((score) => (
          
          <div  className="border border-dark mb-2">
          
            <div className="mt-2">
              {score.player}, {score.date}
              <p className="float-end">{score.highscore} p</p>
            </div>
          </div>
        ))}
      </div>
   
  );
};

export default Scoreblock2;
/*  <Link to={`/games/${score.urlSlug}`}>
          <h4>{score.game.title}</h4>
            </Link> */