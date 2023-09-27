import React from "react";
import { Base } from "./../../../data/Base";
import { useTheme } from "../../Theme";

const Skillscard = (image, title, id) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="skills__card" key={id}>
      {Base.map((item) => (
        <div key={item.title}>
          <img src={item.image} alt={item.title} />
          <p className={isDarkMode ? "skills_card--p-dark" : ""}>
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Skillscard;
