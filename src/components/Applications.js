import React, { useState } from "react";
import iphone from "../picture/iphone2.png";
import quizapp from "../picture/quiz-app.png";
import { Button, LeftButton } from "./Common";

export default function Applications() {
  const [index, setIndex] = useState(0);

  const applications = [
    {
      id: 0,
      header: "Quiz App",
      desc: "Choose categorie and test yourself in many questions",
      url: "https://quiz-czenczek.netlify.app",
      img: quizapp,
    },
  ];

  return (
    <div className="applications__wrapper">
      <div className="applications__subwrapper">
        <div className="slideshowDots">
          {applications.map((el) => (
            <div
              key={el.id}
              className={`slideshowDot${index === el.id ? " active" : ""}`}
              onClick={() => {
                setIndex(el.index);
              }}
            ></div>
          ))}
        </div>
        <div className="applications__mobile">
          <img src={iphone} alt="iphone" className="applications__iphone" />
          {applications.map((el) => (
            <div className="applications__projects">
              <img src={el.img} alt="project img" />
            </div>
          ))}
        </div>
        <div className="applications__content">
        {applications.map((el) => (
          <div key={el.id} >
            <h3>{el.header}</h3>
            <p>{el.desc}</p>
            <Button desc="Visit this site" />
          </div>
        ))}
        </div>
        <LeftButton />
      </div>
    </div>
  );
}
