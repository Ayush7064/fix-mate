import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Emily Clark",
    rating: 5,
    text: "Sophia did an excellent job fixing a leak in my bathroom. She was prompt, professional, and the repair was done quickly and efficiently. Highly recommend!",
  },
  {
    name: "David Lee",
    rating: 4,
    text: "Sophia helped with some electrical work in my kitchen. She was knowledgeable and provided great service. Would call again!",
  },
];

const Reviews = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    <h3 className="text-lg font-semibold mb-2">Reviews</h3>
    <div className="space-y-4">
      {reviews.map((review, idx) => (
        <motion.div
          key={idx}
          className="border p-4 rounded-md space-y-1"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 * idx }}
        >
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="plumber.png" alt={review.name} />
              </div>
            </div>
            <div>
              <p className="font-medium">{review.name}</p>
              <p className="text-sm text-yellow-500">{"★".repeat(review.rating)}</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">{review.text}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Reviews;