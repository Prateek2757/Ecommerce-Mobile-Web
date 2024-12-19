import React, { useContext } from "react";
import { MdDelete } from "react-icons/md"; // Import MdDelete icon
import blogContext from "../Context/blogs/BlogContext";
import coffee from "../assets/lamp.jpg";
import "./CartItems.css"; // Import the CSS file for styling

function CartItems() {
  const context = useContext(blogContext);
  const {
    state: { cart },
    dispatch
  } = context;

  console.log(cart);
  
   console.log("aaaa");
   
  // Calculate total price
  const Total = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  return (
    <>
    <h1>hii</h1>
      <div className="container home">
        <div className="productContainer-cart">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <h3>Your cart is empty</h3>
              <p>Add some items to your cart to see them here.</p>
            </div>
          ) : (
            <>
              <ul className="list-group">
                {cart.map((prod) => (
                  <li className="list-group-item cart-item" key={prod.id}>
                    <div className="row align-items-center">
                      <div className="col-md-2">
                      <img src={`http://localhost:5000/uploads/${prod.images}`} alt={prod.name} className='img-fluid rounded'></img>
                      </div>
                      <div className="col-md-3 cart-item-details">
                        <h5 className="cart-item-title">{prod.title}</h5>
                        <p className="cart-item-price">
                          Rs.{prod.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="col-md-2">
                        <select
                          value={prod.qty}
                          onChange={(e) =>
                            dispatch({
                              type: "CHANGE_CART_QTY",
                              payload: {
                                _id: prod._id,
                                qty: Number(e.target.value),
                              },
                            })
                          }
                          className="form-control cart-item-select"
                        >
                          {[...Array(prod.instock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-3 cart-item-total">
                        <p>
                          Total: Rs.{(prod.price * prod.qty).toFixed(2)}
                        </p>
                      </div>
                      <div className="col-md-2">
                        <button
                          type="button"
                          className="btn btn-light cart-item-delete"
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="filter summary">
                <div className="summary-details">
                  <h4>Total items: ({cart.length})</h4>
                  <h4>Total: Rs.{Total.toFixed(2)}</h4>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CartItems;
