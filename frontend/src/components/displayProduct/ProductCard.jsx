// src/components/displayProduct/ProductCard.jsx
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg bg-white transition">
      
      <h2 className="font-semibold text-xl">{product.name}</h2>
      <p className="text-gray-600 text-sm">{product.category}</p>

      <div className="mt-2 space-y-1">
        <p className="text-green-700 text-lg font-bold">₹{product.totalPrice}</p>
        <p className="text-gray-700 text-sm">Stock: {product.stock}</p>

        <p className="text-sm"><b>Rack:</b> {product.rackNumber || "N/A"}</p>
        <p className="text-sm"><b>Shelf:</b> {product.shelfNumber || "N/A"}</p>
        <p className="text-sm"><b>Storage:</b> {product.storageType || "Room Temp"}</p>
        <p className="text-sm">
          <b>Expiry:</b> {product.expiryDate || "N/A"}
        </p>
      </div>

    </div>
  );
};

export default ProductCard;
