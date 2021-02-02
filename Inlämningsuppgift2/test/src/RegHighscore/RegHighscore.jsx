import { useState } from "react";
import { useHistory } from "react-router-dom";

const RegHighscore = ({ onEventAdded }) => {
  const history = useHistory();

  let [game, setGame] = useState("");
  let [player, setPlayer] = useState("");
  let [date, setDate] = useState("");
  let [highscore, setHighscore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const score = {
      game,
      player,
      date,
      highscore,
    };

    onEventAdded(score);

    history.push("/");
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <h1 className="mb-4 text-center">Register highscore</h1>
      <label className="mb-2" htmlFor="game">
        Game:
      </label>
      <input 
      type="text"
      value={game}
      onChange={(e) => setGame(e.target.value)}
      id="game" 
      className="form-control" />
      <label className="mb-2" htmlFor="player">
        Player:
      </label>
      <input 
      type="text" 
      value={player}
      onChange={(e) => setPlayer(e.target.value)}
      id="player" 
      className="form-control" />
      <label className="mb-2" htmlFor="date">
        Date:
      </label>
      <input 
      type="text" 
      value={date}
      onChange={(e) => setDate(e.target.value)}
      id="date" 
      className="form-control" />
      <label className="mb-2" htmlFor="score">
        Score:
      </label>
      <input 
      type="text" 
      value={highscore}
      onChange={(e) => setHighscore(e.target.value)}
      id="score" 
      className="form-control" />
      <button className="btn btn-primary" >Submit</button>
      </form>
    </div>
    
  );
};

////////////////////////////////////
export default RegHighscore;

/* export default function RegHighscore() {
    return (
        <div>
            
        </div>
    )
}
 */
