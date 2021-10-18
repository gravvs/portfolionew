import React from "react";

const categories = [
  { id: 1, desc: "UX/UI" },
  { id: 2, desc: "Websites" },
  { id: 3, desc: "Applications" },
  { id: 4, desc: "Software" },
];

export default function Main() {
  return (
    <div className="main">
      <div className="main__categories">
        {categories.map((el) => (
          <div key={el.id}>
            <p>{el.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
