import React from "react";
import atom from "../picture/atom.png";
import code from "../picture/code.png";
import mobile from "../picture/mobile-app.png";
import play from "../picture/play.png";
import website from "../picture/website-design.png";
import { CategorieButton, Head } from "./Common";

export default function Categories(props) {
  const content = [
    {
      id: 0,
      img: atom,
      number: "01",
      title: "Ux/Ui",
      desc: "Through research to prepare the best solutions",
    },
    {
      id: 1,
      img: website,
      number: "02",
      title: "Web design",
      desc: "Full responsive and equipped with modern technology",
    },
    {
      id: 2,
      img: mobile,
      number: "03",
      title: "Applications",
      desc:
        "Indyvidually planned solutions to provide best answers to your problems and needs",
    },
    {
      id: 3,
      img: code,
      number: "04",
      title: "Software",
      desc:
        "I examine structures of your company to find the best way to improve its operations",
    },
  ];

  const class1 = "main__service";
  const class2 = 'main__descriptions';

  return (
    <div ref={props.refCategories}>
      <Head
        el1="As a professional, i can provide a wide range of services"
        el2="to make sure you have"
        el3="everything under control"
      />
      <CategorieButton array={content} img={play} class1={class1} class2={class2}/>
    </div>
  );
}
