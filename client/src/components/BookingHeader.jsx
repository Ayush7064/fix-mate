// src/components/BookingHeader.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const BookingHeader = () => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.4 }}
  >
    <p className="text-sm text-gray-500 mb-1">Bookings / <span className="text-black font-medium">Booking Details</span></p>
    <h1 className="text-2xl font-semibold">Booking Details</h1>
    <p className="text-sm text-gray-500">Booking ID: #1234567890</p>
  </motion.div>
);

export default BookingHeader;
