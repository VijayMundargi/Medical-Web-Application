import { useState } from "react";
import { useProducts } from "@/context/ProductsContext";
import ProductsPage from "./ProductsPage";
import CreateProductPage from "./CreateProductPage";
import { Button } from "@/components/ui/button";

const ProductsManagementPage = () => {
  const { products, setProducts } = useProducts();
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
    setShowCreateForm(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products Management</h1>
        <Button onClick={() => setShowCreateForm((prev) => !prev)}>
          {showCreateForm ? "Back to Products" : "Add New Product"}
        </Button>
      </div>

      {showCreateForm ? (
        <CreateProductPage onAddProduct={handleAddProduct} />
      ) : (
        <ProductsPage products={products} setProducts={setProducts} />
      )}
    </div>
  );
};

export default ProductsManagementPage;
