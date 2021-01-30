const styles = {
  border: "3px solid black",
  margin: "5px",
};

const Scoreblock = ({ score }) => {
  return (
    <div className="mb-3 p-3"  style={styles}>
      <h5>{score.game}</h5>
      <div>2
        {score.player}
        {score.date}
        <p className="float-right">{score.highscore}</p>
      </div>
    </div>
  );
};

export default Scoreblock;
