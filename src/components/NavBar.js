import React, { useState } from "react";
import icon from "../icon.jpeg";
import cartIcon from "../shopping-cart-solid.svg";
import "../styles/NavBar.css";

function NavBar({ cartNumber, setInput, showCart }) {
  return (
    <nav className="nav">
      <div className="first">
        <div className="icon-holder">
          <img src={icon} className="icon" />
        </div>
        <a href="#" className="nav-link">
          MEN
        </a>
        <a href="#" className="nav-link">
          WOMEN
        </a>
        <a href="#" className="nav-link">
          KID
        </a>
      </div>
      <input
        type="text"
        className="search"
        placeholder="search your product here"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => {
          // eslint-disable-next-line no-unused-expressions
          e.key == "Enter";
        }}
      />
      <div
        className="cart-holder"
        onClick={() => {
          showCart(true);
        }}
      >
        <div className="cart-list-length">{cartNumber}</div>
        <img src={cartIcon} />
      </div>
    </nav>
  );
}

export default NavBar;
