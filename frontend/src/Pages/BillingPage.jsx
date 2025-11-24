import { useState } from "react";
import { useProducts } from "@/context/ProductsContext";
import { useCustomerContext } from "@/context/CustomerContext";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BillingPage = () => {
  const { products } = useProducts();
  const { addPurchase } = useCustomerContext();

  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [paymentMode, setPaymentMode] = useState("cash");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  const updateQuantity = (id, qty) =>
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const generateBill = () => {
    if (!customerName || !customerPhone) {
      alert("Enter customer name & phone");
      return;
    }

    addPurchase(customerPhone, totalAmount, paymentMode, customerName);

    const billWindow = window.open("", "Print Bill", "width=600,height=800");
    billWindow.document.write(`
      <html>
      <head>
        <title>Pharmacy Bill</title>
        <style>
          body { font-family: Arial; padding: 20px; }
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #ccc; padding: 8px; }
        </style>
      </head>
      <body>
        <h2>Medical Store - Invoice</h2>
        <p><strong>Customer:</strong> ${customerName}</p>
        <p><strong>Phone:</strong> ${customerPhone}</p>
        <p><strong>Payment:</strong> ${paymentMode}</p>

        <table>
          <thead>
            <tr><th>Medicine</th><th>Qty</th><th>Price</th><th>Total</th></tr>
          </thead>
          <tbody>
            ${cart
              .map(
                (i) => `
              <tr>
                <td>${i.name}</td>
                <td>${i.quantity}</td>
                <td>₹${i.price}</td>
                <td>₹${i.price * i.quantity}</td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>

        <h3>Total Amount: ₹${totalAmount}</h3>
      </body>
      </html>
    `);

    billWindow.document.close();
    billWindow.print();

    setCart([]);
  };

  return (
    <div className="p-6 space-y-6">

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Billing / POS</h1>

        <Input
          placeholder="Search Medicines..."
          className="w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Section - Customer + Products */}
        <div className="col-span-2 space-y-6">

          {/* Customer Info */}
          <Card className="shadow-md rounded-xl">
            <CardHeader>
              <CardTitle className="text-xl">Customer Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Customer Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              <Input
                placeholder="Phone Number"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
              />

              <select
                className="border p-2 rounded col-span-2"
                value={paymentMode}
                onChange={(e) => setPaymentMode(e.target.value)}
              >
                <option value="cash">Cash</option>
                <option value="upi">UPI</option>
                <option value="bank">Bank Transfer</option>
              </select>
            </CardContent>
          </Card>

          {/* Product List */}
          <Card className="rounded-xl shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">Available Medicines</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="border rounded-lg p-3 shadow-sm hover:shadow-md transition cursor-pointer"
                >
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <p className="text-sm text-gray-600">Price: ₹{p.price}</p>

                  <p
                    className={`mt-1 font-semibold ${
                      p.stock <= 10 ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    Stock: {p.stock}
                  </p>

                  <Button
                    onClick={() => addToCart(p)}
                    disabled={p.stock <= 0}
                    className="mt-3 w-full"
                  >
                    Add to Bill
                  </Button>
                </div>
              ))}

            </CardContent>
          </Card>

        </div>

        {/* Right Section – Bill */}
        <Card className="shadow-md rounded-xl">
          <CardHeader>
            <CardTitle className="text-xl">Bill Summary</CardTitle>
          </CardHeader>
          <CardContent>
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-6">No items added</p>
            ) : (
              <>
                {cart.map((i) => (
                  <div
                    key={i.id}
                    className="flex justify-between items-center border-b py-3"
                  >
                    <div>
                      <p className="font-semibold">{i.name}</p>
                      <p className="text-sm text-gray-500">
                        ₹{i.price} × {i.quantity}
                      </p>
                    </div>

                    <Input
                      type="number"
                      className="w-20"
                      value={i.quantity}
                      onChange={(e) =>
                        updateQuantity(i.id, +e.target.value || 1)
                      }
                    />

                    <Button
                      variant="destructive"
                      onClick={() => removeFromCart(i.id)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}

                <h2 className="text-2xl font-bold text-right mt-6">
                  Total: ₹{totalAmount}
                </h2>

                <Button className="mt-4 w-full" onClick={generateBill}>
                  Generate Bill
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BillingPage;
