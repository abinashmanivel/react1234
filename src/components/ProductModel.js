import React, { useState } from "react";
import "../styles/ProductModel.css";
function ProductModel({ item, setDisplay, prevCart, setCart }) {
  function updateCart() {
    setCart([...prevCart, item]);
  }
  return (
    <div id="product-modal" style={{ display: item ? "flex" : "none" }}>
      <div className="img-box">
        {item?.otherImages.map((val, idx) => {
          return <img src={val} className="model-img" key={idx} />;
        })}
      </div>
      <div className="info">
        <h2>{item?.name}</h2>
        <p style={{ fontStyle: "italic" }}>{item?.description}</p>
        <p>Rs. {item?.finalPrice}</p>
        <p>
          <strike> Rs. {item?.strickPrice}</strike>
        </p>
        <p style={{ color: "red" }}>{item?.discount}%</p>
        <h3>Size Chart</h3>
        <div className="size-option">
          {item?.productSize.split(", ").map((val, idx) => {
            return (
              <span className="size" key={idx}>
                {val}
              </span>
            );
          })}
          <button className="btn" onClick={updateCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <span
        className="close"
        onClick={() => {
          setDisplay(null);
        }}
      >
        &times;
      </span>
    </div>
  );
}

export default ProductModel;
