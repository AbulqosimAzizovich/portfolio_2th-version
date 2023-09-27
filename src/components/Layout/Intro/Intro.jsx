import React from "react";
import TypewriterComponent from "typewriter-effect";
import "./style.scss";
import location from "../../../assets/images/svg/location.svg";
import git from "../../../assets/images/svg/github.svg";
import twit from "../../../assets/images/svg/twitter.svg";
import figma from "../../../assets/images/svg/figma.svg";
import background from "../../../assets/images/image/background.jpg";

const Intro = () => {
  return (
    <section id="intro" className="intro">
      <div className="container">
        <div className="intro__wrapper">
          <div className="intro__left">
            <div className="intro__left--title">
              <h1>
                <TypewriterComponent
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    strings: [
                      "Hi, I’m  Abdulqosim 👋",
                      "Hi, I’m  a Web developer",
                      "Hi, I’m  a Python developer",
                    ],
                  }}
                />
              </h1>
            </div>

            <h2></h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              vitae mollitia ullam eligendi voluptatum laborum quos, vel
              reiciendis explicabo, quo amet fuga ex corrupti rem incidunt
              similique et. Modi rem fuga tempore similique ipsam nostrum
              corporis impedit incidunt ab delectus. Ab ipsa debitis inventore
              eius? Vero, doloremque voluptates.
            </p>

            <div className="ddd">
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
                <a href="https://github.com/AbdulqosimAzizovich">
                  <img src={git} alt="Github" />
                </a>
                <a href="https://twitter.com/Ummat_571_634">
                  <img src={twit} alt="Twitter" />
                </a>
                <a href="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1229693107521400120">
                  <img src={figma} alt="Figma" />
                </a>
              </div>
            </div>
          </div>
          <div className="intro__right">
            <img className="one" src={background} alt="" />
            <div className="bottom-image"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
