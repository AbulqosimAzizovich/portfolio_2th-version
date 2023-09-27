import React from "react";
import "./style.scss";
import Skillscard from "./Skillscard";
import { useTheme } from "../../Theme";

const Skills = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <section
      id="skills"
      className="skills"
      style={isDarkMode ? { background: "#030712" } : { background: "" }}
    >
      <div className="container">
        <div className="skills__wrapper">
          <div className="skills_">Skills</div>
          <p className={isDarkMode ? "about_p-dark" : ""}>The skills, tools and technologies I am really good at:</p>

          <Skillscard />
        </div>
      </div>
    </section>
  );
};

export default Skills;
