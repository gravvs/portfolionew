import React from "react";
import first from "../picture/first-portfolio.png";
import quiz from "../picture/quiz.png";
import booking from "../picture/booking.png";
import { Button } from "./Common";

export default function Projects() {
  return (
    <div className="project">
      <h1>My projects</h1>
      <Button desc="See all projects"/>
      <div className="project__wrapper">
        <div className="project__subwrapper-first">
          <div className="project__first">
            <img src={quiz} alt="quiz" />
            <div>
              <p>Quiz with categories</p>
              <p>| Quiz app</p>
            </div>
          </div>
          <Button desc="See more"/>
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
            <Button desc="See more"/>
          </div>
          <div className="project__second-wrapper">
            <div className="project__third">
              <img src={booking} alt="booking" />
              <div>
                <p>Clone of booking</p>
                <p>| Static website</p>
              </div>
            </div>
            <Button desc="See more"/>
          </div>
        </div>
      </div>
    </div>
  );
}
