import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Ux from "./Ux";
import Websites from "./Websites";
import Applications from "./Applications";
import Software from "./Software";

const categories = [
  { id: 0, desc: "UX/UI", where: "/ux"},
  { id: 1, desc: "Websites", where: "/websites" },
  { id: 2, desc: "Applications", where: "/" },
  { id: 3, desc: "Software", where: "/software" },
];

export default function Main(props) {
  const [number, setNumber] = useState(2)

  return (
    <Router>
    <div className="main" ref={props.refMain}>
      <div className="main__categories">
        {categories.map((el) => (
          
          <div key={el.id} className={`${el.id === number ? " active" : ""}`}>
            <Link to={el.where}>
            <p onClick={()=>setNumber(el.id)}>{el.desc}</p>
            </Link>
          </div>
          
        ))}
      </div>
      <Route exact path='/ux' component={Ux} />
      <Route exact path='/websites' component={Websites} />
      <Route exact path='/' component={Applications} />
      <Route exact path='/software' component={Software} />
    </div>
    </Router>
  );
}
