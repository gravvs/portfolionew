import React, { useState } from 'react'
import menu from '../picture/menu.png'
import contact from '../picture/contact-mail.png'
import cpu from '../picture/cpu.png'
import portfolio from '../picture/portfolio.png'
import tech from '../picture/technical-support.png'
import {scrollToRef} from "./Common";

export default function Hamburger(props) {
    const [active, setActive] = useState(false)
    const show = active ? " active" : "";
    function hamburgerClick (mainref) {
        scrollToRef(mainref)
        setActive(prevActive=>!prevActive)
    };
    return (
        <>
        {props.show && 
        <div className={`hamburger${show}`} >
            <div className="hamburger__menu" onClick={()=>setActive(prevActive=>!prevActive)}><img src={menu} alt="menu"/></div>
            <div className="hamburger__subwrapper">
                <div className="hamburger__items" onClick={()=>hamburgerClick(props.refMain)}><img src={portfolio} alt="portfolio"/></div>
                <div className="hamburger__items" onClick={()=>hamburgerClick(props.refCategories)}><img src={tech} alt="categories"/></div>
                <div className="hamburger__items" onClick={()=>hamburgerClick(props.refTech)}><img src={cpu} alt="technology"/></div>
                <div className="hamburger__items" onClick={()=>hamburgerClick(props.refContact)}><img src={contact} alt="contact me"/></div>
            </div>
        </div>
}
        </>
    )
}
