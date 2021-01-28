

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import EventDetails from "./components/EventDetails";
import Home from "./components/Home";
import NewEvent from "./components/NewEvent";


  //skickar in events till Home
const App = () => {

  

  const events = [
   /*  {
      id: 1,
      title: "React 101",
      date: "2021-01-28 17:20",
      duration: "45 min",
      presenter: "John Doe",
      title: "React 101",
      
      description: "Kom och lär dig grundera i React!",
      coverImage: "https://via.placeholder.com/320x280.png?text=React+101",
    },
    {
      id: 2,
      title: "Webpack",
      date: "2021-01-28 17:20",
      duration: "20 min",
      presenter: "Jane Doe",
      title: "Webpack",
    
      description: "Lär sig använda webpack!",
      coverImage: "https://via.placeholder.com/320x280.png?text=Webpack",
    },   
    {
      id: 3,
      title: "Express",
      date: "2021-01-28 17:20",
      duration: "30 min",
      presenter: "Jim Doe",
      title: "Express",
     
      description: "Lär sig använda Express!",
      coverImage: "https://via.placeholder.com/320x280.png?text=Webpack",
    },
    {
      id: 4,
      title: "TypeScript",
      date: "2021-01-28 17:20",
      duration: "120 min",
      presenter: "Jannice Doe",
      title: "TypeScript",
      
      description: "Lär sig använda TypeScript!",
      coverImage: "https://via.placeholder.com/320x280.png?text=Webpack",
    },
    {
      id: 5,
      title: "React Native",
      date: "2021-01-28 17:20",
      duration: "80 min",
      presenter: "Jake Doe",
      title: "React Native",
      
      description: "Lär sig använda React Native!",
      coverImage: "https://via.placeholder.com/320x280.png?text=Webpack",
    } */
  ];

  const addEvent = (event) => {
    events.push(event);

    console.log(event);
  }

  return (
    <Router>
    <Switch>
      <Route exact path="/events/:id">
        <EventDetails events={events}/>
      </Route>
      <Route path="/new">
        <NewEvent onEventAdded={addEvent} />
      </Route>
      <Route path="/">
        <Home events={events} />
      </Route>
    </Switch>    
  </Router>
  )
  

   
  };

export default App;