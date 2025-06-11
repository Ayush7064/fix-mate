import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ProviderHeader = () => (
  <motion.div
    className="flex items-center justify-between"
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-4">
      <img src="plumber.png" className="w-25 h-25 rounded-full" alt="avatar" />
      <div>
        <h2 className="text-xl font-semibold">Sophia Carter</h2>
        <p className="text-sm text-gray-500">Certified Plumber • 5 years experience</p>
      </div>
    </div>
  </motion.div>
);

export default ProviderHeader;