import React, { useEffect,  useRef, useState } from "react";
import "./Map.css";
const Map = () => {
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [Time, setTime] = useState(false);
  const Send = () => {
    setTime(true);
    setTimeout(() => {
      setTime(false);
    }, 3000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const inputRef = useRef("");
  const messRef = useRef("");

  return (
    <section className="section_1">
      {Time ? (
        <div className=" div_1 ">
          <h1 className="h1_1">Thanks for contacting us</h1>
          <p className="p_1">We will reply to you soon!!</p>
          <span className="span_1">Email: </span>
          {Email}
          <p className="p_2">
            <span className="span_2">Message: </span>
            <br />

            {Message}
          </p>
        </div>
      ) : (
        <></>
      )}
      <div class="div_2">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div class="div_3">
        <div class="div_4">
          <h2 class="h_2">Contact Us</h2>
          <p class="p_2">Send your query to through email.</p>
          <div class="div_5">
            <label for="email" class="label_1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="input_1"
              value={Email}
              ref={inputRef}
              onChange={() => {
                setEmail(inputRef.current.value);
              }}
            />
          </div>
          <div class="div_4">
            <label for="message" class="label_2">
              Message
            </label>
            <textarea
              id="message"
              value={Message}
              ref={messRef}
              onChange={() => {
                setMessage(messRef.current.value);
              }}
              name="message"
              class="class_1"
            ></textarea>
          </div>
          <button class="btn" onClick={Send}>
            Send
          </button>
          <p class="p_4">
            Thank You For Your Kind Visit
          </p>
        </div>
      </div>
    </section>
  );
};

export default Map;
