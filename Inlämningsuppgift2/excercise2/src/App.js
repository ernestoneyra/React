
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useState} from 'react';
//import React from 'react';
import Home from './Home';
import RegHighscore from './RegHighscore';


if (module.hot) {
    module.hot.accept();
  }

/* export default function App() {
    return (
        <div>
            
        </div>
    )
} */



const App = () => {

      const [scores, setScore] = useState([]);

    const addScore = (score) => {
        setScore([...scores, score])
        console.log(score)
    }   


      /* const score = [
        {
          id: 1,
          game: "Tetris",
          date: "2020-01-20",
          player: "John Doe",
          highscore: "100 000p",
        },
        {
          id: 2,
          game: "Pacman",
          date: "2020-01-02",
          player: "Jane Doe",
          highscore: "102 200p",
        },
        {
          id: 3,
          game: "Asteroids",
          date: "2020-01-25",
          player: "Jessica Doe",
          highscore: "103 033p",
        },
      ];  */ 


    return (
        <Router>
            <Switch>
                <Route exact path="/new">
                    <RegHighscore onRegister={addScore}/>
                  
                </Route>
                <Route path="/">
                    <Home score={scores}/>
                </Route>
            </Switch>
        </Router>
        
    );

};


export default App;


