import React from "react";
import TypewriterComponent from "typewriter-effect";
import "./style.scss";
import location from "../../../assets/images/svg/location.svg";
import git from "../../../assets/images/svg/github.svg";
import twit from "../../../assets/images/svg/twitter.svg";
import figma from "../../../assets/images/svg/figma.svg";
import background from "../../../assets/images/svg/background.png";

const Intro = () => {
  return (
    <section id="intro" className="intro">
      <div className="container">
        <div className="intro__wrapper">
          <div className="intro__left">
            <div className="intro__left--title">
              <h1>Hi, I’m </h1>
              <h1>
                <TypewriterComponent
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    strings: [
                      " Abdulqosim 👋",
                      " a Web developer",
                      " a Python developer",
                    ],
                  }}
                />
              </h1>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              vitae mollitia ullam eligendi voluptatum laborum quos, vel
              reiciendis explicabo, quo amet fuga ex corrupti rem incidunt
              similique et. Modi rem fuga tempore similique ipsam nostrum
              corporis impedit incidunt ab delectus. Ab ipsa debitis inventore
              eius? Vero, doloremque voluptates.
            </p>

            <div className="intro__location">
              <div>
                <img src={location} alt="Location" />
                <p>Tashkent, Chilonozor</p>
              </div>

              <div>
                <p className="dot"></p>
                <p>Available for new projects</p>
              </div>
            </div>

            <div className="intro__links">
              <a href="#">
                <img src={git} alt="Github" />
              </a>
              <a href="#">
                <img src={twit} alt="Twitter" />
              </a>
              <a href="#">
                <img src={figma} alt="Figma" />
              </a>
            </div>
          </div>
          <div className="intro__right">
            <img className="one" src="https://picsum.photos/280/320" alt="" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
