import React, { useState } from "react";
import first from "../picture/first-portfolio.png";
import quiz from "../picture/quiz.png";
import booking from "../picture/booking.png";
import { Button, scrollToRef } from "./Common";

export default function Projects(props) {
  const [number, setNumber] = useState(null)

  const projected = [
    {
      id: 0,
      class1: "project__subwrapper-first",
      class2: "project__first",
      img: quiz,
      desc1: "Quiz with categories",
      desc2: "| Quiz app",
      href: "https://quiz-czenczek.netlify.app"
    },
    {
      id: 1,
      class1: "project__second-wrapper",
      class2: "project__second",
      img: first,
      desc1: "First portfolio",
      desc2: "| Website",
      href: "https://portfolio-czenczek.netlify.app"
    },
    {
      id: 2,
      class1: "project__second-wrapper",
      class2: "project__third",
      img: booking,
      desc1: "Clone of booking",
      desc2: "| Static website",
      href: "https://czenczek.netlify.app"
    },
  ]

  const onHover = (index) => {
    setNumber(index)
  };

  const onLeave = () => {
    setNumber(null);
  };
  return (
    <div className="project">
      <h1>My projects</h1>
      <div onClick={() => scrollToRef(props.refMain)}>
        <Button desc="See all projects" />
      </div>
      <div className="project__wrapper">
        {projected.map((el)=>(
        <div className={el.class1} key={el.id}>
          <div
            className={el.class2}
            onMouseEnter={() => onHover(el.id)}
            onMouseLeave={() => onLeave()}
          >
            <img src={el.img} alt="img" />
              <div 
              className={`project__description${el.id === number ? " visible" : ""}`}>
                <p>{el.desc1}</p>
                <p>{el.desc2}</p>
              </div>
          </div>
          <Button desc="See more" href={el.href} />
        </div>))}
      </div>
    </div>
  );
}
