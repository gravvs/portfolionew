import React,{ useState } from "react";
import {Head, scrollToRef} from "./Common";

export default function Header(props) {
  const [active, setActive] = useState(true)
  
  const handleActive = () => {
    setActive(!active)
  }

  return (
    <div className="header">
      <div className="header__sign">
        <h2>&#2417;B.C</h2>
        <h4>Bartosz Czenczek Portfolio</h4>
        <h4>Front End Developer</h4>
      </div>

      <div className="header__menu">
        {!props.show &&
        <>
        <h4 onClick={()=>{handleActive()}}>Menu &#x022BD;</h4>
        {active && <div>
          <p onClick={()=>scrollToRef(props.refMain)}>My portfolio</p>
          <p onClick={()=>scrollToRef(props.refCategories)}>Service</p>
          <p onClick={()=>scrollToRef(props.refTech)}>Technology</p>
          <p onClick={()=>scrollToRef(props.refContact)}>Contact Me</p>
        </div>}
        </>}
      </div>
      <div className="header__square">
        <p>Engage</p>
        <p>Design</p>
        <p>Evolve</p>
      </div>
      <Head el1="My ideology is to engage my best skills and technology" el2="in theprocess of design" el3="to make your ideas evolve"/>
    </div>
  );
}
