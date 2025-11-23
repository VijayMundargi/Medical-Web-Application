// src/components/displayProduct/DisplayProductsPage.jsx
import React, { useState } from "react";
import { useProducts } from "@/context/ProductsContext";
import ProductCard from "./ProductCard";
import ProductSearchBar from "./ProductSearchBar";
import ProductFilter from "./ProductFilter";

const DisplayProductsPage = () => {
  const { products } = useProducts();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === "" || p.category === selectedCategory)
    );
  });

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Product Catalog</h1>

      {/* Search + Filter */}
      <div className="flex gap-4">
        <ProductSearchBar search={search} setSearch={setSearch} />
        <ProductFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.length === 0 ? (
          <p className="text-gray-600">No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default DisplayProductsPage;
