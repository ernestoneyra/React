import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react';
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
  const [homeScore, setHomeScore] = useState([]);

  

  const addScore = (score) => {
   
    setScore([...scores, score]);
   // console.log(score);
  };

    

  useEffect(() => {

    fetch('./highscores.json')
    .then(resp => resp.json())
    .then(homeScore => {
      
      //console.log(score)
      setHomeScore(homeScore)
    })
    
 
  }, [])

  useEffect(() => {

    fetch('./games.json')
    .then(resp => resp.json())
    .then(games => {
      
      //console.log(games)
      setGames(games)
    })
    
 
  }, [])


  console.log(games)

  return (
    <Router>
      <Switch>
        <Route exact path="/new">
          <RegHighscore onRegister={addScore} />
        </Route>
        <Route path="/games/:slug">
          <GameDetail score={scores} games={games}/>
        </Route>
        <Route path="/">
          <Home  homeScore={homeScore} games={games}/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;


/* const score = [
  {
    id: 1,
    game: "Tetris",
    date: "2020-01-20",
    player: "John Doe",
    highscore: "100 000",
    urlSlug: "tetris",
    genre: "Genre: Puzzle",
    release_year: "Release Year: 1984",
    description: "Allows players to rotate falling blocks strategically to clear levels. ",
    imageUrl: 'https://via.placeholder.com/300x300.png?text=Tetris'
  },
  {
    id: 2,
    game: "Pacman",
    date: "2020-01-02",
    player: "Jane Doe",
    highscore: "102 200",
    urlSlug: "pacman",
    genre: "Genre: Platform",
    release_year: "Release Year: 1980",
    description: "The player controls Pac-Man, who must eat all the dots inside an enclosed maze while avoiding four colored ghosts. Eating large flashing dots called Power Pellets causes the ghosts to turn blue, allowing Pac-Man to eat them for bonus points.",
    imageUrl: 'https://via.placeholder.com/300x300.png?text=Pacman'
  },
  {
    id: 3,
    game: "Asteroids",
    date: "2020-01-25",
    player: "Jessica Doe",
    highscore: "103 033",
    urlSlug: "asteroids",
    genre: "Genre: Shooter",
    release_year: "Relase Year: 1979",
    description: "The object of the game is to shoot and destroy the asteroids and saucers, while not colliding with either, or being hit by the saucers' counter-fire.",
    imageUrl: 'https://via.placeholder.com/300x300.png?text=Asteroids'
  },
];  */