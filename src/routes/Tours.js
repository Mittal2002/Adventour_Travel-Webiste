import React from "react";
// import '.index.css'
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Tours({ tours, removeTour, uniqueid, setuniqueid }) {
  return (
    <div className="container">
      <div>
        <h2 className="title">Plan With Love</h2>
        <Link to="/AddBox">
          <button className="aa">Create Your Own Tour</button>
        </Link>
      </div>

      <div className="diffi">
        {/* use map function and we send key  */}

        {tours.map((tour) => {
          return (
            <Card
              uniqueid={uniqueid}
              setuniqueid={setuniqueid}
              key={tour.id}
              {...tour}
              removeTour={removeTour}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}
