import { Link } from "react-router-dom";

const GlobalHighscores = ({ scores }) => {
  //const globalHighscores = getGlobalHighscores(scores);

  //////////////////////////////////////////////////////////////

 /*    // Accepts the array and key
  const groupBy = (game, id) => {
  // Return the end result
  return game.reduce((result, currentValue) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[currentValue[id]] = result[currentValue[id]] || []).push(
      currentValue
    );
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, {}); // empty object is the initial value for result object
};

// Group by Id as key to the person array


const gamesGroupedById = groupBy(scores, 'id');
  console.table(gamesGroupedById); */
  ////////////////////////////////////////////////////////////

  //console.log(scores)

  //console.log('sort score:', scores)

/* scores.map(score => {
  
  return console.log(score.id, score.highscore)
  
}) */

/* let score = []

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc  }, {})
}

score.push(groupBy(scores, 'id'))
console.log(score) */

function groupItemBy(array, property) {
  let hash = {},
      props = property.split('.');
  for (let i = 0; i < array.length; i++) {
      let key = props.reduce(function(acc, prop) {
          return acc && acc[prop];
      }, array[i]);
      if (!hash[key]) hash[key] = [];
      hash[key].push(array[i]);
  }
  return hash;
}

let highscoresMap = Object.values(groupItemBy(scores, 'game.id'));

console.log(highscoresMap[0])
/* groupedScores.map((score) => {
  return   console.log(score);
})  */
 
/*  for (const game in highscoresMap){
  game.sort((a, b) => a- b)
  console.log(game)
}  */




/* const hej = score[0]
console.log(hej) */
const topHighScores = []
highscoresMap.map(id => {
  return topHighScores.push(id[0])
})
/* for (const id in highscoresMap[0]){
  //console.log(id)
  topHighScores.push(id)
}   */
console.log(topHighScores[2])



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
  
    <div className="d-flex row">
    
    {highscoresMap.map((score) => (
    
      <div  className="border border-dark mb-2">
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
