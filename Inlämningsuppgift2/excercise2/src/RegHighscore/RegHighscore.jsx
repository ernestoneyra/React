import {useState} from 'react';
import {useHistory} from 'react-router-dom';






const RegHighscore = () => {
    return (
    <div className="container">
        <h1 className="mb-4 text-center">Register highscore</h1>
        <label className="mb-2" for="game">Game:</label>
        <input type="inputType" id="game" className="form-control"/>
        <label className="mb-2" for="player">Player:</label>
        <input type="inputType" id="player" className="form-control"/>
        <label className="mb-2" for="date">Date:</label>
        <input type="inputType" id="date" className="form-control"/>
        <label className="mb-2" for="score">Score:</label>
        <input type="inputType" id="score" className="form-control"/>
        <button className="btn btn-primary">Register</button>
    </div>
    )
};

export default RegHighscore;


/* export default function RegHighscore() {
    return (
        <div>
            
        </div>
    )
}
 */