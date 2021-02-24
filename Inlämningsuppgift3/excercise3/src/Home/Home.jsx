
import Navbar from '../Navbar/Navbar';
import { Link} from "react-router-dom";
import HighScore from '../HighScore/HighScore';
import Scoreblock from '../Scoreblock/Scoreblock';

const Home = ({homeScore}) => {
    

  

    return (
        <div>
            <Navbar/>
            <Link to={"/new"}><p className="text-center">Register highscore</p></Link>
            <div className="container ">
            
            <Scoreblock homeScore={homeScore}/>
            </div>
            
    
          
     
     
    </div>
 
    )
}

export default Home;