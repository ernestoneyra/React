

const Scoreblock = ({ score }) => {
  return (
    <div className="d-flex row">
    
        {score.map((score) => (
          
          <div>
            <h4>{score.game}</h4>
            <div>
              {score.player}, {score.date}
              <p className="float-end">{score.highscore}</p>
            </div>
          </div>
        ))}
      </div>
   
  );
};

export default Scoreblock;
