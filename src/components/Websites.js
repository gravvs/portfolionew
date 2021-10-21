import React, { useState } from "react";
import imac from "../picture/imac2.png";
import portfolio from "../picture/first-portfolio.png";
import booking from "../picture/booking.png";
import { Button, LeftButton } from "./Common";

const websites = [
  {
    id: 0,
    header: "Portfolio",
    desc: "It was my first portfolio",
    url: "https://portfolio-czenczek.netlify.app",
    img: portfolio,
  },
  {
    id: 1,
    header: "Booking Clone",
    desc: "Check yoursefl if you can see the diference",
    url: "https://czenczek.netlify.app",
    img: booking,
  },
];

export default function Websites() {
  const [index, setIndex] = useState(0);

  function nextSlide() {
    setIndex((prevIndex) =>
    prevIndex === websites.length - 1 ? 0 : prevIndex + 1
  )
  }

  return (
    <div className="websites__wrapper">
      <div className="websites__subwrapper">
        <div className="slideshowDots">
          {websites.map((el) => (
            <div
              key={el.id}
              className={`slideshowDot${index === el.id ? " active" : ""}`}
              onClick={() => {
                setIndex(el.id);
              }}
            ></div>
          ))}
        </div>
        <div className="websites__mobile">
          <img src={imac} alt="iphone" className="websites__iphone" />
          <div>
            {websites.map((el) => {
              const swipeleft = {
                left: `${el.id === 0 ? "1%" : `${el.id}00%`}`,
                transform: `translate3d(${-index * 100}%, 0, 0)`
              };
              return (
                <div className="websites__projects" style={swipeleft}>
                  <img src={el.img} alt="project img" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="websites__content">
          {websites.map((el) => (
            <div key={el.id} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
              <h3>{el.header}</h3>
              <p>{el.desc}</p>
              <Button desc="Visit this site" />
            </div>
          ))}
        </div>
        <LeftButton nextSlide={nextSlide}/>
      </div>
    </div>
  );
}
