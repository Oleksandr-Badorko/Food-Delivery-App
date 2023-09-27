import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./Header.scss";
import HeaderItem from "./HeaderItem/HeaderItem";

const Header = () => {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    fetch("/mock/nav.json")
      .then((res) => res.json())
      .then((data) => setNavData(data.nav))
      .catch((error) => {
        console.error("Error loading mock data:", error);
      });
  }, []);

  return (
    <header className="header">
      <a href="#" className="header__logo">
        <img src="/assets/imgs/logo/3272764.png" alt="Header logo" />
      </a>
      <ul className="navlist">
        {navData &&
          navData.map((item, index) => (
            <HeaderItem key={index} name={item.name}></HeaderItem>
          ))}
      </ul>
      <div className="cartIcon">
        <Link to="/cart">
          <ShoppingCartIcon id="cart-icon"></ShoppingCartIcon>
        </Link>
      </div>
    </header>
  );
};

export default Header;
