import React,{useState} from "react";
import iphone from '../picture/iphone2.png'
import { Button } from "./Common";

export default function Software() {
    const [index, setIndex] = useState(0)

    const software = [
  {id: 1, header: "Welcome in the future", desc: "Visit this website in couple days to see Software"}
]

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
