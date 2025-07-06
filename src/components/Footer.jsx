import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left: Logo/Image */}
        <div className="footer-logo">
          <img src="/logo.png" alt="Sai Baba" />
        </div>

        {/* Middle: About */}
        <div className="footer-section about">
          <h3>Sri Shiridi Sai Enterprises</h3>
          <p>
            Distributing trusted products with care. Connecting retailers like
            Baadshah, Dodla, and many more across regions.
          </p>
        </div>

        {/* Right: Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>Retailers</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Hyderabad, India</p>
          <p>Email: rajugattoji@gmail.com</p>
          <p>Phone: +91 9885026204</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Sri Shiridi Sai Enterprises. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
