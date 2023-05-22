import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="contact-info">
        <Link to="https://www.linkedin.com/in/abhimanyu-singh-chamyal-a61623194">
          <i className="fab fa-linkedin"></i>Abhimanyu Singh
        </Link>
        <Link to="tel:+1-123-456-7890">
          <i className="fas fa-phone"></i>123-456-7890
        </Link>
        <Link to="https://github.com/abhimanyu1800">
          <i className="fab fa-github"></i>Github
        </Link>
      </div>
    </footer>
  );
}
