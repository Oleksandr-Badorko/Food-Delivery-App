import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Sidebar.scss";
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = ({ onShopSelect }) => {
  const [sidebarData, setSidebarData] = useState([]);

  useEffect(() => {
    fetch("/mock/sidebar.json")
      .then((res) => res.json())
      .then((data) => setSidebarData(data.sidebar))
      .catch((error) => {
        console.error("Error loading mock data:", error);
      });
  }, []);

  const handleShopClick = (itemData) => {
    if (onShopSelect) {
      onShopSelect(itemData.data); 
    }
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar__title">Shops:</h2>
      <ul className="list">
        {sidebarData.map((item, index) => (
          <SidebarItem
            key={index}
            img={item.img}
            name={item.name}
            data={item.data}
            onClick={() => handleShopClick(item)}
          />
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  onShopSelect: PropTypes.func.isRequired,
};

export default Sidebar;