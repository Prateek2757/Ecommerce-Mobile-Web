import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import "./Home.css";
import logo from "../assets/mobilehub.jpg";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className="home-main">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Welcome to Mobile Hub</h1>
          <p className="hero-subtitle">Discover the Future of Mobile Technology</p>
          <Link to="/shop" className="hero-button">Shop Now</Link>
        </div>
      </div>

      <Carousel />
      <hr className="divider"></hr>

      {/* About Us Section */}
      <div className="content-section">
        <div className="about-us-card">
          <img src={logo} alt="Mobile Hub" className="img-fluid about-us-logo" />
          <div className="about-us-text">
            <h2>About Us</h2>
            <p>
              Welcome to Mobile Hub! We are dedicated to providing the latest and greatest in mobile technology.
              Our mission is to offer high-quality products and exceptional customer service.
              Whether you're looking for a new phone, accessories, or support, we've got you covered!
            </p>
          </div>
        </div>
      </div>
      <hr className="divider"></hr>

      {/* Sign Up Section */}
      <div className="signup-section">
        <h2>Join Our Community</h2>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" placeholder="Mind Risers" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="MindRisers@gmail.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" placeholder="Putalisadak" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="••••••••" required />
          </div>
          <div className="form-group">
            <label htmlFor="remark">Remark:</label>
            <textarea className="form-control" id="remark" rows="4" placeholder="Share your thoughts..."></textarea>
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <div className="login-prompt">
          Already Registered?
          <Link className="login-button" to="/sign">Login</Link>
        </div>
      </div>
      <hr className="divider"></hr>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Mobile Hub" />
            <p>© 2024 Mobile Hub. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com"><FaFacebookF /></a>
              <a href="https://www.twitter.com"><FaTwitter /></a>
              <a href="https://www.instagram.com"><FaInstagram /></a>
              <a href="https://www.linkedin.com"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
