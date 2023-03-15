import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Content from "./Content";
import Filters from "./Filters";
import NavBar from "./NavBar";
import ProductModel from "./ProductModel";
import Sorting from "./Sorting";

import data from "../data";
import CartModel from "./CartModel";

const App = () => {
  let dataCopy = [...data];
  const [cartNumber, setCartNumber] = useState(0);
  const [cartData, setCartData] = useState([]);
  const [cartDisplay, setCartDisplay] = useState(false);
  const [input, setInput] = useState("");
  const [sortId, setSortId] = useState(0);
  const [Data, SetData] = useState(dataCopy);
  const [filter, setFilter] = useState({
    gender: "M",
    white: false,
    folded: false,
  });
  const [modelData, setModelData] = useState(null);
  useEffect(() => {
    if (sortId == 0) {
      dataCopy = [...data];
    } else if (sortId == 1) {
      dataCopy.sort((a, b) => a.finalPrice - b.finalPrice);
    } else {
      dataCopy.sort((a, b) => b.discount - a.discount);
    }
    let filteredData = dataCopy.filter((val) => {
      return (
        (val.name.toLowerCase().includes(input.toLowerCase()) ||
          val.description.toLowerCase().includes(input.toLowerCase())) &&
        val.gender.toUpperCase() == filter.gender.toUpperCase() &&
        (filter.white ? val.cat == "W" : true) &&
        (filter.folded ? val.folded == "Y" : true)
      );
    });
    SetData(filteredData);
  }, [input, sortId, filter.folded, filter.gender, filter.white]);

  useEffect(() => {
    setCartNumber(cartData.length);
  }, [cartData]);

  return (
    <div id="main">
      <NavBar
        cartNumber={cartNumber}
        setInput={setInput}
        showCart={setCartDisplay}
      />
      <div className="row">
        <Filters filter={filter} setFilter={setFilter} />
        <div className="col">
          <Sorting setSortId={setSortId} />
          <Content data={Data} onClick={setModelData} />
          <ProductModel
            item={modelData}
            setDisplay={setModelData}
            prevCart={cartData}
            setCart={setCartData}
          />
          <CartModel
            data={cartData}
            Display={cartDisplay}
            setDisplay={setCartDisplay}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
