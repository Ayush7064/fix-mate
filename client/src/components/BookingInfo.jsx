// src/components/BookingInfo.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Calendar, MapPin, CreditCard, Wrench } from "lucide-react";

const BookingInfo = () => {
  return (
    <motion.div
      className="space-y-6 mt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <InfoRow icon={<Wrench />} label="Leaky Faucet Repair" desc="Plumbing Service" />
      <InfoRow icon={<Calendar />} label="July 20, 2024, 2:00 PM" desc="Date & Time" />
      <InfoRow icon={<MapPin />} label="123 Maple Street, Anytown, USA" desc="Location" />
      <InfoRow icon={<CreditCard />} label="Credit Card ending in 4242" desc="Payment Method" />
      <InfoRow
        icon={<img src="plumber.png" className="w-6 h-6 rounded-full" />}
        label="Sarah Miller"
        desc="Service Provider"
      />
    </motion.div>
  );
};

const InfoRow = ({ icon, label, desc }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 text-blue-600">{icon}</div>
    <div>
      <p className="font-medium">{label}</p>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  </div>
);

export default BookingInfo;
