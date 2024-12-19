import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import blogContext from "../Context/blogs/BlogContext";
import "./Navbar.css";
import SearchItems from "./Searchitems";

const Navbar = (props) => {
  const context = useContext(blogContext);
  const {
    state: { cart },
    product,
  } = context;
  console.log(product);

  const [title, setTitle] = useState("");
  const [results, setResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {

    // const authToken = localStorage.getItem('token');
    // if (!authToken) {
    //     navigate('/sign'); // Redirect to login if token is not found
    //   }
    // Filter the product list based on the title entered
    const filteredProduct = product?.filter((prod) =>
      title ? prod.title.toLowerCase() === title.toLowerCase() : true
    );
    console.log(product);

    setResults(filteredProduct);
    console.log("Filtered Products", filteredProduct);
  }, [title, product]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value); // Update the search input value
  };

  const openModal = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setModalVisible(true); // Display the modal
  };

  const closeModal = () => {
    setModalVisible(false); // Close the modal
  };
   const navigate = useNavigate()
   const handleLogout = ()=>{
    localStorage.removeItem('token')
     navigate('/sign')
   }

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
            {localStorage.getItem("token") ? (
              <li className="nav-item" onClick={handleLogout} >
                <Link className="nav-link" to="#">
                  SignOut
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/sign">
                  SignIn
                </Link>
              </li>
            )}
          </ul>

          <form className="d-flex" onSubmit={openModal}>
            <input
              className="form-control me-2"
              name="title"
              value={title}
              onChange={handleTitleChange}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              onClick={openModal}
              type="submit"
            >
              Search
            </button>
          </form>
          {modalVisible && (
            <SearchItems results={results} onClose={closeModal} />
          )}

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
