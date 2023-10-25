import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Addtour.css";
// import data from "./Data";

export default function AddTour({ uniqueid, data }) {
  const [readmore, setReadmore] = useState(false);
  console.log(data);
  console.log(uniqueid);
  const fdataa = data.filter((itemm) => {
    return uniqueid === itemm.id;
  });
  // const description = readmore ? data.info : `${data.info.substring(0, 200)}...`;
  console.log(fdataa[0]);
  return (
    <div className="oneee">
      <img src={fdataa[0].image} className="imagee"></img>
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">{fdataa[0].price}</h4>
          <h4 className="tour-name">{fdataa[0].name}</h4>
        </div>
        <div className="description1">{fdataa[0].info}</div>
      </div>
    </div>
  );
}
