import { useState } from "react";
import data from "./Data.js";
import React from "react";
import Tours from "./Tours";
import Navbar from "../Components/Navbar";
import "./index.css";

function Explore({ uniqueid, setuniqueid }) {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);

    setTours(newTours);
  }
  if (tours.length === 0) {
    return (
      <>
        <Navbar />
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="App">
        <Tours
          uniqueid={uniqueid}
          setuniqueid={setuniqueid}
          tours={tours}
          removeTour={removeTour}
        ></Tours>
      </div>
    </>
  );
}

export default Explore;
