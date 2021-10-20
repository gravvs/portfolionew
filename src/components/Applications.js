import React, { useState } from "react";
import iphone from "../picture/iphone2.png";
import { Button } from "./Common";

export default function Applications() {
  const [index, setIndex] = useState(0);

  const applications = [
    {
      id: 1,
      header: "Quiz App",
      desc: "Choose categorie and test yourself in many questions",
      url: "https://quiz-czenczek.netlify.app",
    },
  ];

  return (
    <div className="applications__wrapper">
      <div>kropki</div>
      <div>
        <img src={iphone} alt="iphone" />
      </div>
        {applications.map((el)=>(
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
