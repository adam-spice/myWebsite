import React from "react";
import Pic2 from "../../assets/img/pic2.jpg";

const AboutMe = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        A Full stack developer based in Auckland, NZ
      </p>

      <div className="about-me__body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <img
        src={Pic2}
        alt="Adam leaning against a bus"
        className="about-me__img"
      />
    </section>
  );
};

export default AboutMe;
