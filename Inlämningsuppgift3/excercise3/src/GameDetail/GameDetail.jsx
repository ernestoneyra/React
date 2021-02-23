import React from "react";
import { useParams,  Link } from "react-router-dom";
import HighScore from "../HighScore/HighScore";
import Highscore2 from "../HighScore/HighScore2";
import Scoreblock2 from "../ScoreBlock2/ScoreBlock2";
import Scoreblock from "../Scoreblock/Scoreblock";



export default function GameDetail({ score, games }) {

  console.log(games)

  const { slug } = useParams();

  const scores = games.find((score) => score.urlSlug == slug);  
  

  return (
    <>
      <nav className="navbar navbar-dark bg-info d-flex justify-content-center mb-4">
        <span className="navbar-brand mb-0">
          <Link to={"/"}>
            <h1>Highscore</h1>
          </Link>
          
        </span>
      </nav>
      
     
       <div className="container">
        <div className=" d-flex">
        <div className="row">
          <h1>{scores.game}</h1>
          <p className="">{scores.description}</p>
          <p className="">{scores.genre}</p>
          <p className="">{scores.release_year}</p>
          
          </div>
          <img className="ms-3" src={scores.imageUrl} alt={scores.game} />
        </div>
        
        <div className="d-flex justify-content-center">
          <h1>Highscores</h1>
        </div>
        <Scoreblock2 score={score} />
    
      </div> 
      
      </>
    
  );
}

/* <HighScore score={scores} games={games}/> */