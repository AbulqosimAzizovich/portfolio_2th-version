import React from "react";
import "./style.scss";
import Skillscard from './Skillscard';


const Skills = () => {

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills__wrapper">
          <div className="skills_">Skills</div>
          <p>The skills, tools and technologies I am really good at:</p>

          <Skillscard />
        </div>
      </div>
    </section>
  );
};

export default Skills;
