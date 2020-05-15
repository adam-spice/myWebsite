import React from "react";
import "./assets/css/style.css";
import Logo from "./assets/img/logo.png";
import Pic1 from "./assets/img/dev-jane-01.jpg";
import Pic2 from "./assets/img/dev-jane-02.jpg";

import Proj1 from "./assets/img/portfolio-01.jpg";
import Proj2 from "./assets/img/portfolio-02.jpg";
import Proj3 from "./assets/img/portfolio-03.jpg";
import Proj4 from "./assets/img/portfolio-04.jpg";
import Proj5 from "./assets/img/portfolio-05.jpg";
import Proj6 from "./assets/img/portfolio-06.jpg";
import Proj7 from "./assets/img/portfolio-07.jpg";
import Proj8 from "./assets/img/portfolio-08.jpg";
import Proj9 from "./assets/img/portfolio-09.jpg";
import Proj10 from "./assets/img/portfolio-10.jpg";

const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  return (
    <div className="">
      <header>
        <div class="logo">
          <img src={Logo} alt="" />
        </div>
        <button class="nav-toggle" aria-label="toggle navigation">
          <span class="hamburger"></span>
        </button>
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="#home" class="nav__link">
                Home
              </a>
            </li>
            <li class="nav__item">
              <a href="#services" class="nav__link">
                My Services
              </a>
            </li>
            <li class="nav__item">
              <a href="#about" class="nav__link">
                About me
              </a>
            </li>
            <li class="nav__item">
              <a href="#work" class="nav__link">
                My Work
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Introduction */}
      <section class="intro" id="home">
        <h1 class="section__title section__title--intro">
          Hi, I'm <strong>Adam Spice</strong>
        </h1>
        <p class="section__subtitle section__subtitle--intro">
          A Full Stack Developer
        </p>
        <img
          src={Pic1}
          alt="A picture of Adam Spice smiling"
          class="intro__img"
        />
      </section>

      {/* My services */}
      <section class="my-services" id="services">
        <h2 class="section__title section__title--services">What I do</h2>
        <div class="services">
          <div class="service">
            <h3>Design + Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          {/* / service */}

          <div class="service">
            <h3>E-Commerce</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          {/* / service */}

          <div class="service">
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

        <a href="#work" class="btn">
          My Work
        </a>
      </section>

      {/* About me*/}
      <section class="about-me" id="about">
        <h2 class="section__title section__title--about">Who I am</h2>
        <p class="section__subtitle section__subtitle--about">
          A Full stack developer based in Auckland, NZ
        </p>

        <div class="about-me__body">
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
          class="about-me__img"
        />
      </section>

      {/* My Work */}
      <section class="my-work" id="work">
        <h2 class="section__title section__title--work">My work</h2>
        <p class="section__subtitle section__subtitle--work">
          A selection of my range of work
        </p>

        <div class="portfolio">
          {/* Portfolio item 01 */}

          <a href="./portfolio-item.html" class="portfolio__item">
            <img src={Proj1} alt="" class="portfolio__img" />
          </a>

          {/* Portfolio item 02 */}
          <a href="./portfolio-item.html" class="portfolio__item">
            <img src={Proj2} alt="" class="portfolio__img" />
          </a>

          {/* Portfolio item 03 */}
          <a href="./portfolio-item.html" class="portfolio__item">
            <img src={Proj3} alt="" class="portfolio__img" />
          </a>

          {/* Portfolio item 04 */}
          <a href="./portfolio-item.html" class="portfolio__item">
            <img src={Proj4} alt="" class="portfolio__img" />
          </a>

          {/* Portfolio item 05 */}
          <a href="./portfolio-item.html" class="portfolio__item">
            <img src={Proj5} alt="" class="portfolio__img" />
          </a>

          {/* Portfolio item 06 */}
          <a href="./portfolio-item.html" class="portfolio__item">
            <img src={Proj6} alt="" class="portfolio__img" />
          </a>

          {/* Portfolio item 07 */}
          <a href="./portfolio-item.html" class="portfolio__item">
            <img src={Proj7} alt="" class="portfolio__img" />
          </a>

          {/* Portfolio item 08 */}
          <a href="./portfolio-item.html" class="portfolio__item">
            <img src={Proj8} alt="" class="portfolio__img" />
          </a>

          {/* Portfolio item 09 */}
          <a href="./portfolio-item.html" class="portfolio__item">
            <img src={Proj9} alt="" class="portfolio__img" />
          </a>

          {/* Portfolio item 0 0*/}
          <a href="./portfolio-item.html" class="portfolio__item">
            <img src={Proj10} alt="" class="portfolio__img" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer class="footer">
        <a href="mailto:adam@adam-spice.online" class="footer__link">
          adam@adam-spice.online
        </a>
        <ul class="social-list">
          <li class="social-list__item">
            <a class="social-list__link" href="https://codepen.io">
              <i class="fab fa-codepen"></i>
            </a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="http://dribbble.com">
              <i class="fab fa-dribbble"></i>
            </a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="https://twitter.com">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="https://github.com">
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
