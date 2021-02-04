//import Navbar from '../Navbar/Navbar'
import Scoreblock from "../Scoreblock/Scoreblock";

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

const HighScore = ({ score }) => {
  return (
    <div className="">
      <Scoreblock key={score.id} score={score} />
    </div>
  );
};

export default HighScore;
