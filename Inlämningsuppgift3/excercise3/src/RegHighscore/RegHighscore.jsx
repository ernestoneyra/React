import { useState } from "react";
import { useHistory } from "react-router-dom";

const RegHighscore = ({ onRegister }) => {
  const history = useHistory();

  const [game, setGame] = useState("");
  const [player, setPlayer] = useState("");
  const [date, setDate] = useState("");
  const [highscore, setHighscore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const score = {
     game,
      player,
      date,
      highscore,
    };

    console.log(score);

    onRegister(score);

    setGame("");
    setPlayer("");
    setDate("");
    setHighscore("");

    history.push("/");
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-info d-flex justify-content-center mb-4">
        <span className="navbar-brand mb-0">
          <h1>Register HighScore</h1>
        </span>
      </nav>
      <form className="container">
        <label className="mb-2" htmlFor="game">
          Game:
        </label>
        onChange={(e) => setGame(e.target.value)}
        <select className="form-select" id="game" >
        <option value="Choose game">Choose Game...</option>
          <option value="Tetris">Tetris</option>
          <option value="Pacman">Pacman</option>
          <option value="Asteroids">Asteroids</option>
        </select>
        
        <label className="mb-2" htmlFor="player">
          Player:
        </label>
        <input
          type="text"
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
          id="player"
          className="form-control"
        />
        <label className="mb-2" htmlFor="date">
          Date:
        </label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          id="date"
          className="form-control"
        />
        <label className="mb-2" htmlFor="score">
          Score:
        </label>
        <input
          type="text"
          value={highscore}
          onChange={(e) => setHighscore(e.target.value)}
          id="score"
          className="form-control"
        />
        <button className="btn btn-primary mt-2" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

////////////////////////////////////
export default RegHighscore;

