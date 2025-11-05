/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">V</span>
        <div className="links">
          <a href="https://www.linkedin.com/in//" target={"blank"} title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com//" target={"blank"} title="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/" target={"blank"} title="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Varsha
        </p>
      </div>
    </footer>
  );
}

export default Footer;
