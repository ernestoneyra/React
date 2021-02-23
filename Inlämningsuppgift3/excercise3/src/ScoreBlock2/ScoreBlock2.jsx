import { Link } from 'react-router-dom'

const Scoreblock = ({ score }) => {
  return (
    <div className="d-flex row">
    
        {score.map((score) => (
          
          <div  className="border border-dark mb-2">
          <Link to={`/games/${score.urlSlug}`}>
            {/* <h4>{score.game}</h4> */}
            </Link>
            <div className="mt-2">
              {score.player}, {score.date}
              <p className="float-end">{score.highscore} p</p>
            </div>
          </div>
        ))}
      </div>
   
  );
};

export default Scoreblock;
