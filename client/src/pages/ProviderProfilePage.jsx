import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ProviderHeader from "../components/ProviderHeader";
import ServicesOffered from "../components/ServicesOffered";
import Reviews from "../components/Reviews";
import BookingForm from "../components/BookingForm";

const ProviderProfilePage = () => {
  return (
    <motion.div
      className="min-h-screen bg-[#f9fbfd] p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ProviderHeader />
      <div className="flex flex-col lg:flex-row gap-8 mt-6">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ServicesOffered />
          <Reviews />
        </motion.div>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <BookingForm />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProviderProfilePage;