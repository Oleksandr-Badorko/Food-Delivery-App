import React from "react";
import "./SidebarItem.scss";

const SidebarItem = ({ img, descr, name, data, onClick }) => {
  const handleShopClick = (event) => {
    event.preventDefault();
    onClick(data, event); // Pass both data and event objects to the onClick function
  };

  return (
    <li className="list__item">
      <a href="#" className="list__item-link" data-shop={data} onClick={handleShopClick}>
        <img className="icon" src={img} alt={descr} />
        {name}
      </a>
    </li>
  );
};

export default SidebarItem;