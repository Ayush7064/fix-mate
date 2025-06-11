/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const ProviderCard = ({ provider }) => {
  return (
    <motion.div
      className="card w-56   hover:shadow-lg transition"
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
    >
      <figure>
        <img src={provider.image} alt={provider.name} className="rounded-xl h-55 w-full" />
      </figure>
      <div className="card-body p-4 text-center">
        <h2 className="card-title text-sm">{provider.name}</h2>
        <p className="text-xs text-gray-500">{provider.service}</p>
        <p className="text-sm text-blue-500">{provider.rating} ★ • {provider.distance}</p>
      </div>
    </motion.div>
  );
};

export default ProviderCard;
