import { useEffect, useState } from "react";
import data from "./Data";
import { Link } from "react-router-dom";
// import Card from "./Card";
import "./Addtour.css";

export default function AddTour({ uniqueid, data }) {
  const [readmore, setReadmore] = useState(false);
  console.log("happy");
  const fdata = data.filter((item) => {
    return uniqueid === item.id;
  });
  // const description = readmore ? data.info : `${data.info.substring(0, 200)}...`;
  console.log("Happpy");
  console.log(fdata);
  return (
    <div className="oneee">
      <img src={fdata[0].image} className="imagee"></img>
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">{fdata[0].price}</h4>
          <h4 className="tour-name">{fdata[0].name}</h4>
        </div>
        <div className="description1">{fdata[0].info}</div>
      </div>
    </div>
  );
}
