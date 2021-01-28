

  const EventTable = ({events}) => (
    <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Date</th>
        <th>Duration (min)</th>
        <th>Presenter</th>
      </tr>
    </thead>
     <tbody>
      {events.map(event => {
        <tr>
          <td>{event.id}</td>
          <td>{event.title}</td>
          <td>{event.date}</td>
          <td>{event.duration}</td>
          <td>{event.presenter}</td>
        </tr>
      })}
    </tbody> 
  </table>
  );

  export default EventTable;