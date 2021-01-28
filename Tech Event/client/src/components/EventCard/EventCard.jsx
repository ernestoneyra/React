import {Link} from "react-router-dom"
 
const styles = {
  width: "18rem",
};

const EventCard = ({event}) => (
 
  
  <div className="card" style={styles}>
    <img
      className="card-img-top"
      src={event.coverImage}
      alt="Card image cap"
    />
    <div className="card-body">
      <h5 className="card-title">{event.title}</h5>
      <p className="card-text">{event.description}</p>
      <Link to={`/events/${event.id}`} className="btn btn-primary">
        Mer information!
      </Link>
    </div>
  </div>
  
);

export default EventCard;
