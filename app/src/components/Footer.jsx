import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
         <img src={logo} alt="Image logo" />
        <div className="footer-brand">SUN CO.</div>
      </div>
      <p className="footer-text">© 2023 dot.cards test task. All rights reserved</p>
      <div className="footer-icons">
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>
    </footer>
  );
};

export default Footer;