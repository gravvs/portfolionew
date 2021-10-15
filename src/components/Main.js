import React from "react";
import atom from "../picture/atom.png";
import code from "../picture/code.png";
import mobile from "../picture/mobile-app.png";
import play from "../picture/play.png";
import website from "../picture/website-design.png";

export default function Main() {
  return (
    <div className="main">
      <div className="main__categories">
        <div>
          <p>UX/UI</p>
        </div>
        <div>
          <p>Websites</p>
        </div>
        <div>
          <p>Applications</p>
        </div>
        <div>
          <p>Software</p>
        </div>
      </div>
      <div></div>
      <div className="main__header">
        <h2>
          As a professional, i can provide a wide range of services <br />
          to make sure you have
          <br />
          <span>everything under control</span>
        </h2>
      </div>
      <div className="main__service">
        <div className="main__descriptions">
          <img src={atom} />
          <div>
            <p>01</p>
            <h2>Ux/Ui</h2>
            <p>Through research to prepare the best solutions</p>
          </div>
          <img src={play} />
        </div>
        <div className="main__descriptions">
          <img src={website} />
          <div>
            <p>02</p>
            <h2>Web design</h2>
            <p>Full responsive and equipped with modern technology</p>
          </div>
          <img src={play} />
        </div>
        <div className="main__descriptions">
          <img src={mobile} />
          <div>
            <p>03</p>
            <h2>Applications</h2>
            <p>Indyvidually planned solutions to provide best answers to your problems and needs</p>
          </div>
          <img src={play} />
        </div>
        <div className="main__descriptions">
          <img src={code} />
          <div>
            <p>04</p>
            <h2>Software</h2>
            <p>I examine structures of your company to find the best way to improve its operations</p>
          </div>
          <img src={play} />
        </div>
      </div>
    </div>
  );
}
