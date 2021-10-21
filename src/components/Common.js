import React from "react";
import play from "../picture/play.png";

export function Head(props) {
  return (
    <div className="header__header">
      <h2>
        {props.el1}
        {props.el2 && <br />}
        {props.el2}
        <br />
        <span>{props.el3}</span>
      </h2>
    </div>
  );
}

export function Button(props) {
  return (
    <button>
      <p>{props.desc}</p>
      <img src={play} alt="arrow" />
    </button>
  );
}
export function LeftButton(props) {
  return (
    <div className="leftbuton__wrapper">
      <div className="leftbuton__subwrapper">
        <img src={play} alt="arrow" onClick={props.nextSlide}/>
        <img src={play} alt="arrow" onClick={props.nextSlide}/>
      </div>
    </div>
  );
}
