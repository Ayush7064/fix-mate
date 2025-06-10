import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Facebook, Instagram } from 'lucide-react';

function Footer() {
  return (
    <motion.footer
      className="text-[#5A7A99] px-6 py-10 text-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-[80%] max-w-5xl mx-auto flex flex-col items-center gap-6"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        {/* Top Navigation Links */}
        <motion.div
          className="flex flex-wrap justify-center sm:justify-evenly gap-8 sm:gap-40 text-sm sm:text-md w-full"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div><a href="#" className="hover:underline">About</a></div>
          <div><a href="#" className="hover:underline">Careers</a></div>
          <div><a href="#" className="hover:underline">Privacy</a></div>
          <div><a href="#" className="hover:underline">Terms</a></div>
          <div><a href="#" className="hover:underline">Contact</a></div>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="flex gap-6"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a href="#" aria-label="Twitter" className="hover:text-[#0084FF]">
            <Twitter size={20} />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-[#0084FF]">
            <Facebook size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-[#0084FF]">
            <Instagram size={20} />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center text-xs"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
        >
          © 2025 FixMate. All rights reserved.
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
