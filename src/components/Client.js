import React, {useState} from "react";
import play from "../picture/play.png";
import angled from "../picture/angled-cuts.png";

export default function Client() {
const [index, setIndex] = useState(0);

  const backendData = [
    {
      id: 1,
      description:
        "Creating such a unique and effective solution for our company, which allowed to reduce production costs thanks to new software and in such a short time is a real challenge and succes",
    },
    { id: 2, description: "The most beautiful website i have ever seen" },
    {
      id: 3,
      description:
        "Very professional approach to the subject. Fast and precise work execution",
    },
  ];

  return (
    <div className="client">
      <h3>Clients'</h3>
      <h2>experience</h2>
      <div className="client__slideshow">
      <div className="client__slideshowSlider">
        {backendData.map((el) => (
          <div key={el.id} className="client__opinion">
            <img src={angled} alt="qoutation marks" />
            <div className="client__text">
            <p>{el.description}</p>
            </div>
            <span>
              <img src={angled} alt="qoutation marks" />
            </span>
          </div>
        ))}
      </div>
      </div>
      <div>
        <p>Contact me</p>
        <img src={play} alt="arrow" />
      </div>
    </div>
  );
}
