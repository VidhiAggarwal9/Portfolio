// src/components/Flashcard.jsx
import React from "react";
import { motion } from "framer-motion";

const Flashcard = ({ title, content }) => {
  return (
    <motion.div
      className="bg-gray-800 text-white rounded-xl shadow-lg p-5 m-5 w-full max-w-3xl flex flex-col"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 25px 40px rgba(0,0,0,0.5)",
        rotateX: 2,
        rotateY: 2,
      }}
    >
      {/* Title */}
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>

      {/* Content */}
      <div className="overflow-y-auto max-h-[400px] pr-2">
        {typeof content === "string" ? (
          <p className="text-lg">{content}</p>
        ) : (
          content
        )}
      </div>
    </motion.div>
  );
};

export default Flashcard;