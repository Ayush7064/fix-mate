// src/components/BookingProgress.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const BookingProgress = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
  >
    <h3 className="text-md font-medium mb-1">Booking Progress</h3>
    <progress className="progress progress-primary w-full mb-2" value="30" max="100"></progress>
    <p className="text-sm text-blue-500 font-medium">Pending</p>
    <p className="text-sm text-gray-500 mt-1">
      Your booking is currently pending acceptance from the service provider. You will receive a notification once it’s accepted.
    </p>
  </motion.div>
);

export default BookingProgress;
