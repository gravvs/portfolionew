import React, { useState } from "react";
import imac from "../picture/imac2.png";
import { Button } from "./Common";

const websites = [
  {
    id: 1,
    header: "Portfolio",
    desc: "It was my first portfolio",
    url: "https://portfolio-czenczek.netlify.app",
  },
  {
    id: 2,
    header: "Booking Clone",
    desc: "Check yoursefl if you can see the diference",
    url: "https://czenczek.netlify.app",
  },
];

export default function Websites() {
  const [index, setIndex] = useState(0);

  return (
    <div className="websites__wrapper">
      <div>kropki</div>
      <div>
        <img src={imac} alt="iphone" />
      </div>
      {websites.map((el) => (
        <div key={el.id}>
          <h3>{el.header}</h3>
          <p>{el.desc}</p>
          <Button desc="Visit this site" />
        </div>
      ))}
      <div>button right</div>
    </div>
  );
}
