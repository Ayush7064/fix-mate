import React from "react";
import SearchBar from "../components/SearchBar";
import ProviderGrid from "../components/ProviderGrid";
import providers from "../providerData";
import { motion } from "framer-motion";
import SplitText from "../react-bits/SplitText";


const HomePage = () => {
  return (
    <motion.div
      className="min-h-screen p-6 m-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SplitText
  text="Find Local Service Providers"
  className="text-3xl font-semibold text-center"
  delay={50}
  duration={0.1}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>

      <SearchBar />

      <motion.h2
        className="text-xl font-semibold mt-6 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Nearby Providers
      </motion.h2>

      <ProviderGrid providers={providers} />
    </motion.div>
  );
};

export default HomePage;
