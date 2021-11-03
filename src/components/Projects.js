import React, { useState } from "react";
import first from "../picture/first-portfolio.png";
import quiz from "../picture/quiz.png";
import booking from "../picture/booking.png";
import { Button, scrollToRef } from "./Common";

export default function Projects(props) {
  const [hover0, setHover0] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  const onHover = (el) => {
    el(true);
  };

  const onLeave = (el) => {
    el(false);
  };

  return (
    <div className="project">
      <h1>My projects</h1>
      <div onClick={() => scrollToRef(props.refMain)}>
        <Button desc="See all projects" />
      </div>
      <div className="project__wrapper">
        <div className="project__subwrapper-first">
          <div
            className="project__first"
            onMouseEnter={()=>onHover(setHover0)}
            onMouseLeave={()=>onLeave(setHover0)}
          >
            <img src={quiz} alt="quiz" />
            {hover0 && (
              <div>
                <p>Quiz with categories</p>
                <p>| Quiz app</p>
              </div>
            )}
          </div>
          <Button desc="See more" href="https://quiz-czenczek.netlify.app" />
        </div>
        <div className="project__subwrapper-second">
          <div className="project__second-wrapper">
            <div
              className="project__second"
              onMouseEnter={()=>onHover(setHover1)}
              onMouseLeave={()=>onLeave(setHover1)}
            >
              <img src={first} alt="portfolio" />
              {hover1 && (
                <div>
                  <p>First portfolio</p>
                  <p>| Website</p>
                </div>
              )}
            </div>
            <Button
              desc="See more"
              href="https://portfolio-czenczek.netlify.app"
            />
          </div>
          <div className="project__second-wrapper">
            <div
              className="project__third"
              onMouseEnter={()=>onHover(setHover2)}
              onMouseLeave={()=>onLeave(setHover2)}
            >
              <img src={booking} alt="booking" />
              {hover2 && (
                <div>
                  <p>Clone of booking</p>
                  <p>| Static website</p>
                </div>
              )}
            </div>
            <Button desc="See more" href="https://czenczek.netlify.app" />
          </div>
        </div>
      </div>
    </div>
  );
}
