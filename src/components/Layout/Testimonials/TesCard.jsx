import React from "react";
import { tes } from "../../../data/Base";
import { useTheme } from "../../Theme";

const TesCard = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <div className="tescards">
      {tes.map((e) => {
        return (
          <div className={isDarkMode ? "tescard tescard__dark" : "tescard"}>
            <img src={e.user} alt={e.hName} />

            <p className={isDarkMode ? "tes__p--d " : ""}>{e.abo}</p>

            <h3 className={isDarkMode ? "tes__p--d " : ""}>{e.hName}</h3>
            <span className={isDarkMode ? "tes__p--d " : ""}>{e.hJob}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TesCard;
