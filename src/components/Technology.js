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
import {Head} from "./Common";

export default function Technology() {
  const technology = [
    { id: 1, img: html, desc: "HTML" },
    { id: 2, img: css, desc: "CSS" },
    { id: 3, img: sass, desc: "SASS" },
    { id: 4, img: javascript, desc: "JAVASCRIPT" },
    { id: 5, img: react, desc: "REACT" },
    { id: 6, img: gatsby, desc: "GATSBY" },
    { id: 7, img: typescript, desc: "TYPESCRIPT" },
    { id: 8, img: sql, desc: "SQL" },
    { id: 9, img: postman, desc: "POSTMAN" },
    { id: 10, img: git, desc: "GIT" },
    { id: 11, img: api, desc: "REST" },
  ];

  return (
    <div className="technology">
      <Head el1="Technology" el3="by all means"/>
      <div className="technology__paragraph">
        <p>
          I have essential experience to use the most powerfull developers'
          <br />
          tools on the market. I want to make sure that the solution I prepare
          <br />
          for the clients is the one that will make a difference and will enrich
          <br />
          your facilities.
        </p>
        <p>I can prognose the results and test efficacy of the methods used</p>
      </div>
      <div className="technology__tools">
        {technology.map((el) => (
          <div className="technology__container" key={el.id}>
            <div>
              <img src={el.img} alt={el.desc} />
            </div>
            <p>{el.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
