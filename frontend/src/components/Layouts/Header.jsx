// src/components/layout/Header.jsx
import { Input } from "@/components/ui/input";
import { Bell, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext"; // 🔹 import auth context

const Header = () => {
  const { user } = useAuth(); // get logged-in user

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <Input placeholder="Search..." className="max-w-md" />

      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-gray-600" />

        <div className="flex items-center gap-2">
          {/* User icon as profile */}
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="w-5 h-5 text-gray-500" />
          </div>
          {/* Display email if logged in */}
          <span className="font-medium">{user?.email || "Guest"}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
