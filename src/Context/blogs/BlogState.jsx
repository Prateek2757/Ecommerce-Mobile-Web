import { useEffect, useReducer,useState } from "react";
import blogContext from "./BlogContext";
import { cartReducer } from "./Reducer";
import axios from 'axios';

const BlogState = (props) => {
  
const [product,setProduct] = useState([])

const [state, dispatch] =useReducer(cartReducer, 
    {
        products: product,
        cart:[]
    }
)



console.log("this is our product from backend",product);
const allProduct = async()=>{
  const  response= await  fetch("http://localhost:5000/api/product/gethomeproduct",{
      method : "GET",
      headers:{
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
      }
  })
  let parseData= await response.json()
  console.log(parseData);
  setProduct(parseData)
}

const editProduct = async (selectedProductId, updatedData) => {
  const { title, description, price, instock } = updatedData;
  try {
    const response = await axios.put(`http://localhost:5000/api/product/updateproduct/${selectedProductId}`, 
      { title, description, price, instock }, {
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'), // Use token for authentication
      },
    });

    console.log('Product updated successfully:', response.data);
    
    // After successful update, reflect changes in the state
    setProduct(prevProducts => 
      prevProducts.map(product =>
        product._id === selectedProductId ? { ...product, ...updatedData } : product
      )
    );
  } catch (error) {
    console.error('Error updating product:', error.response ? error.response.data : error.message);
  }
};

const deleteProduct = async (id) => {
  try {
      const response = await fetch(`http://localhost:5000/api/product/deleteproduct/${id}`, {
          method: 'DELETE',
          headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem('token')
          },
      });
      if (response.ok) {
          console.log("Work item deleted successfully.");
          // Update the state to remove the deleted item from the UI
          allProduct(); // Fetch the updated list of products
      } else {
          console.error("Failed to delete the work item.");
      }
  } catch (error) {
      console.error("An error occurred while deleting the work item:", error);
  }
};

  return (
    <blogContext.Provider value={{ state, dispatch , allProduct ,product, setProduct,editProduct,deleteProduct}}>
      {props.children}
    </blogContext.Provider>
  );
};

export default BlogState;
