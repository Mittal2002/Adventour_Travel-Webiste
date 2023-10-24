import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import backImg from "../Assests/12.jpg";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
import AddBox from "./AddBox";
function Home() {
  return (
    <>
      <Navbar />
      <AddBox url="/add" />
    </>
  );
}
export default Home;
