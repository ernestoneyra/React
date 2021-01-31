import {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React from 'react';
import Home from './Home';


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
        <HighScore/>
    )

}


export default App;