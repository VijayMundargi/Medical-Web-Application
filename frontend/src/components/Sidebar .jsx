// src/components/Sidebar.jsx
import React from "react";
import { 
  Home, 
  Package, 
  FileText, 
  Clock, 
  Users, 
  Settings, 
  CreditCard,
  ShoppingBag
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "../context/AuthContext"; 

const Sidebar = () => {
  const location = useLocation();
  const { user, logout } = useAuth(); 

  // Common menu items (visible to all)
  const commonItems = [
    { name: "Dashboard", icon: Home, href: "/dashboard" },
    { name: "Products", icon: Package, href: "/products" },

    // ⭐ NEW: Display Products Page (Flipkart/Amazon style)
    { name: "View Products", icon: ShoppingBag, href: "/display-products" },

    { name: "Billing", icon: CreditCard, href: "/billing" }, 
    { name: "Order History", icon: FileText, href: "/order-history-report" },
    { name: "Cashier Shift Report", icon: Clock, href: "/cashier-shift-report" },
    { name: "Customer Lookup", icon: Users, href: "/customer-lookup" },
    { name: "Inventory", icon: Package, href: "/inventory" },
  ];

  // Admin-only menu items
  const adminItems = [
    { name: "Settings", icon: Settings, href: "/settings" },
  ];

  const menuItems = user?.role === "admin" ? [...commonItems, ...adminItems] : commonItems;

  return (
    <div className="h-screen w-64 bg-white border-r shadow-md flex flex-col">
      
      {/* Header */}
      <div className="h-16 flex items-center justify-center border-b">
        <h1 className="text-xl font-bold text-teal-600">Medical Store</h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center px-4 py-2 rounded-lg transition-colors",
                isActive
                  ? "bg-teal-600 text-white"
                  : "text-gray-700 hover:bg-teal-100 hover:text-teal-700"
              )}
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t">
        {user && (
          <div className="mb-3 text-sm text-gray-600">
            Logged in as:
            <span className="font-medium text-gray-800 ml-1">
              {user.name} ({user.role})
            </span>
          </div>
        )}
        <Button onClick={logout} className="w-full" variant="outline">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
