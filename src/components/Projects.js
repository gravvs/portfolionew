import React from "react";
import play from "../picture/play.png";
import first from "../picture/first-portfolio.png";
import quiz from "../picture/quiz.png";
import booking from "../picture/booking.png";

export default function Projects() {
  return (
    <div className="project">
      <h1>My projects</h1>
      <div className="project__header">
        <p>See all projects</p>
        <img src={play} alt="arrow" />
      </div>
      <div className="project__wrapper">
        <div className="project__subwrapper-first">
          <div className="project__first">
            <img src={first} alt="portfolio" />
            <div>
              <p>First portfolio</p>
              <p>|Website</p>
            </div>
          </div>
          <div className="project__button">
            <p>See more</p>
            <img src={play} alt="arrow" />
          </div>
        </div>
        <div className="project__subwrapper-second">
          <div className="project__second-wrapper">
            <div className="project__second">
              <img src={quiz} alt="quiz" />
              <div>
                <p>Quiz with categories</p>
                <p>|Quiz app</p>
              </div>
            </div>
            <div className="project__button">
              <p>See more</p>
              <img src={play} alt="arrow" />
            </div>
          </div>
          <div className="project__second-wrapper">
            <div className="project__third">
              <img src={booking} alt="booking" />
              <div>
                <p>Clone of booking</p>
                <p>|Static website</p>
              </div>
            </div>
            <div className="project__button">
              <p>See more</p>
              <img src={play} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
