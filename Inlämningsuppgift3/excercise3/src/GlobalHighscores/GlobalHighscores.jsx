import { Link } from "react-router-dom";

const GlobalHighscores = ({ scores }) => {

  //console.log(scores[0])

//scores[0].filter(score => score.highscore)

 /* let tetris = scores[0]
  console.log(scores[0])  */
  /* function groupItemBy(array, property) {
    let hash = {},
      props = property.split(".");
    for (let i = 0; i < array.length; i++) {
      let key = props.reduce(function (acc, prop) {
        return acc && acc[prop];
      }, array[i]);
      if (!hash[key]) hash[key] = [];
      hash[key].push(array[i]);
    }
    return hash;
  }

  let highscoresMap = Object.values(groupItemBy(scores, "game.id")); */

  //console.log(highscoresMap)

  /* if (!highscoresMap.length === 0) {
  for (const game in highscoresMap){
    game.sort((a, b) => a.highscore- b.highscore)
    console.log(game) 
    console.log(`${game}: ${highscoresMap[game]}`);
} 
} */

  //console.log(highscoresMap)

  /* const hej = score[0]
console.log(hej) */
  /* const topHighScores = []
highscoresMap.map(id => {
  return topHighScores.push(id)
})

console.log(topHighScores) */

  //console.log(score[0].id)

  /*  score.map(hej => (
 console.log('hej', hej)
 //hej.sort((a, b) => b.game  - a.game)

))  */
  //console.log(scores)

  /* 

  */

  // 1 - gruppera alla spel baserat på t.ex. id (dvs. "bollar")
  // 2 - för varje spelgruppering (t.ex. id=1) (hög med bollar), sortera highscores i fallande ordning (sort()) (boll med högsta highscore överst i högen)
  // 3 - hämta ut första highscore (boll) för varje gruppering

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

  //};

  return (
    <div>
      {scores.filter(highscore => highscore).map(score => (
       <div key={score.urlSlug} className="border border-dark mb-2">
          <Link to={`/games/${score.urlSlug}`}>
            <h4>{score.game.title}</h4>
          </Link>
          <div>
            {score.player}, {score.date}
            <p className="float-end">{score.highscore} p</p>
          </div>
        </div>
     
       
      ))}
    </div>
  );

/*   <li >
  {score.game.id}
  {score.highscore}
</li> */

  /* <div className="d-flex row">
      {scores.map((score) => (
        <div className="border border-dark mb-2">
          <Link to={`/games/${score.urlSlug}`}>
            <h4>{score.game.title}</h4>
          </Link>
          <div>
            {score.player}, {score.date}
            <p className="float-end">{score.highscore} p</p>
          </div>
        </div>
      ))}
    </div> */




  /*  return (
     <div className="d-flex row">
    
        {scores.map((score) => (
        
          <div  className="border border-dark mb-2">
          <Link to={`/games/${score.urlSlug}`}>
            <h4>{score.game.title}</h4>
            </Link>
            <div>
              {score.player}, {score.date}
              <p className="float-end">{score.highscore} p</p>
            </div>
          </div>
        ))}
      </div> 
   
  );  */
};

export default GlobalHighscores;
