import React from 'react'
import atom from "../picture/atom.png";
import code from "../picture/code.png";
import mobile from "../picture/mobile-app.png";
import play from "../picture/play.png";
import website from "../picture/website-design.png";
import Head from './Head';

export default function Categories() {

    const content = [
        { id: 1, img: atom, number: "01", title: "Ux/Ui", desc: "Through research to prepare the best solutions" },
        { id: 2, img: website, number: "02", title: "Web design", desc: "Full responsive and equipped with modern technology"},
        { id: 3, img: mobile, number: "03", title: "Applications", desc: "Indyvidually planned solutions to provide best answers to your problems and needs"},
        { id: 4, img: code, number: "04", title: "Software", desc: "I examine structures of your company to find the best way to improve its operations"},
    ]
    return (
        <div>
        <Head el1="As a professional, i can provide a wide range of services" el2="to make sure you have" el3="everything under control"/>
        <div className="main__service">
            {content.map((el)=>(
                <div className="main__descriptions" key={el.id}>
                <img src={el.img} alt="technology"/>
                <div>
                  <p>{el.number}</p>
                  <h2>{el.title}</h2>
                  <p>{el.desc}</p>
                </div>
                <img src={play} alt="arrow"/>
              </div>
            ))}
        </div>
        </div>
    )
}
