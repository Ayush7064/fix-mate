import React from "react";
import { motion } from "framer-motion";

const formVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const RegisterForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fbfd]">
      <motion.div
        className="w-full max-w-md bg-transparent"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-2xl font-bold text-center mb-8"
          variants={itemVariants}
        >
          Join our community
        </motion.h2>

        <motion.form className="space-y-4" variants={formVariants}>
          {[
            {
              label: "Full Name",
              placeholder: "Enter",
              hint: "e.g. John Doe",
              type: "text",
            },
            {
              label: "Email",
              placeholder: "Enter",
              hint: "e.g. user@email.com",
              type: "email",
            },
            {
              label: "Password",
              placeholder: "Enter",
              hint: "use min 8 characters",
              type: "password",
            },
            {
              label: "Phone Number",
              placeholder: "Enter",
              hint: "e.g. +91 1234567890",
              type: "tel",
            },
            {
              label: "Address",
              placeholder: "Enter",
              hint: "e.g. 123 Main Street",
              type: "text",
            },
          ].map((field, index) => (
            <motion.div key={index} variants={itemVariants}>
              <label className="block text-sm font-medium mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="input input-bordered w-full"
              />
              <span className="text-xs text-gray-400">{field.hint}</span>
            </motion.div>
          ))}

          {/* Location dropdown */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium mb-1">Location</label>
            <select className="select select-bordered w-full">
              <option>Auto-Filled</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
            </select>
            <span className="text-xs text-gray-400">e.g. India</span>
          </motion.div>

          {/* Role input */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium mb-1">Role</label>
            <input
              type="text"
              placeholder="Enter"
              className="input input-bordered w-full"
            />
          </motion.div>

          {/* Button */}
          <motion.button
            className="btn btn-primary w-full mt-4"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Register
          </motion.button>
        </motion.form>

        <motion.div
          className="text-center mt-4 text-sm text-gray-500"
          variants={itemVariants}
        >
          Already have an account?{" "}
          <a href="#" className="text-blue-600">
            Log in
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RegisterForm;
