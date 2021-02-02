const styles = {
  border: "3px solid black",
  margin: "5px",
};

const Scoreblock = ({ score }) => {
  return (
    <div className="mb-3 p-3" style={styles}>
      <h4>{score.game}</h4>
      <div>
        {score.player}, {score.date}
        <p className="float-end">{score.highscore}</p>
      </div>
    </div>
  );
};

export default Scoreblock;
