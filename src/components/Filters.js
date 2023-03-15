import React from "react";
import "../styles/Filters.css";
import data from "../data";
function Filters({ filter, setFilter }) {
  return (
    <div className="filter-holder">
      <h3>Gender</h3>
      <input
        type="radio"
        name="gender"
        value="M"
        id="Male"
        checked={filter.gender == "M"}
        onChange={() => {
          setFilter({ ...filter, gender: "M" });
        }}
      />
      <label htmlFor="Male">MEN</label>
      <br />
      <input
        type="radio"
        name="gender"
        value="F"
        id="Female"
        checked={filter.gender == "F"}
        onChange={() => {
          setFilter({ ...filter, gender: "F" });
        }}
      />
      <label htmlFor="Female">WOMEN</label>
      <h3>Categories:-</h3>
      <input
        type="checkbox"
        name="White"
        id="White"
        value="White"
        onChange={(e) => {
          setFilter({ ...filter, white: e.target.checked });
        }}
      />
      <label htmlFor="White">White</label>
      <br />
      <input
        type="checkbox"
        name="Folded"
        id="Folded"
        value="Folded Sleeves"
        onChange={(e) => {
          setFilter({ ...filter, folded: e.target.checked });
        }}
      />
      <label htmlFor="Folded">Folded Sleeves</label>
    </div>
  );
}

export default Filters;
