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
  const [scores, setScore] = useState([]);
  const [games, setGames] = useState([]);
  //const [homeScore, setHomeScore] = useState([]);

  const addScore = (score) => {
    setScore([...scores, score]);
  };

  useEffect(() => {
    fetch("./highscores.json")
      .then((resp) => resp.json())

      .then((scores) => {
        setScore(scores);
      });
  }, []);

  useEffect(() => {
    fetch("./games.json")
      .then((resp) => resp.json())
      .then((games) => {
        setGames(games);
      });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/new">
          <RegHighscore onRegister={addScore} />
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
