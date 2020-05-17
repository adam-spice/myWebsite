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
          I have always had an interest in software and web development but
          didn’t think I would be in a place to do it as a career until now. I
          have been studying for a Diploma in Software Development for the last
          year and am looking forward to graduating. In my spare time, the web
          development community is a big part of my life. I am always striving
          to learn more and improve the way I code.
        </p>
        <p>
          Besides programming I love spending time with friends and family and
          can often be found together going out catching the latest movie,
          staying in playing games on the sofa or planning a trip to someplace
          I've never been before.
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
