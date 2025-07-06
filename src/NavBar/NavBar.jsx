import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {isMobileScreen && (
          <div className="mobile-menu-icon" onClick={toggleMenu}>
            &#9776;
          </div>
        )}

        <div className="nav-logo">
          <Link to="/">
            <img src="/logo.png" alt="Sri Shiridi Sai Logo" />
          </Link>
        </div>

        {/* Desktop nav */}
        {!isMobileScreen && (
          <div className="nav-links-desktop">
            <div className="nav-links left">
              <Link to="/">
                <span>Home</span>
              </Link>
              <Link to="/">
                <span>Retailers</span>
              </Link>
            </div>
            <div className="nav-links right">
              <Link to="/about">
                <span>About Us</span>
              </Link>
              <Link to="/contact">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {isMobileScreen && isMobileMenuOpen && (
          <div className="nav-links-mobile">
            <Link to="/" onClick={closeMenu}>
              <span>Home</span>
            </Link>
            <Link to="/retailers" onClick={closeMenu}>
              <span>Retailers</span>
            </Link>
            <Link to="/about" onClick={closeMenu}>
              <span>About Us</span>
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              <span>Contact Us</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
