// src/pages/BookingDetailsPage.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import BookingHeader from "../components/BookingHeader";
import BookingProgress from "../components/BookingProgress";
import BookingInfo from "../components/BookingInfo";
import ContactInformation from "../components/ContactInformation";

const BookingDetailsPage = () => {
  return (
    <motion.div
      className="min-h-screen px-6 py-8 max-w-4xl m-8 space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BookingHeader />
      <BookingProgress />
      <BookingInfo />
      <ContactInformation />
    </motion.div>
  );
};

export default BookingDetailsPage;
