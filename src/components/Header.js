import React,{ useState } from "react";

export default function Header() {
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
        <h4 onClick={handleActive}>Menu &#x022BD;</h4>
        {active && <div>
          <p>My portfolio</p>
          <p>Service</p>
          <p>Awards</p>
          <p>Technology</p>
          <p>Contact Me</p>
        </div>}
      </div>
      <div className="header__square">
        <p>Engage</p>
        <p>Design</p>
        <p>Evolve</p>
      </div>
      <div className="header__header">
        <h2>
          My ideology is to engage my best skills and technology <br /> in the
          process of design
          <br />
          <span>to make your ideas evolve</span>
        </h2>
      </div>
    </div>
  );
}
