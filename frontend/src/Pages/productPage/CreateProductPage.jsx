import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

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

  // Add a new category
  const addNewCategory = () => {
    if (!newCategory.trim()) return;
    setCategories((prev) => [...prev, newCategory.trim()]);
    setProduct((prev) => ({ ...prev, category: newCategory.trim() }));
    setNewCategory("");
  };

  // Add product
  const handleAddProduct = () => {
    if (!product.name || !product.price || !product.category) {
      alert("Product name, price, and category are required!");
      return;
    }

    const newProduct = {
      ...product,
      id: Date.now(),
    };

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
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Create New Product</h1>

      <Card className="max-w-2xl mx-auto shadow">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">

          {/* Product Name */}
          <Input
            placeholder="Product Name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />

          {/* Category */}
          <div>
            <select
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
              className="w-full border rounded p-2"
            >
              <option value="">Select Category</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <div className="flex gap-2 mt-2">
              <Input
                placeholder="Add new category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <Button onClick={addNewCategory}>Add</Button>
            </div>
          </div>

          {/* Price + GST */}
          <Input
            type="number"
            placeholder="Base Price"
            value={product.price}
            onChange={(e) => handlePriceOrGstChange("price", e.target.value)}
          />

          <Input
            type="number"
            placeholder="GST %"
            value={product.gst}
            onChange={(e) => handlePriceOrGstChange("gst", e.target.value)}
          />

          <Input
            type="number"
            placeholder="Total Price (Auto)"
            value={product.totalPrice}
            readOnly
          />

          {/* HSN + Stock */}
          <Input
            placeholder="HSN Number"
            value={product.hsn}
            onChange={(e) => setProduct({ ...product, hsn: e.target.value })}
          />

          <Input
            type="number"
            placeholder="Stock Quantity"
            value={product.stock}
            onChange={(e) => setProduct({ ...product, stock: e.target.value })}
          />

          {/* Rack / Shelf / Storage */}
          <Input
            placeholder="Rack Number (Ex: R-12)"
            value={product.rackNumber}
            onChange={(e) =>
              setProduct({ ...product, rackNumber: e.target.value })
            }
          />

          <Input
            placeholder="Shelf Number (Ex: S-3)"
            value={product.shelfNumber}
            onChange={(e) =>
              setProduct({ ...product, shelfNumber: e.target.value })
            }
          />

          <Input
            placeholder="Storage Location (Cold / Dry / Normal)"
            value={product.storageLocation}
            onChange={(e) =>
              setProduct({ ...product, storageLocation: e.target.value })
            }
          />

          {/* EXPIRY DATE */}
          <Input
            type="date"
            value={product.expiryDate}
            onChange={(e) =>
              setProduct({ ...product, expiryDate: e.target.value })
            }
          />

          {/* ADD PRODUCT BUTTON */}
          <Button onClick={handleAddProduct} className="mt-4">
            Add Product
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateProductPage;
