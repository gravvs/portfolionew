import React, {useState} from "react";
import iphone from '../picture/iphone2.png'
import { Button } from "./Common";

const ux = [
  {
    id: 1,
    header: "Welcome in the future",
    desc: "Visit this website in couple days to see Project",
  },
];

export default function Ux() {
    const [index, setIndex] = useState(0)
  return (
    <div>
      <div>
        <div>kropki</div>
        <img src={iphone} alt="iphone" />
      </div>
      <div>
        content
        <Button />
      </div>
      <div>button right</div>
    </div>
  );
}
