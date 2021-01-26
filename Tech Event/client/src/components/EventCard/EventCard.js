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
      <a href="#" className="btn btn-primary">
        Klicka här!
      </a>
    </div>
  </div>
);

export default EventCard;
