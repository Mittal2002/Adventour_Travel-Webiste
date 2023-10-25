import "./styles.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import Login1 from "./routes/Login1";
import "./routes/Login.css";
import Explore from "./routes/Explore";
import AddBox from "./routes/AddBox";
import LiveWeather from "./routes/LiveWeather";
import AddTour from "./routes/AddTour";
import Map from "./routes/Map";
import data from "./routes/Data";
import { useState } from "react";
export default function App() {
  const [uniqueid, setuniqueid] = useState(null);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login1" element={<Login1 />} />
        <Route path="/Home" element={<Home></Home>} />
        <Route path="/About" element={<About></About>} />
        <Route path="/Service" element={<Service></Service>} />
        <Route path="/Contact" element={<Contact></Contact>} />
        <Route path="/Map" element={<Map></Map>} />
        <Route
          path="/Explore"
          element={<Explore uniqueid={uniqueid} setuniqueid={setuniqueid} />}
        />
        <Route path="/LiveWeather" element={<LiveWeather />} />
        <Route
          path="AddTour"
          element={<AddTour data={data} uniqueid={uniqueid} />}
        />
        <Route path="Addbox" element={<AddBox />} />
      </Routes>
    </div>
  );
}
