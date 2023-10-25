import Mountain1 from "../Assests/1.jpg";
import Mountain2 from "../Assests/2.jpg";
import DestinationData from "./DestinationData";
import Mountain3 from "../Assests/5.jpg";
import Mountain4 from "../Assests/8.jpg";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h2 className="dd_head">Popular Destination</h2>
      <p className="dd_para">
        Tours give you the opportuntiy to see aa lot,within a time frame
      </p>
      <DestinationData
        className="first-des"
        heading="Tall Volcano, Batangas"
        text="One of the most iconic views in luzon, Mt. Tall boasts in volcano
          inside a lake inside an island. If you fancy an island. If you fancy
          aa closer look, the hide up to the crater is a mere 45 minutes, and
          is enough for beginners.Guides will assist you most of the way, and
          you'll see the peculiar environment found on an active volcano,
          including volcanic rocks and steam vents. The hike can be dusty and
          hot, so plan for an early morning trip. and the unwind with some
          bulalo before heading back home!"
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="          One of the most iconic views in luzon, Mt. Tall boasts in volcano
          inside a lake inside an island. If you fancy an island. If you fancy
          aa closer look, the hide up to the crater is a mere 45 minutes, and
          is enough for beginners.Guides will assist you most of the way, and
          you'll see the peculiar environment found on an active volcano,
          including volcanic rocks and steam vents. The hike can be dusty and
          hot, so plan for an early morning trip. and the unwind with some
          bulalo before heading back home!"
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};
export default Destination;
