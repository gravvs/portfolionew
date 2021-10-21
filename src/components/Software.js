import React, { useState } from "react";
import software2 from "../picture/software2.jpg";

export default function Software() {
  const [index, setIndex] = useState(0);

  const software = [
    {
      id: 1,
      header: "Welcome in the future",
      desc: "Visit this website in couple days to see Software",
    },
  ];

  return (
    <div className="software__wrapper">
      <div>kropki</div>
      <div>
        <img src={software2} alt="iphone" />
      </div>
      <div>content</div>
      <div>button right</div>
    </div>
  );
}
