
import Navbar from '../Navbar/Navbar';
import { Link, useParams } from "react-router-dom";
import HighScore from '../HighScore/HighScore';

const Home = ({score, games}) => {
    

  
  console.log(games)
    return (
        <div>
            <Navbar/>
            <Link to={"/new"}><p className="text-center">Register highscore</p></Link>
            <div className="container ">
            
            <HighScore score={score} />
            </div>
            
    
          
     
     
    </div>
 
    )
}

export default Home;