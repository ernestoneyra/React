import Scoreblock from "../Scoreblock/Scoreblock";
//import Navbar from '../Navbar/Navbar'




/* const score = [
  {
    id: 1,
    game: "Tetris",
    date: "2020-01-20",
    player: "John Doe",
    highscore: "100 000p",
  },
  {
    id: 2,
    game: "Pacman",
    date: "2020-01-02",
    player: "Jane Doe",
    highscore: "102 200p",
  },
  {
    id: 3,
    game: "Asteroids",
    date: "2020-01-25",
    player: "Jessica Doe",
    highscore: "103 033p",
  },
]; */

const HighScore = ({score}) => {
  return (
    <div>
  {/*    <Navbar/>  */}
    <div className="container">
    {/* <div>
      <p className="text-end">Register highscore</p>
    </div> */}
    
      <div>
        {/* {score.map((score) => (
          <Scoreblock key={score.id} score={score} />
        ))} */}
      </div>
    
      </div>
    </div>
  );
};

export default HighScore;

