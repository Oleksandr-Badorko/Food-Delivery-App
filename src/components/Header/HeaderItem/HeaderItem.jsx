import React from "react";
import "./HeaderItem.scss";

const HeaderItem = ({ name }) => {
  return (
    <li className="navlist__item">
      <a className="navlist__item-link" href="#">
        {name}
      </a>
    </li>
  );
};

export default HeaderItem;
