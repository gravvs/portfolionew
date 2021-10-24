import React, { useState } from "react";
import imac from "../picture/imac2.png";
import portfolio from "../picture/first-portfolio.png";
import booking from "../picture/booking.png";
import { CategorieProject } from "./Common";

const websites = [
  {
    id: 0,
    header: "Portfolio",
    desc: "It was my first portfolio",
    url: "https://portfolio-czenczek.netlify.app",
    img: portfolio,
    link: "https://portfolio-czenczek.netlify.app"
  },
  {
    id: 1,
    header: "Booking Clone",
    desc: "Check yoursefl if you can see the diference",
    url: "https://czenczek.netlify.app",
    img: booking,
    link: "https://czenczek.netlify.app"
  },
];

export default function Websites() {
  const [index, setIndex] = useState(0);

  function nextSlide() {
    setIndex((prevIndex) =>
    prevIndex === websites.length - 1 ? 0 : prevIndex + 1
  )
  }

  const projects = "websites__projects";
  return (
        <CategorieProject nextSlide={nextSlide} array={websites} index={index} setIndex={setIndex} imac={imac} projects={projects} number="1%"/>
  );
}
