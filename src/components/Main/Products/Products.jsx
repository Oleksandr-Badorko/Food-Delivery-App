import React, { useEffect, useState } from "react";
import "./Products.scss";
import ProductsItem from "./ProductsItem/ProductsItem";

import axios from "axios";

const Products = ({ selectedShop }) => {
  const [productsData, setProductsData] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
  
    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  
    console.log("Cart after adding item:", cart); 
  };
  
  useEffect(() => {
    console.log("Updated Cart:", cart);
  }, [cart]);


  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/get-items")
      .then((res) => {
        if (res.data.items[selectedShop]) {
          setProductsData(res.data.items[selectedShop]);
        } else {
          setProductsData([]);
        }
      })
      .catch((error) => {
        console.error("Error loading mock data:", error);
      });
  }, [selectedShop]);

  return (
    <div className="products">
      {productsData.map((product) => (
        <ProductsItem
          key={product.id} 
          img={product.img}
          name={product.name}
          price={product.price}
          addToCart={addToCart} 
          product={product} 
        />
      ))}
    </div>
  );
};

export default Products;