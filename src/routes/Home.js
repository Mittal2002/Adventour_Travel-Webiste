import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import backImg from "../Assests/12.jpg";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
import Mappp from "./Mappp";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={backImg}
        title="Your Journey Your Story"
        textname="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/Home"
        btnClass="show"
      />
      <Destination />

      <Trip />
      <Footer />
    </>
  );
}
export default Home;
