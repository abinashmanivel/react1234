import React from "react";
function Sorting({ setSortId }) {
  return (
    <div className="sort-holder">
      <span>sort by:- </span>
      <select
        onChange={(e) => {
          setSortId(e.target.value);
        }}
      >
        <option value="0">What's New</option>
        <option value="2">Better Discount</option>
        <option value="1">Price low to high</option>
      </select>
    </div>
  );
}

export default Sorting;
