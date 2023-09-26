import React from "react";
import "./style.scss";
import TesCard from './TesCard';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="tes__wrapper">
          <div className="testimonials_">Testimonials</div>
          <p className="testimonials__p">
            Nice things people have said about me:
          </p>

          <TesCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
