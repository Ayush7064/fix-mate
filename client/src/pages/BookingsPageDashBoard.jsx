import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import BookingTabs from "../components/BookingTabs";
import BookingTable from "../components/BookingTable";
import { motion } from "framer-motion";

const BookingsPageDashBoard = () => {
  const [activeTab, setActiveTab] = useState("Pending");

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f9fbfd]">
  <Sidebar />
  <motion.div
    className="flex-1 p-4 md:p-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }}
  >
    <h2 className="text-xl md:text-2xl font-semibold mb-4">Bookings</h2>
    <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    <BookingTable activeTab={activeTab} />
  </motion.div>
</div>
  );
};

export default BookingsPageDashBoard;
