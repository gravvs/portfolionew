import React, { useState } from "react";
import iphone from "../picture/iphone2.png";
import quizapp from "../picture/quiz-app.png";
import { CategorieProject } from "./Common";

export default function Applications() {
  const [index, setIndex] = useState(0);

  const applications = [
    {
      id: 0,
      header: "Quiz App",
      desc: "Choose categorie and test yourself in many questions",
      url: "https://quiz-czenczek.netlify.app",
      img: quizapp,
    },
  ];

const projects = "applications__projects";

  function nextSlide() {
//     setIndex((prevIndex) =>
//     prevIndex === applications.length - 1 ? 0 : prevIndex + 1
//   )
  }
  return (
    <CategorieProject nextSlide={nextSlide} array={applications} index={index} setIndex={setIndex} imac={iphone} projects={projects} number="6%"/>
  );
}
