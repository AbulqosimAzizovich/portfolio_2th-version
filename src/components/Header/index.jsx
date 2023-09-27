import { useState } from "react";
import "./style.scss";
import Dark from "../../assets/images/svg/light.svg";
import Menu from "../../assets/images/svg/menu.svg";
import Close from "../../assets/images/svg/close.svg";
import { useTheme } from "../Theme";

const index = () => {
  const [modal, setModal] = useState(true);
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <header style={isDarkMode ? {background: "#030712"} : {background: ""}}>
      <div className="container">
        <div
          className={
            isDarkMode ? "header__wrapper dark_header" : "header__wrapper"
          }
        >
          <div className="header__logo">
            <span className={isDarkMode ? "dark__logo" : ""}>{"< AA />"}</span>
          </div>

          <div className="header__list">
            <div className="header__list--left">
              <ul>
                <li>
                  <a className={isDarkMode ? "a-dark" : ""} href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className={isDarkMode ? "a-dark" : ""} href="#work">
                    Work
                  </a>
                </li>
                <li>
                  <a
                    className={isDarkMode ? "a-dark" : ""}
                    href="#testimonials"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a className={isDarkMode ? "a-dark" : ""} href="#footer">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="header__list--right">
              <button
                className="header__list--right-img"
                onClick={toggleDarkMode}
              >
                <img src={Dark} alt="" />
              </button>
              <a
                href="https://drive.google.com/uc?export=download&id=1s7BU_2qZqLHlkqomT1BMvFhuwKvrvQJB"
                download
                className="header__list--right-download"
              >
                Download CV
              </a>
            </div>
          </div>

          <button
            className="header__modal--open"
            onClick={() => setModal(!modal)}
          >
            <img src={Menu} alt="Menu" />
          </button>

          <div
            className="header__modal"
            style={
              modal
                ? { transform: "translateX(120%)" }
                : { transform: "translateX(0%)" }
            }
          >
            <div className="header__modal--top">
              <h3>{"<AA />"}</h3>
              <img src={Close} alt="Close" onClick={() => setModal(!modal)} />
            </div>
            <div className="header__modal--center">
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Work</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="header__modal--bottom">
              <div className="header__modal--bottom-theme">
                <p>Switch Theme</p>
                <img src={Dark} alt="Dark mode" />
              </div>

              <a
                href="https://drive.google.com/uc?export=download&id=1s7BU_2qZqLHlkqomT1BMvFhuwKvrvQJB"
                download
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
