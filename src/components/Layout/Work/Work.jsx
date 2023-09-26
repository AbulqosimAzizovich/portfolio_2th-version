import React from "react";
import "./style.scss";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { abs } from "../../../data/Base";
import Workcard from "./Workcard";
import link from "../../../assets/images/svg/link.svg";

const Work = () => {
  return (
    <section id="work" className="work">
      <div className="container">
        <div className="work__wrapper">
          <div className="work_">Work</div>
          <p className="work__theme">
            Some of the noteworthy projects I have built:
          </p>

          <div className="w_card">
            <Workcard />
          </div>

          <AwesomeSlider className="wres_card">
            {abs.map((e) => {
              return (
                <div className="work__card">
                  <div className="wcard__image">
                    <img src={e.rasm} alt={e.nomi} />
                  </div>
                  <div className="work__card--right">
                    <h4>{e.nomi}</h4>

                    <p>{e.parag}</p>

                    <div className="tech__list">
                      {e.tech.map((e) => {
                        return <div className="technology">{e}</div>;
                      })}
                    </div>

                    <a href={e.link} className="work__link">
                      <img src={link} alt="Link" />
                    </a>
                  </div>
                </div>
              );
            })}
          </AwesomeSlider>
        </div>
      </div>
    </section>
  );
};

export default Work;
