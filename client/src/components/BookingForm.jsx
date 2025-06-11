import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const BookingForm = () => (
  <motion.div
    className="w-full lg:w-80 bg-white border p-6 rounded-lg shadow-sm"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6 }}
  >
    <h3 className="text-lg font-semibold mb-4">Book Service</h3>
    <div className="space-y-4">
      <input type="datetime-local" className="input input-bordered w-full" />
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="Problem Description"
        rows={5}
      ></textarea>
      <button className="btn btn-primary w-full">Submit</button>
    </div>
  </motion.div>
);

export default BookingForm;
