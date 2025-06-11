import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const SearchBar = () => {
  return (
    <motion.input
      type="text"
      placeholder="Search providers..."
      className="input input-bordered w-full my-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default SearchBar;
