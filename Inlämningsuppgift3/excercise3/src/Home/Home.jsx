
import Navbar from '../Navbar/Navbar';
import { Link} from "react-router-dom";
import HighScore from '../HighScore/HighScore';

const Home = ({score, games}) => {
    

  

    return (
        <div>
            <Navbar/>
            <Link to={"/new"}><p className="text-center">Register highscore</p></Link>
            <div className="container ">
            
            <HighScore score={score}  games={games}/>
            </div>
            
    
          
     
     
    </div>
 
    )
}

export default Home;