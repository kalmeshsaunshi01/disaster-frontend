import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../assets/styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="company-info">
          <h3>XYZ Company</h3>
          <p>Leading AI-powered disaster detection solutions.</p>
          <p>&copy; {new Date().getFullYear()} XYZ Company. All rights reserved.</p>
        </div>

        <div className="social-links">
          <h3>Follow Us</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" /> Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" /> Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
