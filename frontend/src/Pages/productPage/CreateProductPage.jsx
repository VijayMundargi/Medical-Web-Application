import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CreateProductPage = ({ onAddProduct }) => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    gst: "",
    totalPrice: "",
    hsn: "",
    stock: "",
    rackNumber: "",
    shelfNumber: "",
    storageLocation: "",
    expiryDate: "",
  });

  // Auto-calc total price
  const handlePriceOrGstChange = (field, value) => {
    const updated = { ...product, [field]: value };

    const price = parseFloat(updated.price) || 0;
    const gst = parseFloat(updated.gst) || 0;

    updated.totalPrice = price + (price * gst) / 100;
    setProduct(updated);
  };

  // Add category
  const addNewCategory = () => {
    if (!newCategory.trim()) return;
    setCategories((prev) => [...prev, newCategory.trim()]);
    setProduct((prev) => ({ ...prev, category: newCategory.trim() }));
    setNewCategory("");
  };

  // Add product handler
  const handleAddProduct = () => {
    if (!product.name || !product.price || !product.category) {
      alert("Product name, price, and category are required!");
      return;
    }

    const newProduct = { ...product, id: Date.now() };

    onAddProduct(newProduct);

    // Reset
    setProduct({
      name: "",
      category: "",
      price: "",
      gst: "",
      totalPrice: "",
      hsn: "",
      stock: "",
      rackNumber: "",
      shelfNumber: "",
      storageLocation: "",
      expiryDate: "",
    });
    setNewCategory("");
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Create New Product</h1>

      <Card className="max-w-5xl mx-auto shadow-xl rounded-2xl border">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Product Details</CardTitle>
        </CardHeader>

        <CardContent>
          {/* GRID WRAPPER */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Product Name */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Product Name</label>
              <Input
                placeholder="E.g., Paracetamol 500mg"
                value={product.name}
                onChange={(e) => setProduct({ ...product, name: e.target.value })}
              />
            </div>

            {/* Category Select */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Category</label>
              <select
                value={product.category}
                onChange={(e) => setProduct({ ...product, category: e.target.value })}
                className="border p-2 rounded"
              >
                <option value="">Select Category</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              {/* Add Category */}
              <div className="flex gap-2 mt-2">
                <Input
                  placeholder="Add new category"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                />
                <Button onClick={addNewCategory}>Add</Button>
              </div>
            </div>

            {/* Base Price */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Base Price</label>
              <Input
                type="number"
                placeholder="0.00"
                value={product.price}
                onChange={(e) => handlePriceOrGstChange("price", e.target.value)}
              />
            </div>

            {/* GST */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">GST (%)</label>
              <Input
                type="number"
                placeholder="0"
                value={product.gst}
                onChange={(e) => handlePriceOrGstChange("gst", e.target.value)}
              />
            </div>

            {/* Total Price */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Total Price (Auto)</label>
              <Input
                readOnly
                className="bg-gray-100 font-semibold"
                value={product.totalPrice}
              />
            </div>

            {/* HSN */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">HSN Number</label>
              <Input
                placeholder="Enter HSN number"
                value={product.hsn}
                onChange={(e) => setProduct({ ...product, hsn: e.target.value })}
              />
            </div>

            {/* Stock */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Stock Quantity</label>
              <Input
                type="number"
                placeholder="0"
                value={product.stock}
                onChange={(e) => setProduct({ ...product, stock: e.target.value })}
              />
            </div>

            {/* Rack Number */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Rack Number</label>
              <Input
                placeholder="Example: R-12"
                value={product.rackNumber}
                onChange={(e) => setProduct({ ...product, rackNumber: e.target.value })}
              />
            </div>

            {/* Shelf Number */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Shelf Number</label>
              <Input
                placeholder="Example: S-3"
                value={product.shelfNumber}
                onChange={(e) => setProduct({ ...product, shelfNumber: e.target.value })}
              />
            </div>

            {/* Storage Location */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Storage Location</label>
              <select
                className="border p-2 rounded"
                value={product.storageLocation}
                onChange={(e) =>
                  setProduct({ ...product, storageLocation: e.target.value })
                }
              >
                <option value="">Select</option>
                <option value="Cold">Cold</option>
                <option value="Dry">Dry</option>
                <option value="Normal">Normal</option>
              </select>
            </div>

            {/* Expiry */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Expiry Date</label>
              <Input
                type="date"
                value={product.expiryDate}
                onChange={(e) =>
                  setProduct({ ...product, expiryDate: e.target.value })
                }
              />
            </div>
          </div>

          {/* Add Product Button */}
          <Button className="w-full mt-8 py-3 text-lg" onClick={handleAddProduct}>
            Add Product
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateProductPage;
