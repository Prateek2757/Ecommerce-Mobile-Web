import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import "./Home.css";
import logo from "../assets/mobilelogo.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMobileAlt,
  FaHeadphonesAlt,
  FaBatteryFull,
} from "react-icons/fa";

function Home() {
  return (
    <div className="home-main">
      <div className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Welcome to Mobile Hub</h1>
          <p className="hero-subtitle">
            Discover the Future of Mobile Technology
          </p>
          <Link to="/blogs" className="hero-button">
            Shop Now
          </Link>
        </div>
      </div>

      <Carousel />
      <hr className="divider"></hr>

      <div className="content-section">
        <div className="about-us-card">
          <img
            src={logo}
            alt="Mobile Hub"
            className="img-fluid about-us-logo"
          />
          <div className="about-us-text">
            <h2>About Us</h2>
            <p>
              Welcome to Mobile Hub! We are dedicated to providing the latest
              and greatest in mobile technology. Our mission is to offer
              high-quality products and exceptional customer service. Whether
              you're looking for a new phone, accessories, or support, we've got
              you covered!
            </p>
          </div>
        </div>
      </div>

      <hr className="divider"></hr>
   

    {/* Our Services Section */}
    <div className="services-section">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">Explore the services we offer to our valued customers</p>

        <div className="services-container">
          <div className="service-card">
            <FaMobileAlt className="service-icon" />
            <h3>Latest Mobile Phones</h3>
            <p>
              Stay ahead with the latest and most innovative mobile phones from
              top brands.
            </p>
          </div>

          <div className="service-card">
            <FaHeadphonesAlt className="service-icon" />
            <h3>Mobile Accessories</h3>
            <p>
              Enhance your mobile experience with our wide range of accessories,
              from headphones to cases.
            </p>
          </div>

          <div className="service-card">
            <FaBatteryFull className="service-icon" />
            <h3>Battery Replacement</h3>
            <p>
              Get reliable battery replacement services to keep your phone running
              longer.
            </p>
          </div>
        </div>
      </div>
      
<hr className="divider"></hr>
      {/* Testimonial Intro */}
      <div className="testimonial-intro">
        <h2>What Our Customers Are Saying</h2>
        <p>
          Hear from our satisfied customers about their experience with Mobile
          Hub. We value feedback and strive to provide the best services to our
          customers!
        </p>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-container">
        <div className="testtomonial-card">
          <img
            src={logo}
            alt="people-img"
            className="img-fluid testtomonail-img"
          />
          <h2>Kp Oli</h2>
          <h4>Customer</h4>
          <p>
            "I purchased my new smartphone from Mobile Hub and was amazed by the
            quick delivery and customer support. They helped me choose the right
            phone for my needs. Highly recommended!"
          </p>
        </div>

        <div className="testtomonial-card">
          <img
            src={logo}
            alt="people-img"
            className="img-fluid testtomonail-img"
          />
          <h2>Ram Bahisnav</h2>
          <h4>Tech Enthusiast</h4>
          <p>
            "Mobile Hub has a fantastic collection of accessories. I was able to
            find the perfect case and screen protector for my phone. The quality
            is top-notch and the prices are unbeatable!"
          </p>
        </div>

        <div className="testtomonial-card">
          <img
            src={logo}
            alt="people-img"
            className="img-fluid testtomonail-img"
          />
          <h2>Shyam Upadhaya</h2>
          <h4>Entrepreneur</h4>
          <p>
            "As a business owner, I rely on my mobile devices daily. Mobile Hub
            made sure I got the best deals on bulk purchases for my team. Their
            service is exceptional and the products are reliable."
          </p>
        </div>
      </div>
      
      <hr className="divider"></hr>
      <div className="signup-main"> 
      <div className="signup-section">
        <h2>Join Our Community</h2>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Mind Risers"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="MindRisers@gmail.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Putalisadak"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="remark">Remark:</label>
            <textarea
              className="form-control"
              id="remark"
              rows="4"
              placeholder="Share your thoughts..."
            ></textarea>
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <div className="login-prompt text-white">
          Already Registered?
          <Link className="login-button" to="/sign">
            Login
          </Link>
        </div>
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
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
