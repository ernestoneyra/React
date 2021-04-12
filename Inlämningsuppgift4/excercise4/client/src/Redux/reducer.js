/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  scores: [],
  games: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "scores/show": {
      const scores = action.payload.scores;

      const games = action.payload.games;

      const newState = { ...state, scores, games };

      /*  newState.scores = score;
      newState.games = game;  */ 

      console.log(newState);

      console.log("games invoked");
      return newState;
    }
    
    case "score/add": {
      const score = action.payload.scores;

      const newState = { ...state, 
    scores: [...state.scores, score] };

     

      console.log("scores added");

      return newState;
    }

    default:
      return state;
  }
}

export async function fetchScores(dispatch, getState) {
  const response = await fetch("http://localhost:5000/scores");
  const scores = await response.json();
  //console.log(scores)
  const spel = await fetch("http://localhost:5000/games");
  const games = await spel.json();
  //console.log(games)
  //const scores = await scores.json()
  dispatch({ type: "scores/show", payload: { scores, games } });
}



 export function addScores(score) {
  return async function addScoresThunk(dispatch, getState) {
    // 1: skicka POST-request till backend för att skapa upp produkt
    const response = await fetch("http://localhost:5000/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(score),
    });

    const addedScore = await response.json();

    // 2: dispatcha action till store för att även lägga till produkten där
    dispatch({ type: "score/add", payload: {  addedScore } });
  };
} 
