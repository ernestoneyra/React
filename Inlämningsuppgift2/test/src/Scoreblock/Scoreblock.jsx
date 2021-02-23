const Scoreblock = ({ score }) => {
  return (
    <div className="d-flex row">
      {score.map((score) => (
        <div className="border border-primary mb-3 pt-2">
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
