import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/logo.png";

const Header = ({ open, setOpen }) => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={() => setOpen(!open)}
      >
        <span className="hamburger"></span>
      </button>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/blog"
              className="nav__link"
              onClick={() => setOpen(false)}
            >
              My Blog
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/#services"
              className="nav__link"
              onClick={() => setOpen(false)}
            >
              My Services
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/#about"
              className="nav__link"
              onClick={() => setOpen(false)}
            >
              About me
            </Link>
          </li>
          <li className="nav__item">
            <a
              href="/#work"
              className="nav__link"
              onClick={() => setOpen(false)}
            >
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
