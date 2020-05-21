import React, { useRef, useEffect } from "react";

import MyWork from "../components/sections/MyWork";
import Services from "../components/sections/Services";
import Intro from "../components/sections/Intro";
import AboutMe from "../components/sections/AboutMe";
import { withRouter } from "react-router-dom";
import Contact from "../components/sections/Contact";

const HomePage = (props) => {
  const aboutRef = useRef();
  const myWorkRef = useRef();
  const myServicesRef = useRef();
  const contactRef = useRef();

  //scroll to correct component
  useEffect(() => {
    const { hash } = props.location;
    if (hash === "#about") {
      window.scrollTo(0, aboutRef.current.offsetTop);
    } else if (hash === "#work") {
      window.scrollTo(0, myWorkRef.current.offsetTop);
    } else if (hash === "#services") {
      window.scrollTo(0, myServicesRef.current.offsetTop);
    } else if (hash === "#contact") {
      window.scrollTo(0, contactRef.current.offsetTop);
    }
  }, [props.location]);

  return (
    <>
      <Intro />
      <Services myServicesRef={myServicesRef} />
      <AboutMe aboutRef={aboutRef} />
      <MyWork myWorkRef={myWorkRef} />
      <Contact contactRef={contactRef} />
    </>
  );
};

export default withRouter(HomePage);
