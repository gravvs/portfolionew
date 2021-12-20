import React, { useState, useEffect, useRef } from "react";
import angled from "../picture/angled-cuts.png";
import { Head, Button, CategorieButton } from "./Common";
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
      desc:
        "Creating such a unique and effective solution for our company, which allowed to reduce production costs thanks to new software and in such a short time is a real challenge and succes",
      img: angled,
    },
    { id: 2, desc: "The most beautiful website i have ever seen", img: angled },
    {
      id: 3,
      desc:
        "Very professional approach to the subject. Fast and precise work execution",
      img: angled,
    },
  ];
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === backendData.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {
      resetTimeout();
    };
  });

  const styles = { transform: `translate3d(${-index * 101}%, 0, 0)` };

  return (
    <div className="client" ref={props.refContact}>
      {show ? (
        <Form show={show} setShow={setShow} />
      ) : (
        <div>
          <Head el1="Clients'" el3="experience" />
          <div className="client__slideshow">
            <CategorieButton
              array={backendData}
              img={angled}
              class1="client__slideshowSlider"
              class2="client__opinion"
              class3="client__text"
              styles={styles}
              funktion={()=>console.log("you found me")}
            />
          </div>
          <Button
            desc="Contact me"
            action={() => setShow((prevShow) => !prevShow)}
          />
        </div>
      )}
    </div>
  );
}
