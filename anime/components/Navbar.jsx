import React from "react";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          AnimeVerse
        </a>
        <ul className="navbar-links">
          <li>
            <a href="/" className="navbar-link">
              Home
            </a>
          </li>
          <li>
            <a href="/anime" className="navbar-link">
              Anime List
            </a>
          </li>
          <li>
            <a href="/about" className="navbar-link">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
