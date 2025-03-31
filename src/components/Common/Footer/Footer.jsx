import React from "react";
import "./footer.css";
import logo from "/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Footer Section */}
      <div className="footer-main">
        {/* Logo and About */}
        <div className="footer-section">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-text">
          To deliver exceptional energy and digital solutions with expertise, innovation, and a focus on value and growth.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h2 className="footer-title">Quick Links</h2>
          <div className="footer-links">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
            </ul>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy">Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Subscription */}
        <div className="footer-section">
          <h2 className="footer-title">Subscription Letter</h2>
          <p className="footer-text">
          Explore our news and blog content today and take the first step towards unlocking your full marketing potential.
          </p>
          <div className="subscription-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="subscription-input"
            />
            </div>
            <div>
            <button className="subscription-button">Send Email</button>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="footer-bottom">
        <div className="footer-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <FaFacebookF /></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> <FaTwitter /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> <FaInstagram /></a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">  <FaYoutube /></a>
        </div>
        <p className="footer-bottom-text">
          Copyright 2025 © All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;