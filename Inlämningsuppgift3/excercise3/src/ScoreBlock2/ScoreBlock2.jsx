//import { Link } from 'react-router-dom'
import { useParams} from "react-router-dom";

const Scoreblock2 = ({ scores, homeScore,  }) => {
  const { slug } = useParams();

  const score = homeScore.filter((score) => score.urlSlug === slug)
  
  /* const score2 = scores.filter((score) => score.game === slug)
  console.log(score2[0]) */
  //const currentGameHighscores = homeScore.filter((score) => score.urlSlug === score.game.urlSlug)
  
  //console.log(currentGameHighscores)

 

//console.log(score[0])
  return (
    <div className="d-flex row">
      <div className="border border-dark mb-2">
          <div className="mt-2">
            {score[0].player}, {score[0].date}, {score[0].game.title}
            <p className="float-end">{score[0].highscore} p</p>
          </div>
          
          </div>
          <div>
          {scores.map((score) => (
        <div className="border border-dark mb-2">
          <div className="mt-2">
            {score.player}, {score.date}, {score.game.title}
            <p className="float-end">{score.highscore} p</p>
          </div>
        </div>
      ))}
          </div>
    </div>
  );
};

export default Scoreblock2;


/* {scores.map((score) => (
        <div className="border border-dark mb-2">
          <div className="mt-2">
            {score.player}, {score.date}, {score.game.title}
            <p className="float-end">{score.highscore} p</p>
          </div>
        </div>
      ))} */