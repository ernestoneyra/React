import React from 'react';
import HighScore from './HighScore';

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