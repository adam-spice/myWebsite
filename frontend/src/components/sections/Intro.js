import React from "react";
import Pic1 from "../../assets/img/pic1.jpg";

const Intro = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I'm <strong>Adam Spice</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        A Full Stack Developer
      </p>
      <img src={Pic1} alt=" Adam Spice smiling" className="intro__img" />
    </section>
  );
};

export default Intro;
