import { useState, useEffect, useReducer } from "react";
import blogContext from "./BlogContext";
import { cartReducer } from "./Reducer";

const BlogState = (props) => {
  const products = [
    {
      id: "12as",
      title: "coffee",
      description: "Himalyan coffe from Nepal",
      price: 150,
      inStock: 5,
    },
    {
      id: "112as",
      title: "tea",
      description: "Himalyan tea from Nepal",
      price: 100,
      inStock: 6,
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  //  console.log(article);
  // const fetchData = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apiKey}`;
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   console.log(parseData);
  //   setArticle(parseData.articles);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <blogContext.Provider value={{ state, dispatch }}>
      {props.children}
    </blogContext.Provider>
  );
};
export default BlogState;
