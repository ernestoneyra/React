import EventCardGrid from '../EventCardGrid';
import { Link } from "react-router-dom";
//import EventTable from "../EventTable";


//Funktionsbaserad komponent
/* const Home = ({events}) => ( //specificera ta emot events
    <EventCardGrid events={events} />
); */

const Home = ({events}) => (
    //<EventTable events={events} />
    <div>
    <Link to={"/new"}>Registrera Event!</Link>
    <EventCardGrid events={events} />
    </div>
    
)


export default Home;