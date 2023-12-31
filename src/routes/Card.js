import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import './card.css'

export default function Card({
  id,
  image,
  info,
  price,
  name,
  uniqueid,
  setuniqueid,
  removeTour,
}) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}...`;
  const [selectedCard, SetSelectedCard] = useState(null);
  function readmoreHandler() {
    setReadmore(!readmore);
  }
  function ClickHandler() {
    SetSelectedCard();
  }
  let navigate = useNavigate();

  function clicked() {
    setuniqueid(id);
    let path = `../AddTour`;
    navigate(path);
  }
  return (
    <div className="cardss">
      <img src={image} className="image"></img>
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? `Show Less` : `Read more`}
          </span>
        </div>
      </div>
      <div className="Card_heading">
        <button className="btn-red" onClick={() => removeTour(id)}>
          <p className="one1">Not Intersted</p>
        </button>
        <button className="btn-red" onClick={clicked}>
          <p className="one">Add Tour</p>
        </button>
      </div>
    </div>
  );
}
