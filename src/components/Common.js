import React from "react";
import play from "../picture/play.png";

export function Head({ el1, el2, el3 }) {
  return (
    <div className="header__header">
      <h2>
        {el1}
        {el2 && <br />}
        {el2}
        <br />
        <span>{el3}</span>
      </h2>
    </div>
  );
}

export function Button({ action, href, desc }) {
  return (
    <button onClick={action}>
      <a href={href} target="__blank">
        <p>{desc}</p>
      </a>
      <img src={play} alt="arrow" />
    </button>
  );
}

export function scrollToRef(ref) {
  window.scrollTo(0, ref.current.offsetTop);
}

export function LeftButton({ nextSlide }) {
  return (
    <div className="leftbuton__wrapper">
      <div className="leftbuton__subwrapper">
        <img src={play} alt="arrow" onClick={nextSlide} />
        <img src={play} alt="arrow" onClick={nextSlide} />
      </div>
    </div>
  );
}

export function CategorieProject({
  array,
  index,
  setIndex,
  imac,
  number,
  projects,
  nextSlide,
}) {
  return (
    <div className="websites__wrapper">
      <div className="websites__subwrapper">
        <div className="slideshowDots">
          {array.map((el) => (
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
            {array.map((el) => {
              const swipeleft = {
                left: `${el.id === 0 ? number : `${el.id}00%`}`,
                transform: `translate3d(${-index * 100}%, 0, 0)`,
              };
              return (
                <div className={projects} style={swipeleft} key={el.id}>
                  <img src={el.img} alt="project img" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="websites__content">
          {array.map((el) => (
            <div
              key={el.id}
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              <h3>{el.header}</h3>
              <p>{el.desc}</p>
                <Button desc="Visit this site" href={el.link}/>
            </div>
          ))}
        </div>
        <LeftButton nextSlide={nextSlide} />
      </div>
    </div>
  );
}

export function UxSoftware({ array, img }) {
  return (
    <div className="ux__wrapper">
      <div className="ux__subwrapper">
        <div className="slideshowDots">
          <div
            className="slideshowDot"
            style={{ "background": "purple" }}
          ></div>
        </div>
        <div className="ux__mobile">
          <img src={img} alt="ux img" />
        </div>
        <div className="ux__content">
          <div>
            <h3>{array[0].header}</h3>
            <p>{array[0].desc}</p>
          </div>
        </div>
        <LeftButton />
      </div>
    </div>
  );
}

export function CategorieButton({
  array,
  styles,
  img,
  class1,
  class2,
  class3,
  funktion,
  funktion2,
  show,
  text
}) {
  return (
    <div
      className={class1}
      style={styles}
    >{show && <div className="popup"><div className="popup__wrapper"><p onClick={funktion2}>x</p><p>{text}</p></div></div>}
      {array.map((el) => (
        <div key={el.id} className={class2} onClick={()=>funktion(el.id)}>
          <img src={el.img} alt="qoutation marks" />
          <div className={class3}>
             {el.number &&
             <>
              <p>{el.number}</p>
              <h2>{el.title}</h2>
              </>}
            <p>{el.desc}</p>
          </div>
          <span>
            <img src={img} alt="qoutation marks" />
          </span>
        </div>
      ))}
    </div>
  );
}
