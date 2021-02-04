
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";
import HighScore from '../HighScore/HighScore';

const Home = ({score}) => {
    return (
        <div>
            <Navbar/>
            <Link to={"/new"}><p className="text-center">Register highscore</p></Link>
            <div className="container border border-primary ">
            <HighScore score={score} />
            </div>
        </div>
    )
}

export default Home;