import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
