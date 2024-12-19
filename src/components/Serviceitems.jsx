import React, { useContext, useEffect, useState } from "react";
import "./ServiceItems.css";
import blogContext from "../Context/blogs/BlogContext";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import EditProductModal from "./EditProductModal";
import { Link, useNavigate } from "react-router-dom";

const Serviceitems = () => {
  const context = useContext(blogContext);
  const {
    state: { cart },
    dispatch,
    allProduct,
    product,
    editProduct,
    deleteProduct,
  } = context;

  const [menuVisible, setMenuVisible] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = useNavigate();

  // Toggle menu visibility per product
  const toggleMenu = (id) => {
    setMenuVisible((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // Open modal for editing product
  const openEditModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  // Close modal
  const closeEditModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  // Save edited product
  const saveEdit = (updatedData) => {
    console.log("Product ID:", selectedProduct._id); // Debugging: Log the product ID
    console.log("Updated Data:", updatedData); // Debugging: Log the updated data
    editProduct(selectedProduct._id, updatedData);
    closeEditModal();
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    allProduct(); // Refresh the product list after deletion
  };

  // useEffect(() => {
  //   const authToken = localStorage.getItem("token");
  //   if (!authToken) {
  //     navigate("/sign");
  //   } else {
  //     allProduct();
  //   }
  // }, [navigate]);
    
  useEffect(()=>{
       allProduct();
  },allProduct)
   return (
    <div className="container">
      <h4 className="service-heading my-3">Our Brands</h4>
      <div className="row">
        {product &&
          product.map((e) => (
            <div className="col-md-3 mb-4" key={e._id}>
              <div className="card">
                <img
                  src={`http://localhost:5000/uploads/${e.images[0]}`}
                  className="card-img-top"
                  alt={e.title}
                />
                <div className="card-body">
                  <div className="three-dots">
                    <h5 className="card-title">{e.title}</h5>
                    {menuVisible[e._id] ? (
                      <AiOutlineClose
                        className="close-icon"
                        onClick={() => toggleMenu(e._id)}
                      ></AiOutlineClose>
                    ) : (
                      <BsThreeDots
                        className="dost-icon"
                        onClick={() => toggleMenu(e._id)}
                      ></BsThreeDots>
                    )}

                    {menuVisible[e._id] && (
                      <div className="menu-options">
                        <button
                          onClick={() => openEditModal(e)}
                          className="text-success"
                        >
                          Edit
                        </button>
                        <button onClick={() => handleDelete(e._id)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                  <p className="card-text">Rs. {e.price}</p>
                  {cart && cart.some((p) => p._id === e._id) ? (
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: e,
                        })
                      }
                    >
                      Remove from cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: e,
                        })
                      }
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
              {modalVisible &&
                selectedProduct &&
                selectedProduct._id === e._id && (
                  <EditProductModal
                    product={selectedProduct}
                    onClose={closeEditModal}
                    onSave={saveEdit}
                  />
                )}
            </div>
          ))}
      </div>
      <Link className="add-link" to="/addproduct">
        AddProduct
      </Link>
    </div>
  );
};

export default Serviceitems;
