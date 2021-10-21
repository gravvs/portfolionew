import React from "react";
import github from '../picture/github-3.png';
import instagram from '../picture/instagram.png';
import linkedin from '../picture/linkedin.png';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__sign">
        <h2>&#2417;B.C</h2>
        <h4>Bartosz Czenczek 2021</h4>
        <h4>All rights reserved.</h4>
      </div>
      <div>
        <p>Portfolio</p>
        <p>Service</p>
        <p>Awards</p>
        <p>Technology</p>
      </div>
      <div>
        <p>Contact Me</p>
        <p>Privacy</p>
        <p>Terms &#x00026; Conditions</p>
      </div>
      <div className="footer__img">
          <img src={github} alt="github" />
          <img src={instagram} alt="instagram" />
          <img src={linkedin} alt="linkedin" />
      </div>
    </div>
  );
}
