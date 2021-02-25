

const Scoreblock = ({ score }) => {
  return (
    <div className="d-flex row">
    
        {score.map((score) => (
          
          <div className="border border-dark mb-1">
            <h4>{score.game}</h4>
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
