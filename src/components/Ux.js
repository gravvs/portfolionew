import React, { useState } from "react";
import uxui from "../picture/UI-UX.jpg";

const ux = [
  {
    id: 1,
    header: "Welcome in the future",
    desc: "Visit this website in couple days to see Project",
  },
];

export default function Ux() {
  const [index, setIndex] = useState(0);
  return (
    <div className="ux__wrapper">
      <div>kropki</div>
      <div>
        <img src={uxui} alt="iphone" />
      </div>
      <div>
        content
      </div>
      <div>button right</div>
    </div>
  );
}
