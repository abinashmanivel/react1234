import React from "react";
import "../styles/CartModel.css";

function CartModel({ data, Display, setDisplay }) {
  let OriginalPrice = 0;
  let finalPrice = 0;
  return (
    <div id="cart-modal-content" style={{ display: Display ? "flex" : "none" }}>
      <div className="products">
        {data.map((item, index) => {
          OriginalPrice += Number(item.strickPrice);
          finalPrice += Number(item.finalPrice);
          return (
            <div className="product" key={index}>
              <img src={item.otherImages[0]} className="product-img" />
              <h2>{item.name}</h2>
              <p style={{ fontStyle: "italic" }}>{item.description}</p>
              <p>
                Rs. {item.finalPrice} <strike>{item.strickPrice}</strike>{" "}
                <span style={{ color: "red" }}>{item.discount}% OFF</span>
              </p>
            </div>
          );
        })}
      </div>
      <div className="prices-info">
        <h2>Total Items {data.length}</h2>
        <h2>Total Original Price {OriginalPrice}</h2>
        <h2>Total Discount {OriginalPrice - finalPrice}</h2>
        <h2>Final Price {finalPrice}</h2>
        <button>Buy</button>
      </div>
      <span
        className="close"
        onClick={() => {
          setDisplay(false);
        }}
      >
        &times;
      </span>
    </div>
  );
}

export default CartModel;
