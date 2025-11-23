import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import CustomerLookup from "./Pages/Customer Mangement/CustomerLookup";
import CashierShiftReportPage from "./Pages/cashier/shift report/CashierShiftReportPage";
import OrderHistory from "./Pages/cashier/order/OrderHistoryPage";
import DashboardPage from "./Pages/Dashboard";
import InventoryPage from "./Pages/inventory/Inventory.jsx";
import ProductsManagementPage from "./Pages/productPage/ProductsManagementPage";
import SettingsPage from "./Pages/settings/SettingsPage"; 
 import DisplayProductsPage from "./components/displayProduct/DisplayProductsPage";
import Login from "./Pages/Login";
import BillingPage from "./Pages/BillingPage.jsx";
// Layout
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <Routes>
      {/* Login route (no sidebar or layout) */}
      <Route path="/login" element={<Login />} />
      
      {/* All other routes use Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="display-products" element={<DisplayProductsPage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="products" element={<ProductsManagementPage />} />
        <Route path="/customer-lookup" element={<CustomerLookup />} />
         <Route path="/billing" element={<BillingPage />} />
        
        <Route path="cashier-shift-report" element={<CashierShiftReportPage />} />
        <Route path="order-history-report" element={<OrderHistory />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
