/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

const RegHighscore = ({ onRegister }) => {
  const history = useHistory();

  //const [game, setGame] = useState("");
  const [player, setPlayer] = useState("");
  const [date, setDate] = useState("");
  const [highscore, setHighscore] = useState("");
  const [urlSlug, setUrlSlug] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Allt från formuläret regisreras här
    const score = {
      //game,
      player,
      date,
      highscore,
      urlSlug,
    };

    onRegister(score);

    //setGame("");
    setPlayer("");
    setDate("");
    setHighscore("");

    //Byter sida till startsidan
    history.push("/");
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-info d-flex justify-content-center mb-4">
        <span className="navbar-brand mb-0">
          <h1>Register High Score</h1>
        </span>
      </nav>
      <form className="container">
        <label className="mb-2" htmlFor="game">
          Game:
        </label>

        <select
          className="form-select"
          id="urlSlug game"
          onChange={(e) => {
            //setGame(e.target.value);
            setUrlSlug(e.target.value);
          }}
        >
          <option value="Choose game">Choose Game...</option>
          <option value="tetris">Tetris</option>
          <option value="pacman">Pacman</option>
          <option value="asteroids">Asteroids</option>
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
        <Link to={"/"}>
          <button className="btn btn-info mt-2 ms-2">Back</button>
        </Link>
      </form>
    </div>
  );
};

////////////////////////////////////
export default RegHighscore;

/*  <label className="mb-2" htmlFor="score">
          UrlSlug:
        </label>
        <input
          type="text"
          value={urlSlug}
          onChange={(e) => setUrlSlug(e.target.value)}
          id="urlslug"
          className="form-control"
        /> */
