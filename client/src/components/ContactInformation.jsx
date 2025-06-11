// src/components/ContactInformation.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const ContactInformation = () => (
  <motion.div
    className="mt-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.7 }}
  >
    <h3 className="text-md font-semibold mb-3">Contact Information</h3>
    <div className="space-y-2 text-sm text-gray-700">
      <div className="flex items-center gap-2"><Phone size={16} /> (555) 123-4567</div>
      <div className="flex items-center gap-2"><Mail size={16} /> sarah.miller@example.com</div>
    </div>
  </motion.div>
);

export default ContactInformation;
