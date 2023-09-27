import React from "react";
import { abs } from "./../../../data/Base";
import link from "../../../assets/images/svg/link.svg";
import { useTheme } from "../../Theme";

const Workcard = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="work__cards">
      {abs.map((e) => {
        return (
          <div
            className={
              isDarkMode ? "work__card work__card--dark" : "work__card"
            }
          >
            <div className="wcard__image">
              <img src={e.rasm} alt={e.nomi} />
            </div>
            <div className="work__card--right">
              <h4 className={isDarkMode ? "w_c-h4d" : ""}>{e.nomi}</h4>

              <p className={isDarkMode ? "w_c-Pd" : ""}>{e.parag}</p>

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
    </div>
  );
};

export default Workcard;
