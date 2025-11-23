import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Dummy auth state (replace with proper auth/context)
const currentUser = { role: "admin", email: "admin@pharma.com" };

const SettingsPage = () => {
  // Store settings
  const [settings, setSettings] = useState({
    storeName: "Medical Store",
    email: "admin@pharma.com",
    phone: "9876543210",
    address: "123, Main Street, City",
  });

  // Admin password
  const [adminPassword, setAdminPassword] = useState("password123");
  const [newAdminPassword, setNewAdminPassword] = useState("");

  // Manager creation
  const [manager, setManager] = useState({ email: "", password: "" });
  const [managersList, setManagersList] = useState([]);

  // Redirect non-admins (you can replace this with React Router navigate)
  useEffect(() => {
    if (currentUser.role !== "admin") {
      alert("Unauthorized access! Only admin can view this page.");
      // window.location.href = "/"; // redirect to home
    }
  }, []);

  const handleSettingsChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveSettings = () => {
    console.log("Saved Settings:", settings);
    alert("Settings saved successfully!");
  };

  const handleAdminPasswordChange = () => {
    if (newAdminPassword.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    setAdminPassword(newAdminPassword);
    setNewAdminPassword("");
    alert("Admin password updated successfully!");
  };

  const handleManagerChange = (e) => {
    const { name, value } = e.target;
    setManager((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateManager = () => {
    if (!manager.email || !manager.password) {
      alert("Please fill email and password");
      return;
    }
    setManagersList((prev) => [...prev, manager]);
    setManager({ email: "", password: "" });
    alert("Manager created successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">⚙️ Settings</h1>

      {/* Store Settings */}
      <Card className="max-w-2xl mb-6">
        <CardHeader>
          <CardTitle>Store Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Store Name</Label>
            <Input
              name="storeName"
              value={settings.storeName}
              onChange={handleSettingsChange}
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              name="email"
              value={settings.email}
              onChange={handleSettingsChange}
            />
          </div>
          <div>
            <Label>Phone</Label>
            <Input
              name="phone"
              value={settings.phone}
              onChange={handleSettingsChange}
            />
          </div>
          <div>
            <Label>Address</Label>
            <Input
              name="address"
              value={settings.address}
              onChange={handleSettingsChange}
            />
          </div>
          <Button onClick={handleSaveSettings} className="w-full mt-4">
            Save Settings
          </Button>
        </CardContent>
      </Card>

      {/* Admin Password Change */}
      <Card className="max-w-2xl mb-6">
        <CardHeader>
          <CardTitle>Change Admin Password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>New Password</Label>
            <Input
              type="password"
              value={newAdminPassword}
              onChange={(e) => setNewAdminPassword(e.target.value)}
              placeholder="Enter new password"
            />
          </div>
          <Button
            onClick={handleAdminPasswordChange}
            className="w-full mt-4"
          >
            Update Password
          </Button>
        </CardContent>
      </Card>

      {/* Create Manager */}
      <Card className="max-w-2xl mb-6">
        <CardHeader>
          <CardTitle>Create Manager</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Email</Label>
            <Input
              name="email"
              value={manager.email}
              onChange={handleManagerChange}
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={manager.password}
              onChange={handleManagerChange}
            />
          </div>
          <Button onClick={handleCreateManager} className="w-full mt-4">
            Create Manager
          </Button>

          {/* List of Managers */}
          {managersList.length > 0 && (
            <div className="mt-4">
              <h2 className="font-semibold mb-2">Managers:</h2>
              <ul className="list-disc pl-5">
                {managersList.map((m, idx) => (
                  <li key={idx}>{m.email}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;
