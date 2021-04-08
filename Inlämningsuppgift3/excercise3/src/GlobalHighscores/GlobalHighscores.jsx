import { Link } from "react-router-dom";

const GlobalHighscores = ({ scores, games }) => {

  const sortedHighscores = games.map((game) =>
  scores
    .filter((highscore) => highscore.urlSlug === game.urlSlug)
    .sort((a, b) => b.highscore.localeCompare(a.highscore))
);
return (
  <div>
    {sortedHighscores.map((score, index) => (
      <div key={index} className="border p-3 mb-2">
        <Link to={`/games/${score[0].urlSlug}`}>
          <h4>{score[0].game.title}</h4>
        </Link>
        <div>
          {score[0].player}, {score[0].date}
          <p className="float-end">{score[0].highscore} p</p>
        </div>
      </div>
    ))}
  </div>
);

 
};

export default GlobalHighscores;


/* return (
  <div>
    {scores.map(score => (
     <div key={score.id} className="border border-dark mb-2">
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
); */

  //console.log(scores[0])
//console.log(games)
//scores[0].filter(score => score.highscore)
/* 
  let tetris = scores[0]
  console.log(scores[0])    */
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

  let highscoresMap = Object.values(groupItemBy(scores, "urlSlug"));
  let gamesMap = Object.values(groupItemBy(games, "urlSlug"));
  console.log(highscoresMap)
  console.log(gamesMap)
 


let hej = highscoresMap[0]
  console.log(hej) */
/* const sortedarray = hej.sort((a, b) => b.highscore - a.highscore)


console.log(sortedarray)  */  
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