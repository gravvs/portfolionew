import React from "react";
import css from "../picture/css-3.png";
import html from "../picture/html-5.png";
import gatsby from "../picture/gatsby.png";
import javascript from "../picture/javascript.png";
import postman from "../picture/postman.jpeg";
import react from "../picture/react.png";
import sass from "../picture/sass.png";
import sql from "../picture/sql-server.png";
import typescript from "../picture/typescript.png";

export default function Technology() {
  return (
    <div className="technology">
      <h2>
        Technology
        <br />
        by all means
      </h2>
      <div className="technology__paragraph">
      <p >
        I have essential experience to use the most powerfull developers'
        <br />
        tools on the market. I want to make sure that the solution I prepare
        <br />
        for the clients is the one that will make a difference and will enrich
        <br />
        your facilities.
      </p>
      <p >I can prognose the results and test efficacy of the methods used</p>
      </div>
      <div className="technology__tools">
        <div className="technology__container">
          <div><img src={html} /></div>
          <p>HTML</p>
        </div>
        <div className="technology__container">
          <div><img src={css} /></div>
          <p>CSS</p>
        </div>
        <div className="technology__container">
          <div><img src={sass} /></div>
          <p>SASS</p>
        </div>
        <div className="technology__container">
          <div><img src={javascript} /></div>
          <p>JAVA<br/>SCRIPT</p>
        </div>
        <div className="technology__container">
          <div><img src={react} /></div>
          <p>REACT</p>
        </div>
        <div className="technology__container">
          <div><img src={gatsby} /></div>
          <p>GATSBY</p>
        </div>
        <div className="technology__container">
          <div><img src={typescript} /></div>
          <p>TYPESCRIPT</p>
        </div>
        <div className="technology__container">
          <div><img src={sql} /></div>
          <p>SQL</p>
        </div>
        <div className="technology__container">
          <div><img src={postman} /></div>
          <p>POSTMAN</p>
        </div>
      </div>
    </div>
  );
}
