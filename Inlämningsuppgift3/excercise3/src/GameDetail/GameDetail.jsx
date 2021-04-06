import React from "react";
import { useParams, Link } from "react-router-dom";
//import HighScore from "../HighScore/HighScore";
//import Highscore2 from "../HighScore/HighScore2";
import Scoreblock2 from "../ScoreBlock2/ScoreBlock2";
//import Scoreblock from "../Scoreblock/Scoreblock";

export default function GameDetail({ scores, games, homeScore }) {
  const { slug } = useParams();

  //console.log(games)

  const game = games.find((game) => game.urlSlug === slug); //.filter?
  //få in från .json filen
  //const currentGameHighscores = homeScore.filter((score) => score.urlSlug === game.urlSlug)

  //console.log(currentGameHighscores)
//const currentHighScore = homeScore.filter((score) => score.urlSlug === game.urlslug)
//console.log(score) 


  /* if (score.length !== 0) {
   score.sort((a, b) => b.highscore - a.highscore);
  }  
  console.log(score); */
  //console.log(score)

  return (
    <>
      <nav className="navbar navbar-dark bg-info d-flex justify-content-center mb-4">
        <span className="navbar-brand mb-0">
          <Link to={"/"}>
            <h1 style={{ color: "white" }}>High Score</h1>
          </Link>
        </span>
      </nav>

      <div className="container">
        <div className=" d-flex">
          <div className="row">
            <h1>{game.game}</h1>
            <p className="">{game.description}</p>
            <p className="">{game.genre}</p>
            <p className="">{game.release_year}</p>
          </div>
          <img className="ms-3" src={game.imageUrl} alt={game.game} />
        </div>

        <div className="d-flex justify-content-center">
          <h1>High Scores</h1>
        </div>

        <Scoreblock2 scores={scores} homeScore={homeScore}  />
      </div>
    </>
  );
}
