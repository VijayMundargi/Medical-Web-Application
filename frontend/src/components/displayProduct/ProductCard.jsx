import React from "react";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product, expiryStatus, onEdit, onDelete }) => {
  // Color logic for expiry
  const expiryColors = {
    expired: "bg-red-100 text-red-700",
    soon: "bg-yellow-100 text-yellow-700",
    good: "bg-green-100 text-green-700",
  };

  // Stock color logic
  const stockColor =
    product.stock < 10
      ? "text-red-600 font-bold"
      : product.stock < 20
      ? "text-orange-600 font-bold"
      : "text-green-700 font-semibold";

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-xl transition bg-white flex flex-col gap-3">

      {/* Product Name */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">{product.name}</h2>

        {/* Expiry Badge */}
        <span className={`px-3 py-1 rounded-full text-sm ${expiryColors[expiryStatus]}`}>
          {expiryStatus === "expired"
            ? "Expired"
            : expiryStatus === "soon"
            ? "Expiring Soon"
            : "Valid"}
        </span>
      </div>

      {/* Price */}
      <p className="text-xl font-bold text-green-700">₹{product.totalPrice}</p>

      {/* Category */}
      <p className="text-gray-600 text-sm">{product.category}</p>

      {/* Details */}
      <div className="space-y-1 text-sm">
        <p><b>Stock:</b> <span className={stockColor}>{product.stock}</span></p>
        <p><b>Rack:</b> {product.rackNumber || "N/A"}</p>
        <p><b>Shelf:</b> {product.shelfNumber || "N/A"}</p>
        <p><b>Storage:</b> {product.storageLocation || "Normal"}</p>
        <p><b>Expiry:</b> {product.expiryDate || "N/A"}</p>
        <p><b>HSN:</b> {product.hsn || "N/A"}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-2">
        <Button className="w-full" onClick={onEdit}>Edit</Button>
        <Button className="w-full" variant="destructive" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
