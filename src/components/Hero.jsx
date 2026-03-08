// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/myPhoto.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex justify-center items-center px-5 md:px-12 overflow-hidden"
    >
      {/* Flashcard / Hero container */}
      <motion.div
        className="flashcard z-10 flex flex-col items-center p-8"
        style={{ minHeight: "550px", maxWidth: "600px" }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, damping: 15 }}
      >
        {/* Profile Image (50% of flashcard height) */}
        <motion.img
          src={profileImg}
          alt="Profile"
          className="rounded-full border-4 border-pink-300 object-cover"
          style={{ width: "50%", height: "50%", minHeight: "250px" }}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 60 }}
        />

        {/* Hero Text */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1, type: "spring", stiffness: 50 }}
          className="mt-8 text-5xl md:text-6xl font-extrabold text-white text-center tracking-wide"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Hello, I'm <span className="text-pink-300">Vidhi Aggarwal</span>
        </motion.h1>
      </motion.div>
    </section>
  );
}