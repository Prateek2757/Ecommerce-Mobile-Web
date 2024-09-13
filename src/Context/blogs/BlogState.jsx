import { useEffect, useReducer } from "react";
import blogContext from "./BlogContext";
import { cartReducer } from "./Reducer";
import axios from 'axios';

const BlogState = (props) => {
  // Use the useReducer hook for managing the state
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],  // Initial empty array for products
    cart: [], // Cart is initially empty
  });

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/product/getall', {
          headers: {
            "auth-token": localStorage.getItem('token') // Added headers object for the token
          }
        });
        const fetchedProducts = response.data;
        
        // Directly set the products without modifying the reducer
        // We call 'dispatch' with an anonymous function to modify state directly
        dispatch((prevState) => ({
          ...prevState,
          products: fetchedProducts,
        }));

        props.showAlert("Products loaded successfully", "success"); // Assuming showAlert is passed via props
      } catch (error) {
        console.error(error);
        props.showAlert("Failed to load products", "danger");
      }
    };

    fetchProducts(); // Call the async function
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <blogContext.Provider value={{ state, dispatch }}>
      {props.children}
    </blogContext.Provider>
  );
};

export default BlogState;
