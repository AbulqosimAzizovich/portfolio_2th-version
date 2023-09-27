import { Work__element } from "../../../data/Base";
import { useTheme } from "../../Theme";

const ExpCard = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="exp__cards">
      {Work__element.map((item) => (
        <div
          key={Date.now()}
          className={isDarkMode ? "exp__card exp__card--dark" : "exp__card"}
        >
          <img src={item.workImage} alt={item.compant_name} />

          <div className="about__work">
            <h3 className={isDarkMode ? "exp__card-h3" : ""}>
              {item.compant_name}
            </h3>
            <ul>
              <li className={isDarkMode ? "exp__card-li" : ""}>
                Lorem, ipsum.
              </li>
              <li className={isDarkMode ? "exp__card-li" : ""}>
                Lorem ipsum dolor sit amet consectetur.
              </li>
              <li className={isDarkMode ? "exp__card-li" : ""}>
                Lorem ipsum dolor sit.
              </li>
              <li className={isDarkMode ? "exp__card-li" : ""}>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </li>
            </ul>
          </div>

          <p className={isDarkMode ? "exp__card-p" : ""}>{item.end}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpCard;
