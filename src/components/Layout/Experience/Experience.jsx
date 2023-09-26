import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import ExpCard from "./ExpCard";
import { Work__element } from "../../../data/Base";
import "./style.scss";

const Experience = () => {
  return (
    <section id="exp" className="exp">
      <div className="container">
        <div className="exp__wrapper">
          <div className="exp_">Experience</div>
          <p className="exp__theme">
            Here is a quick summary of my most recent experiences:
          </p>

          <div className="first">
            <ExpCard />
          </div>

          <AwesomeSlider className="second">
            {Work__element.map((item) => (
              <div key={Date.now()} className="exp__card1">
                <img src={item.workImage} alt={item.compant_name} />
                <p>{item.end}</p>

                <div className="about__work">
                  <h3>{item.compant_name}</h3>
                  <ul>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
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
