import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewEvent = ({ onEventAdded }) => {

    const history = useHistory();

      //variabel, function
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [date, setDate] = useState("");
  let [duration, setDuration] = useState("");
  let [presenter, setPresenter] = useState("");
  let [coverImage, setCoverimage] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title, //title: title,
      description,
      date,
      duration,
      presenter,
      coverImage,
    };

    

    onEventAdded(event);

    history.push("/");
  };

  return (
    <div class="container col-lg-3 col-md-8">
      <form class="row g-3" onSubmit={handleSubmit}>
        <div>
          <label for="title" class="form-label">
            Title:
          </label>
          <input
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          class="form-control" id="title" />
        </div>
        <div class="col-md-6">
          <label for="description" class="form-label">
            Description:
          </label>
          <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}class="form-control" id="description"></textarea>
        </div>
        <div class="col-12">
          <label for="date" class="form-label">
            Date and time:
          </label>
          <input 
          value={date}
          onChange={(e) => setDate(e.target.value)}type="datetime-local" class="form-control" id="date" />
        </div>
        <div class="col-12">
          <label for="duration" class="form-label">
            Duration (min):
          </label>
          <input 
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          type="text" class="form-control" id="duration" />
        </div>
        <div class="col-md-12">
          <label for="presenter" class="form-label">
            Presenter:
          </label>
          <input 
          value={presenter}
          onChange={(e) => setPresenter(e.target.value)}
          type="text" class="form-control" id="presenter" />
        </div>
        <div class="col-md-12">
          <label for="coverimage" class="form-label">
            Cover image:
          </label>
          <input 
          value={coverImage}
          onChange={(e) => setCoverimage(e.target.value)}
          type="text" calss="form-control" id="coveriamage">
          </input>
        </div>

        <div class="col-12">
          <button class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewEvent;
