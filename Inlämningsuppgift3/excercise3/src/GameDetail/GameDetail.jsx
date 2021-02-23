import React, { useEffect } from "react";
import { useParams,  Link } from "react-router-dom";
import HighScore2 from "../HighScore/HighScore2";



export default function GameDetail({ score }) {

  
/* 
  useEffect(() => {

    fetch('./games.json')
    .then(resp => resp.json())
    .then(game => {
      
      console.log(game)
      
    })
    
 
  }, []) */



  const { slug } = useParams();

  const scores = score.find((score) => score.urlSlug == slug);

  return (
    <div>
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
        
    <HighScore2 score={scores}/>
      </div>
    </div>
  );
}
