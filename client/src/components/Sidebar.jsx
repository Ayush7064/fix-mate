import React from "react";
import {
  Home,
  Calendar,
  Star,
  User,
  Settings,
} from "lucide-react"; // or use any icon lib you prefer
import { Link } from "react-router-dom";

const Sidebar = () => {
  const navLinks = [
    { label: "Dashboard", icon: <Home size={18} />, path: "/dashboard" },
    { label: "Bookings", icon: <Calendar size={18} />, path: "/bookings", active: true },
    { label: "Reviews", icon: <Star size={18} />, path: "/reviews" },
    { label: "Profile", icon: <User size={18} />, path: "/profile" },
    { label: "Settings", icon: <Settings size={18} />, path: "/settings" },
  ];

  return (
    <aside className="w-full md:w-64 bg-white p-4 md:p-6 border-b md:border-b-0 md:border-r shadow-sm">
      {/* Profile Info */}
      <div className="flex items-center gap-3 mb-6">
        <img
          src="https://i.pravatar.cc/150?img=32"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold text-sm md:text-base">Sophia Carter</p>
          <p className="text-xs text-gray-500">Certified Plumber</p>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex md:flex-col gap-2 text-sm">
        {navLinks.map(({ label, icon, path, active }, idx) => (
          <Link
            key={idx}
            to={path}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
              active
                ? "bg-blue-100 text-blue-700 font-medium"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {icon}
            <span className="hidden md:inline">{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
