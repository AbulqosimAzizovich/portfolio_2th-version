import React from "react";
import "./style.scss";
import TesCard from "./TesCard";
import { useTheme } from "../../Theme";

const Testimonials = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <section
      id="testimonials"
      className="testimonials"
      style={isDarkMode ? { background: "#111827" } : { background: "" }}
    >
      <div className="container">
        <div className="tes__wrapper">
          <div className="testimonials_">Testimonials</div>
          <p
            className={
              isDarkMode ? "testimonials__p tes__p--d" : "testimonials__p "
            }
          >
            Nice things people have said about me:
          </p>

          <TesCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
