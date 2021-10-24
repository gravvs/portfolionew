import React, { useState, useEffect, useRef } from "react";
import angled from "../picture/angled-cuts.png";
import {Head, Button} from "./Common";
import Form from "./Form";

export default function Client(props) {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const timeoutRef = useRef();

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const backendData = [
    {
      id: 1,
      description:
        "Creating such a unique and effective solution for our company, which allowed to reduce production costs thanks to new software and in such a short time is a real challenge and succes",
    },
    { id: 2, 
      description: "The most beautiful website i have ever seen" },
    {
      id: 3,
      description:
        "Very professional approach to the subject. Fast and precise work execution",
    },
  ];
// useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === backendData.length - 1 ? 0 : prevIndex + 1
//         ),
//       5000
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [index]);

  return (
    <div className="client" ref={props.refContact}>
      {show ? <Form show={show} setShow={setShow}/> : <div><Head el1="Clients'" el3="experience"/>
      <div className="client__slideshow">
        <div className="client__slideshowSlider" style={{ transform: `translate3d(${-index * 101}%, 0, 0)` }}>
          {backendData.map((el) => (
            <div key={el.id} className="client__opinion" >
              <img src={angled} alt="qoutation marks" />
              <div className="client__text">
                <p>{el.description}</p>
              </div>
              <span>
                <img src={angled} alt="qoutation marks" />
              </span>
            </div>
          ))}
        </div>
      </div>
      <Button desc="Contact me" action={()=>setShow(!show)}/>
      </div>
      }
    </div>
  );
}


