import HighScore from '../HighScore/HighScore';
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";

const Home = ({score}) => {
    return (
        <div>
            <Navbar/>
            <Link to={"/new"}><p className="text-end">Register highscore</p></Link>
            <HighScore score={score} />
        </div>
    )
}

export default Home;