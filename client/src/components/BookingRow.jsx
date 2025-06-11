import React from "react";
import { motion } from "framer-motion";

const BookingRow = ({ service, date, time, status }) => {
  return (
    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      className="hover:bg-gray-50"
    >
      <td className="py-3">{service}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>
        <span className="badge badge-ghost badge-sm capitalize">{status}</span>
      </td>
      <td className="text-right">
        <button className="text-blue-600 hover:underline text-sm">View Details</button>
      </td>
    </motion.tr>
  );
};

export default BookingRow;
