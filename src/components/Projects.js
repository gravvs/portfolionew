import React from "react";
import first from "../picture/first-portfolio.png";
import quiz from "../picture/quiz.png";
import booking from "../picture/booking.png";
import { Button, scrollToRef } from "./Common";

export default function Projects(props) {

  return (
    <div className="project">
      <h1>My projects</h1>
      <div onClick={()=>scrollToRef(props.refMain)}><Button desc="See all projects"/></div>
      <div className="project__wrapper">
        <div className="project__subwrapper-first">
          <div className="project__first">
            <img src={quiz} alt="quiz" />
            <div>
              <p>Quiz with categories</p>
              <p>| Quiz app</p>
            </div>
          </div>
          <Button desc="See more" href="https://quiz-czenczek.netlify.app"/>
        </div>
        <div className="project__subwrapper-second">
          <div className="project__second-wrapper">
            <div className="project__second">
              <img src={first} alt="portfolio" />
              <div>
                <p>First portfolio</p>
                <p>| Website</p>
              </div>
            </div>
            <Button desc="See more" href="https://portfolio-czenczek.netlify.app"/>
          </div>
          <div className="project__second-wrapper">
            <div className="project__third">
              <img src={booking} alt="booking" />
              <div>
                <p>Clone of booking</p>
                <p>| Static website</p>
              </div>
            </div>
            <Button desc="See more" href="https://czenczek.netlify.app" />
          </div>
        </div>
      </div>
    </div>
  );
}
