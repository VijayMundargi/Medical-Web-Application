import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useProducts } from "@/context/ProductsContext";

const Inventory = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (categoryFilter ? p.category === categoryFilter : true)
  );

  return (
    <div className="p-6 flex-1 flex flex-col bg-gray-50">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search Product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded px-2 py-1"
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Card className="shadow flex-1">
        <CardHeader>
          <CardTitle>Inventory / Stock Management</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2">Image</th>
                <th className="py-2">Name</th>
                <th className="py-2">Category</th>
                <th className="py-2">Stock</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((p) => (
                <tr
                  key={p.id}
                  className={`border-b ${p.stock <= 10 ? "bg-red-100" : ""}`}
                >
                  <td className="py-2">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-12 w-12 object-cover rounded-md"
                    />
                  </td>
                  <td className="py-2">{p.name}</td>
                  <td className="py-2">{p.category}</td>
                  <td className="py-2 font-bold">{p.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Inventory;
