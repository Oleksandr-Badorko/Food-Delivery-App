import React, { useState } from "react";
import "./Main.scss";
import Sidebar from "./Sidebar/Sidebar";
import Products from "./Products/Products";
import Cart from "../Cart/Cart";

const Main = () => {
  const [selectedShop, setSelectedShop] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false); 

  const handleShopSelection = (shop) => {
    setSelectedShop(shop);
    console.log("Selected Shop:", shop);
  };

  return (
    <div className="main">
      <Sidebar onShopSelect={handleShopSelection} />
      <Products selectedShop={selectedShop} />
      {isCartOpen && <Cart />}
    </div>
  );
};

export default Main;
