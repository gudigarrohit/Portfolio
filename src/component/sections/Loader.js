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
      className="fixed top-0 left-0 w-full h-[100dvh] z-[100] bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 flex items-center justify-center px-4">

        <div className="text-center">

          <motion.div
            className="font-display text-stark-white Pacifico text-[clamp(1rem,5vw,1.4rem)] tracking-[0.15em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ROHIT
          </motion.div>

          <motion.div
            className="mx-auto mt-3 h-[2px] aurora-gradient w-[120px]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          />

          <motion.p
            className="text-muted-grey roboto-slab uppercase mt-2 text-[10px] tracking-[0.25em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Portfolio
          </motion.p>

        </div>
      </div>
    </motion.div>
  );
};

export default Loader;