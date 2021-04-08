//import { Link } from 'react-router-dom'
import { useParams} from "react-router-dom";

const Scoreblock2 = ({ scores, homeScore, games }) => {
  const { slug } = useParams();
  //const game = games.find((game) => game.urlSlug === slug); 
  const score = homeScore.filter((score) => score.urlSlug === slug)
  const scoress = scores.filter((score) => score.urlSlug === slug) 
  console.log(homeScore)




  /* const score2 = scores.filter((score) => score.game === slug)
  console.log(score2[0]) */
  //const currentGameHighscores = homeScore.filter((score) => score.urlSlug === score.game.urlSlug)
  
  //console.log(currentGameHighscores)

 /*  const currentGameHighscores = homeScore.filter((score) => {console.log('score.urlSlug',score.urlSlug, 'game.urlSlug', game.urlSlug); return score.urlSlug === game.urlSlug} )

console.log(currentGameHighscores) */
  //console.log(score)
  //console.log(game)
  const combined = [...score, ...scoress]
  //let sorted = combined.sort((a,b)=> a.highscore-b.highscore)
/* for (let highscore of combined) {
  let sorted = highscore.sort((a,b)=> a.highscore-b.highscore)
  console.log(sorted)
} */
 
/* const sortedHighscores = games.map((game) =>
scores
  .filter((highscore) => highscore.urlSlug === game.urlSlug)
  .sort((a, b) => b.highscore.localeCompare(a.highscore))
);
console.log(sortedHighscores) */
  console.log(combined)

  return (
    <div className="d-flex row">
      {/* <div className="border border-dark mb-2">
          <div className="mt-2">
            {score[0].player}, {score[0].date}, {score[0].game.title}
            <p className="float-end">{score[0].highscore} p</p>
          </div>
          
          </div> */}
          <div>
          {combined.map((score) => (
        <div key={score.id} className="border p-3 mb-2">
          <div className="mt-2">
            {score.player}, {score.date}, {score.urlSlug} 
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