import EventCard from "../EventCard"


const styles = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr"
};


const EventCardGrid = ({ events }) => (
    <div style={styles}>
      {events.map(event => <EventCard event={event} />)}
    </div>
  );
  
  export default EventCardGrid;
  

