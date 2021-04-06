import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
//import HighScore from '../HighScore/HighScore';
import GlobalHighscores from "../GlobalHighscores/GlobalHighscores";

const Home = ({ homeScore }) => {
  //console.log(homeScore)
  return (
    <div>
      <Navbar />
      <Link to={"/new"}>
        <p className="text-center">Register High Score</p>
      </Link>
      <div className="container ">
        <GlobalHighscores scores={homeScore} />
      </div>
    </div>
  );
};

export default Home;
