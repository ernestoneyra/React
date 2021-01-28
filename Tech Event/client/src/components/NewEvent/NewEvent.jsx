const NewEvent = () => {
    return (
        /* <form>
    <label>
      Title:
      <input type="text" />
    </label>
    <label>
      Description:
      <textarea></textarea>
    </label>
    <label>
      Date:
      <input type="datetime-local" />
    </label>
    <label>
      Duration (min):
      <input type="text" />
    </label>
    <label>
      Presenter:
      <input type="text" />
    </label>
    <label>
      Cover image:
      <input type="text" />
    </label>
    <button type="submit">Add</button>
  </form>  */
  <div class="container col-lg-3 col-md-8">
  <form class="row g-3">
  <div >
    <label for="inputEmail4" class="form-label">Title:</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Description:</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Date:</label>
    <input type="datetime-local" class="form-control" id="inputAddress" />
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Duration (min):</label>
    <input type="text" class="form-control" id="inputAddress2" />
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Presenter:</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Cover image:</label>
    
  </div>
  
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form> 
</div>
    )
  
};



export default NewEvent;