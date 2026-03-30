"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

const Loader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black px-4 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center max-w-full">

        {/* 🔥 NAME */}
        <motion.div
          className="
            font-display font-serif text-stark-white
            text-[clamp(1rem,5vw,1.4rem)]
            tracking-[0.15em]
            text-center
            break-words
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ROHIT
        </motion.div>

        {/* ✨ LINE */}
        <motion.div
          className="
            mx-auto
            mt-3
            h-[2px]
            aurora-gradient
            w-[40%]
            max-w-[160px]
            origin-left
          "
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.3,
            ease: "easeInOut",
          }}
        />

        {/* 📝 TEXT */}
        <motion.p
          className="
            text-muted-grey font-body uppercase
            mt-2
            text-[clamp(0.6rem,0.9vw,0.75rem)]
            tracking-[0.25em]
            text-center
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Portfolio
        </motion.p>

      </div>
    </motion.div>
  );
};

export default Loader;