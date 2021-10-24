import React from "react";
import uxui from "../picture/UI-UX.jpg";
import { LeftButton } from "./Common";

const ux = [
  {
    id: 0,
    header: "Welcome in the future",
    desc: "Visit this website in couple days to see Project",
  },
];

export default function Ux() {
  // const [index, setIndex] = useState(0);
  return (
    <div className="ux__wrapper">
      <div className="ux__subwrapper">
        <div className="slideshowDots">
          <div className="slideshowDot" style={{"background-color": "purple"}}></div>
        </div>
        <div className="ux__mobile">
          <img src={uxui} alt="ux img" />
        </div>
        <div className="ux__content">
          <div>
          <h3>{ux[0].header}</h3>
          <p>{ux[0].desc}</p>
          </div>
        </div>
        <LeftButton />
      </div>
    </div>
  );
}
