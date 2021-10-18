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
import git from "../picture/git.png";
import api from "../picture/api.png";

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
          <div><img src={html} alt="html"/></div>
          <p>HTML</p>
        </div>
        <div className="technology__container">
          <div><img src={css} alt="css"/></div>
          <p>CSS</p>
        </div>
        <div className="technology__container">
          <div><img src={sass} alt="sass"/></div>
          <p>SASS</p>
        </div>
        <div className="technology__container">
          <div><img src={javascript} alt="javascript"/></div>
          <p>JAVASCRIPT</p>
        </div>
        <div className="technology__container">
          <div><img src={react} alt="react"/></div>
          <p>REACT</p>
        </div>
        <div className="technology__container">
          <div><img src={gatsby} alt="gatsby"/></div>
          <p>GATSBY</p>
        </div>
        <div className="technology__container">
          <div><img src={typescript} alt="typescript"/></div>
          <p>TYPESCRIPT</p>
        </div>
        <div className="technology__container">
          <div><img src={sql} alt="sql"/></div>
          <p>SQL</p>
        </div>
        <div className="technology__container">
          <div><img src={postman} alt="postman"/></div>
          <p>POSTMAN</p>
        </div>
        <div className="technology__container">
          <div><img src={git} alt="git"/></div>
          <p>GIT</p>
        </div>
        <div className="technology__container">
          <div><img src={api} alt="git"/></div>
          <p>REST</p>
        </div>
      </div>
    </div>
  );
}
