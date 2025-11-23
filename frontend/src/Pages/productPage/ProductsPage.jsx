import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ProductsPage = ({ products, setProducts }) => {
  const [editedProduct, setEditedProduct] = useState(null);

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleUpdate = () => {
    setProducts((prev) =>
      prev.map((p) => (p.id === editedProduct.id ? editedProduct : p))
    );
    setEditedProduct(null);
  };

  // Expiry Status Badge
  const getExpiryStatus = (date) => {
    if (!date) return { color: "text-gray-600", label: "N/A" };

    const today = new Date();
    const exp = new Date(date);

    if (exp < today) {
      return { color: "text-red-600 font-bold", label: "Expired" };
    }

    const diffDays = Math.ceil((exp - today) / (1000 * 60 * 60 * 24));

    if (diffDays <= 30) {
      return {
        color: "text-orange-600 font-semibold",
        label: `Expiring soon (${diffDays} days)`
      };
    }

    return { color: "text-green-600 font-semibold", label: `Valid (${diffDays} days)` };
  };

  return (
    <div className="flex flex-col gap-6 p-4">
      <h1 className="text-2xl font-bold">View / Manage Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {products.length === 0 && (
          <p className="text-gray-500 col-span-full">No products found.</p>
        )}

        {products.map((product) => {
          const expStatus = getExpiryStatus(product.expiryDate);

          return (
            <Card key={product.id} className="shadow p-4 bg-white">

              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {product.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-sm flex flex-col gap-1">
                <p><b>Barcode:</b> {product.barcode || "N/A"}</p>
                <p><b>Batch No:</b> {product.batchNumber || "N/A"}</p>
                <p><b>Manufacturer:</b> {product.manufacturer || "N/A"}</p>

                <p><b>Category:</b> {product.category}</p>
                <p><b>HSN:</b> {product.hsn}</p>
                <p><b>Price:</b> ₹{product.price}</p>
                <p><b>GST:</b> {product.gst}%</p>
                <p><b>Total Price:</b> ₹{product.totalPrice}</p>
                <p><b>Stock:</b> {product.stock}</p>

                <p><b>Rack No:</b> {product.rackNumber || "N/A"}</p>
                <p><b>Shelf No:</b> {product.shelfNumber || "N/A"}</p>
                <p><b>Storage:</b> {product.storageType || "Room Temp"}</p>
                <p><b>Medicine Type:</b> {product.medicineType || "N/A"}</p>

                <p className={expStatus.color}>
                  <b>Expiry:</b> {product.expiryDate || "N/A"} — {expStatus.label}
                </p>

                <div className="flex gap-2 mt-3">
                  <Button onClick={() => setEditedProduct(product)}>Edit</Button>
                  <Button variant="destructive" onClick={() => handleDelete(product.id)}>Delete</Button>
                </div>
              </CardContent>

            </Card>
          );
        })}
      </div>

      {/* Edit Dialog (unchanged) */}
      {editedProduct && (
        <Dialog open={true} onOpenChange={() => setEditedProduct(null)}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Edit Product</DialogTitle>
            </DialogHeader>

            <div className="flex flex-col gap-2 mt-2">

              <Input
                placeholder="Product Name"
                value={editedProduct.name}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, name: e.target.value })
                }
              />

              <Input
                placeholder="Barcode"
                value={editedProduct.barcode}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, barcode: e.target.value })
                }
              />

              <Input
                placeholder="Batch Number"
                value={editedProduct.batchNumber}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, batchNumber: e.target.value })
                }
              />

              <Input
                placeholder="Manufacturer"
                value={editedProduct.manufacturer}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, manufacturer: e.target.value })
                }
              />

              <Input
                placeholder="Medicine Type (tablet/syrup/injection)"
                value={editedProduct.medicineType}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, medicineType: e.target.value })
                }
              />

              <Input
                type="date"
                placeholder="Expiry Date"
                value={editedProduct.expiryDate || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, expiryDate: e.target.value })
                }
              />

              <Button className="mt-2" onClick={handleUpdate}>Update</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ProductsPage;
