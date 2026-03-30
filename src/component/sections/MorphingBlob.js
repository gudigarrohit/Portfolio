"use client";

import { motion } from "framer-motion";

export default function MorphingBlob({ className = "", delay = 0 }) {
  return (
    <motion.div
      className={`pointer-events-none ${className}`}
      animate={{
        borderRadius: [
          "40% 60% 70% 30% / 40% 50% 60% 50%",
          "60% 40% 30% 70% / 50% 60% 40% 60%",
          "30% 60% 70% 40% / 50% 30% 60% 40%",
          "40% 60% 70% 30% / 40% 50% 60% 50%",
        ],
        scale: [1, 1.05, 0.95, 1],
        rotate: [0, 90, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
      style={{
        background: "linear-gradient(135deg, #4F46E5, #EC4899)",
        filter: "blur(80px)",
      }}
    />
  );
}