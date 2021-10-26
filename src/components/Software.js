import React from "react";
import software2 from "../picture/software3.jpg";
import { UxSoftware } from "./Common";

export default function Software() {
  const software = [
    {
      id: 0,
      header: "Welcome in the future",
      desc: "Visit this website in couple days to see Software",
    },
  ];

  return <UxSoftware img={software2} array={software} />;
}
