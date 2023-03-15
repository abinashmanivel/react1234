import React, { useState } from "react";
import "../styles/Content.css";
function Content({ data, onClick }) {
  const [first, setFirst] = useState({});
  return (
    <div className="product-tile-holder">
      {data.map((item, index) => (
        <div
          className="indiv-tile-holder"
          key={index}
          id={index}
          onClick={() => {
            onClick(data[index]);
          }}
        >
          <img src={item.otherImages[0]} className="product-img" />
          <h2>{item.name}</h2>
          <p style={{ fontStyle: "italic" }}>{item.description}</p>
          <p>
            Rs. {item.finalPrice} <strike>{item.strickPrice}</strike>{" "}
            <span style={{ color: "red" }}>{item.discount}% OFF</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Content;
