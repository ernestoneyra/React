import EventCardGrid from "./components/EventCardGrid/EventCardGrid";



const events = [
    {
      title: "React 101",
      description: "Kom och lär dig grundera i React!",
      coverImage: "https://via.placeholder.com/320x280.png?text=React+101",
    },
     {
      title: "Webpack",
      description: "Lär sig använda webpack!",
      coverImage: "https://via.placeholder.com/320x280.png?text=Webpack",
    },   
    {
        title: "Express",
        description: "Lär sig använda Express!",
        coverImage: "https://via.placeholder.com/320x280.png?text=Webpack",
      },
      {
        title: "TypeScript",
        description: "Lär sig använda TypeScript!",
        coverImage: "https://via.placeholder.com/320x280.png?text=Webpack",
      },
      {
        title: "React Native",
        description: "Lär sig använda React Native!",
        coverImage: "https://via.placeholder.com/320x280.png?text=Webpack",
      }
  ];

const App = () => (
    <div>
        <EventCardGrid events={events} />
    </div>
);


export default App;