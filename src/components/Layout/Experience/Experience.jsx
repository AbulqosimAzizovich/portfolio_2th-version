import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import ExpCard from "./ExpCard";
import { Work__element } from "../../../data/Base";
import { useTheme } from "../../Theme";
import "./style.scss";

const Experience = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <section
      id="exp"
      className="exp"
      style={isDarkMode ? { background: "#111827" } : { background: "" }}
    >
      <div className="container">
        <div className="exp__wrapper">
          <div className="exp_">Experience</div>
          <p
            className={
              isDarkMode ? "exp_theme-p-dark exp__theme" : "exp__theme"
            }
          >
            Here is a quick summary of my most recent experiences:
          </p>

          <div className="first">
            <ExpCard />
          </div>

          <AwesomeSlider className="second">
            {Work__element.map((item) => (
              <div
                key={Date.now()}
                className={
                  isDarkMode ? "exp__card1 exp__card--dark" : "exp__card1"
                }
              >
                <img src={item.workImage} alt={item.compant_name} />
                <p className={isDarkMode ? "exp__card1-p" : ""}>{item.end}</p>

                <div className="about__work">
                  <h3 className={isDarkMode ? "exp__card1-h3" : ""}>
                    {item.compant_name}
                  </h3>
                  <ul>
                    <li className={isDarkMode ? "exp__card1-li" : ""}>Lorem, ipsum.</li>
                    <li className={isDarkMode ? "exp__card1-li" : ""}>Lorem ipsum dolor sit amet consectetur.</li>
                    <li className={isDarkMode ? "exp__card1-li" : ""}>Lorem ipsum dolor sit.</li>
                    <li className={isDarkMode ? "exp__card1-li" : ""}>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  </ul>
                </div>
              </div>
            ))}
          </AwesomeSlider>
        </div>
      </div>
    </section>
  );
};

export default Experience;
