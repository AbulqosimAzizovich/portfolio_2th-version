import React from "react";
import { Base } from "./../../../data/Base";

const Skillscard = (image, title, id) => {
  return (
    <div className="skills__card" key={id}>
      {Base.map((item) => (
        <div key={item.title}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Skillscard;
