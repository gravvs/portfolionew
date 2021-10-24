import React from "react";
import software2 from "../picture/software3.jpg";
import { LeftButton } from './Common';

export default function Software() {
  // const [index, setIndex] = useState(0);

  const software = [
    {
      id: 0,
      header: "Welcome in the future",
      desc: "Visit this website in couple days to see Software",
    },
  ];

  return (
    <div className="ux__wrapper">
      <div className="ux__subwrapper">
        <div className="slideshowDots">
          <div className="slideshowDot" style={{"background-color": "purple"}}></div>
        </div>
        <div className="ux__mobile">
          <img src={software2} alt="ux img" />
        </div>
        <div className="ux__content">
          <div>
          <h3>{software[0].header}</h3>
          <p>{software[0].desc}</p>
          </div>
        </div>
        <LeftButton />
      </div>
    </div>
  );
}
