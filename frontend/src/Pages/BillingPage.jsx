import { useState } from "react";
import { useProducts } from "@/context/ProductsContext";
import { useCustomerContext } from "@/context/CustomerContext";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useOrderContext } from "@/context/OrderContext";

const BillingPage = () => {
  const { products } = useProducts();
  const { addPurchase } = useCustomerContext();

  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [paymentMode, setPaymentMode] = useState("cash");

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

    // 🔥 Store purchase + auto-create customer if needed
    addPurchase(customerPhone, totalAmount, paymentMode, customerName);

    // 🧾 Generate Invoice Window
    const billWindow = window.open("", "Print Bill", "width=600,height=800");

    billWindow.document.write(`
      <html>
      <head>
        <title>Pharmacy Bill</title>
        <style>
          body { font-family: Arial; padding: 20px; }
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid black; padding: 8px; }
        </style>
      </head>
      <body>
        <h2>Medical Store</h2>
        <p><strong>Customer:</strong> ${customerName}</p>
        <p><strong>Phone:</strong> ${customerPhone}</p>
        <p><strong>Payment Mode:</strong> ${paymentMode}</p>

        <table>
          <thead>
            <tr><th>Product</th><th>Qty</th><th>Price</th><th>Total</th></tr>
          </thead>
          <tbody>
            ${cart
              .map(
                (i) =>
                  `<tr>
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

    // Reset cart
    setCart([]);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Billing / Sales</h1>

      {/* Customer Info */}
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Customer Information</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
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
            className="border p-2 rounded"
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
          >
            <option value="cash">Cash</option>
            <option value="upi">UPI</option>
            <option value="bank">Bank Transfer</option>
          </select>
        </CardContent>
      </Card>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <Card key={p.id} className="cursor-pointer shadow">
            <CardHeader>
              <CardTitle>{p.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Price: ₹{p.price}</p>
              <p>Stock: {p.stock}</p>
              <Button
                onClick={() => addToCart(p)}
                disabled={p.stock <= 0}
                className="mt-2"
              >
                Add to Bill
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bill */}
      <Card>
        <CardHeader>
          <CardTitle>Bill</CardTitle>
        </CardHeader>
        <CardContent>
          {cart.length === 0 ? (
            <p>No items added</p>
          ) : (
            <>
              {cart.map((i) => (
                <div
                  key={i.id}
                  className="flex justify-between border-b py-2 items-center"
                >
                  <p>{i.name}</p>
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
              <h2 className="text-xl font-bold mt-4">
                Total: ₹{totalAmount}
              </h2>
              <Button className="mt-4" onClick={generateBill}>
                Generate Bill
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingPage;
