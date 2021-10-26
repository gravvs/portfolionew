import React from "react";
import uxui from "../picture/UI-UX.jpg";
import { UxSoftware } from "./Common";

const ux = [
  {
    id: 0,
    header: "Welcome in the future",
    desc: "Visit this website in couple days to see Project",
  },
];

export default function Ux() {
  return <UxSoftware img={uxui} array={ux} />;
}
