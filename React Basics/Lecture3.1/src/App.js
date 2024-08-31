import React, { useState } from "react";
import data from "./data";
import Tours from "./Components/Tours";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id); // filtering out items from original 'tours' based on specific id // this is typically used in scenarios where you want to remove an item from list
    setTours(newTours);

  }

  // if no tour is left
  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;
