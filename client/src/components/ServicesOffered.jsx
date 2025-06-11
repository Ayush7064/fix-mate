import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ServicesOffered = () => {
  const services = [
    { name: "Plumbing Services", tags: ["Leaks", "Installations", "Archromes"] },
    { name: "Electrical Services", tags: ["Wiring", "Switches", "Lighting"] },
    { name: "Handyman Services", tags: ["General repairs", "Furniture maintenance"] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h3 className="text-lg font-semibold mb-2">Services Offered</h3>
      <ul className="space-y-4">
        {services.map((service, i) => (
          <motion.li
            key={i}
            className="border rounded-lg p-4"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * i }}
          >
            <p className="font-medium">{service.name}</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {service.tags.map((tag, j) => (
                <span key={j} className="badge badge-outline text-xs">{tag}</span>
              ))}
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServicesOffered;
