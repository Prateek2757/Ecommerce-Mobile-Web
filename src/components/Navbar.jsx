import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import blogContext from "../Context/blogs/BlogContext";
import "./Navbar.css";

const Navbar = (props) => {
  const context = useContext(blogContext);
  const {
    state: { cart },
  } = context;

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand title" to="/">
          Mobile Hub
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sign">
                SignIn
              </Link>
            </li>
          </ul>
          
          <Link to="/cart">
            <button type="button" className="btn cart-button position-relative">
              <FaShoppingCart />
              {cart.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                  <span className="visually-hidden">items in cart</span>
                </span>
              )}
            </button>
          </Link>

          <button className="btn toggle-mode ms-2" onClick={props.toggleMode}>
            {props.text}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
