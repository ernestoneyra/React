import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import {  useEffect } from "react";
import React from "react";
import Home from "./Home";
import RegHighscore from "./RegHighscore";
import "bootstrap/dist/css/bootstrap.min.css";
import GameDetail from "./GameDetail/GameDetail";
import { connect } from "react-redux";

if (module.hot) {
  module.hot.accept();
}

const App = (props) => {
  /*  let scores = useSelector(state => state.scores);
  let games = useSelector(state => state.games); */

  console.log(props);

  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/new">
          <RegHighscore scores={props.scores} />
        </Route>
        <Route path="/games/:slug">
          <GameDetail scores={props.scores} games={props.games} />
        </Route>
        <Route path="/">
          <Home scores={props.scores} games={props.games} />
        </Route>
      </Switch>
    </Router>
    </>
  );
};

function mapStateToProps(state) {
  const { scores } = state;
  const { games } = state;
  return { scores, games };
}

export default connect(mapStateToProps)(App);

//homeScore={homeScore}  till gamedetail
/* onRegister={addScore} */
