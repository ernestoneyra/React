import { useParams } from "react-router-dom";




const EventDetails = ({events}) => {

    const {id} = useParams();

    const event = events.find(x => x.id == id);

    return (
        <div>
            <div>
                <h1>{event.title}</h1>
            </div>
            <div>
                {event.description}
            </div>
            <div>{event.date} {event.duration} {event.presenter}
            </div>
            <div>
                <img src={event.coverImage} alt={event.title} />
            </div>
        </div>
    );
};

export default EventDetails;

