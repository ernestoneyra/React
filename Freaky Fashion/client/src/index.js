import React from "react";
import ReactDom from "react-dom";
import EventCard from "client/src/components/EventCard";

const events = [
  {
    title: "React 101",
    description: "Kom och lär dig grundera i React!",
    coverImage: "https://via.placeholder.com/320x280.png?text=React+101",
  },
/*   {
    title: "Webpack",
    description: "Lär sig använda webpack!",
    coverImage: "https://via.placeholder.com/320x280.png?text=Webpack",
  },   */
];

const eventCards = events.map(event => {
    return <EventCard event={event} />;
});

ReactDom.render(
    eventCards, 
    document.getElementById("root"));
