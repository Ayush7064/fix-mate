import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


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

const LoginForm = () => {
  return (
    <div className="min-h-screen flex ml-8 mr-8 items-center justify-center">
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
          Welcome Back
        </motion.h2>

        <motion.form className="space-y-4" variants={formVariants}>
          {[
            {
              label: "Email",
              placeholder: "Enter",
              hint: "e.g. user@email.com",
              type: "email",
            },
            {
              label: "Password",
              placeholder: "Enter",
              hint: "use correct password",
              type: "password",
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

          <motion.button
            className="btn btn-primary w-full mt-4"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Log In
          </motion.button>
        </motion.form>

        <motion.div
          className="text-center mt-4 text-sm text-gray-500"
          variants={itemVariants}
        >
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600">
            Register
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
