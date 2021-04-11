import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import Home from "./Home";
import RegHighscore from "./RegHighscore";
import "bootstrap/dist/css/bootstrap.min.css";
import GameDetail from "./GameDetail/GameDetail";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  /* const apiScores = "http://localhost:5000/scores"
  const apiGames = "http://localhost:5000/games" */
  const [scores, setScore] = useState([]);
  const [games, setGames] = useState([]);
  //const [homeScore, setHomeScore] = useState([]);

  const addScore = (score) => {
    setScore([...scores, score]);
  };

  useEffect(() => {
    fetch("http://localhost:5000/scores")
      .then((resp) => resp.json())

      .then((scores) => {
        setScore(scores);
      });
  }, []);
console.log(scores)
  useEffect(() => {
    fetch("http://localhost:5000/games")
      .then((resp) => resp.json())
      .then((games) => {
        setGames(games);
      });
  }, []);
  console.log(games)

  return (
    <Router>
      <Switch>
        <Route exact path="/new">
          <RegHighscore onRegister={addScore} scores={scores}/>
        </Route>
        <Route path="/games/:slug">
          <GameDetail scores={scores}  games={games} />
        </Route>
        <Route path="/">
          <Home scores={scores} games={games} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

//homeScore={homeScore}  till gamedetail
