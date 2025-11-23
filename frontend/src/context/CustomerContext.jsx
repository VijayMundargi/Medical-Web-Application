import { createContext, useContext, useState } from "react";

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);

  const addPurchase = (phone, amount, paymentMode, name = "New Customer") => {
    setCustomers((prev) => {
      const existing = prev.find((c) => c.phone === phone);

      if (existing) {
        return prev.map((c) =>
          c.phone === phone
            ? {
                ...c,
                totalSpent: (c.totalSpent || 0) + amount,
                totalOrders: (c.totalOrders || 0) + 1,
                purchaseHistory: [
                  ...c.purchaseHistory,
                  {
                    id: Date.now(),
                    date: new Date().toISOString().slice(0, 10),
                    amount,
                    paymentMode
                  }
                ]
              }
            : c
        );
      }

      // New customer
      const newCustomer = {
        id: Date.now(),
        name,
        email: "",
        phone,
        totalOrders: 1,
        totalSpent: amount,
        purchaseHistory: [
          {
            id: Date.now(),
            date: new Date().toISOString().slice(0, 10),
            amount,
            paymentMode
          }
        ]
      };

      return [...prev, newCustomer];
    });
  };

  return (
    <CustomerContext.Provider value={{ customers, setCustomers, addPurchase }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => useContext(CustomerContext);
