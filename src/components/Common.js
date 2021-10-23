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

export function CategorieProject(props){
  return(
    <div className="websites__wrapper">
    <div className="websites__subwrapper">
      <div className="slideshowDots">
        {props.array.map((el) => (
          <div
            key={el.id}
            className={`slideshowDot${props.index === el.id ? " active" : ""}`}
            onClick={() => {
              props.setIndex(el.id);
            }}
          ></div>
        ))}
      </div>
      <div className="websites__mobile">
        <img src={props.imac} alt="iphone" className="websites__iphone" />
        <div>
          {props.array.map((el) => {
            const swipeleft = {
              left: `${el.id === 0 ? props.number : `${el.id}00%`}`,
              transform: `translate3d(${-props.index * 100}%, 0, 0)`
            };
            return (
              <div className={props.projects} style={swipeleft}>
                <img src={el.img} alt="project img" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="websites__content">
        {props.array.map((el) => (
          <div key={el.id} style={{ transform: `translate3d(${-props.index * 100}%, 0, 0)` }}>
            <h3>{el.header}</h3>
            <p>{el.desc}</p>
            <Button desc="Visit this site" />
          </div>
        ))}
      </div>
      <LeftButton nextSlide={props.nextSlide}/>
    </div>
  </div>
  )
}