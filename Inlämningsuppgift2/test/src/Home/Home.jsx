import HighScore from '../HighScore/HighScore';

import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";
import Scoreblock from '../Scoreblock/Scoreblock';

const Home = ({score}) => {
    return (
        <div>
            <Navbar/>
            <Link to={"/new"}><p className="text-center">Register highscore</p></Link>
            <Scoreblock score={score} />
        </div>
    )
}

export default Home;