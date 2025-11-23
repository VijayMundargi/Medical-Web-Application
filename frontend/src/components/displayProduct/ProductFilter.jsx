// src/components/displayProduct/ProductFilter.jsx
import React from "react";

const ProductFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <select
      className="border p-2 rounded w-full"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((cat, idx) => (
        <option key={idx} value={cat}>{cat}</option>
      ))}
    </select>
  );
};

export default ProductFilter;
