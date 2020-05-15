import React from "react";

import Logo from "./assets/img/logo.png";
import Pic1 from "./assets/img/dev-jane-01.jpg";
import Pic2 from "./assets/img/dev-jane-02.jpg";

import MyWork from "./components/sections/MyWork";

import "./assets/css/style.css";

function App() {
  return (
    <div className="">
      <header>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <button className="nav-toggle" aria-label="toggle navigation">
          <span className="hamburger"></span>
        </button>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                My Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About me
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                My Work
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Introduction */}
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi, I'm <strong>Adam Spice</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          A Full Stack Developer
        </p>
        <img
          src={Pic1}
          alt="A picture of Adam Spice smiling"
          className="intro__img"
        />
      </section>

      {/* My services */}
      <section className="my-services" id="services">
        <h2 className="section__title section__title--services">What I do</h2>
        <div className="services">
          <div className="service">
            <h3>Design + Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          {/* / service */}

          <div className="service">
            <h3>E-Commerce</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          {/* / service */}

          <div className="service">
            <h3>WordPress</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          {/* / service */}
        </div>
        {/* / services */}

        <a href="#work" className="btn">
          My Work
        </a>
      </section>

      {/* About me*/}
      <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">
          A Full stack developer based in Auckland, NZ
        </p>

        <div className="about-me__body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <img
          src={Pic2}
          alt="Adam leaning against a bus"
          className="about-me__img"
        />
      </section>

      {/* My Work */}
      <MyWork />
      {/* Footer */}
      <footer className="footer">
        <a href="mailto:adam@adam-spice.online" className="footer__link">
          adam@adam-spice.online
        </a>
        <ul className="social-list">
          <li className="social-list__item">
            <a className="social-list__link" href="https://codepen.io">
              <i className="fab fa-codepen"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="http://dribbble.com">
              <i className="fab fa-dribbble"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="https://twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="https://github.com">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
