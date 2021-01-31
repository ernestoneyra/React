
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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


    return (
        <Router>
            <Switch>
                <Route exact path="/score/:id">
                    <RegHighscore score={score}/>
                </Route>
                <Route path="/">
                    <Home score={score}/>
                </Route>
            </Switch>
        </Router>
        
    );

};


export default App;