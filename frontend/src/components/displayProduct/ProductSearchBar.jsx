// src/components/displayProduct/ProductSearchBar.jsx
import React from "react";

const ProductSearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      className="border p-2 rounded w-full"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default ProductSearchBar;
