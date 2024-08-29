import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import "./Home.css";
import logo from "../assets/mobilehub.jpg";

function Home() {
  return (
    <div className="home-main">
      <Carousel />
      <hr className="text-warning" ></hr>

      <div className="content-section">
        <div className="img-container">
          <img src={logo} alt="Mobile Hub" className="img-fluid" />
        </div>
        <div className="about-us">
          <h2>About Us</h2>
          <p>
            Welcome to Mobile Hub! We are dedicated to providing the latest and greatest in mobile technology. Our mission is to offer high-quality products and exceptional customer service. Whether you're looking for a new phone, accessories, or support, we've got you covered!
          </p>
        </div>
      </div>
      <hr className="text-warning" ></hr>
      <div className="signup-section">
        <h2>Sign Up Form</h2>
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
            <label htmlFor="email">Email:</label>
            <input type="text" id="loaction" name="loaction" placeholder="Putalisadak" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="••••••••" required />
          </div>
          <div className="form-group">
          <label htmlFor="remark">Remark:</label>
          <textarea className="form-control" id="form-remark" rows="4"></textarea>
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <div>Already Registerd?</div>
        <Link className="login-button" to="/sign" >Login</Link>
      </div>
      <hr className="text-warning" ></hr>
      <footer className="footer">
        <p>© 2024 Mobile Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
