import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../Assests/5.jpg";
import Trip2 from "../Assests/8.jpg";
import Trip3 from "../Assests/6.jpg";
function Trip() {
  return (
    <div className="trip">
      <h2 className="h2_trip">Recent Trips</h2>
      <p className="para_trip">
        You can discover unique destinations using Google Maps.
      </p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Indonesia, officially the Republic of Indonesia, 
       is a country in Southeast Asia and Oceania between the Indian
       and Pacific oceans.It consists of over 17,000 islands,
       including Sumatra, Java, Sulawesi, and parts of Borneo and 
       New Guinea."
        />
        <TripData
          image={Trip2}
          heading="Trip in Indonesia"
          text="Indonesia, officially the Republic of Indonesia, 
       is a country in Southeast Asia and Oceania between the Indian
       and Pacific oceans.It consists of over 17,000 islands,
       including Sumatra, Java, Sulawesi, and parts of Borneo and 
       New Guinea."
        />
        <TripData
          image={Trip3}
          heading="Trip in Indonesia"
          text="Indonesia, officially the Republic of Indonesia, 
       is a country in Southeast Asia and Oceania between the Indian
       and Pacific oceans.It consists of over 17,000 islands,
       including Sumatra, Java, Sulawesi, and parts of Borneo and 
       New Guinea."
        />
      </div>
    </div>
  );
}
export default Trip;
