import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Ux from "./Ux";
import Websites from "./Websites";
import Applications from "./Applications";
import Software from "./Software";

const categories = [
  { id: 1, desc: "UX/UI", where: "/ux"},
  { id: 2, desc: "Websites", where: "/websites" },
  { id: 3, desc: "Applications", where: "/" },
  { id: 4, desc: "Software", where: "/software" },
];

export default function Main() {

  return (
    <Router>
    <div className="main">
      <div className="main__categories">
        {categories.map((el) => (
          
          <div key={el.id}>
            <Link to={el.where}>
            <p>{el.desc}</p>
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
