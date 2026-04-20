"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TechnicalExcellence() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-black text-white px-[clamp(1rem,4vw,2rem)] py-[clamp(3rem,6vw,5rem)]">
      <motion.button
        onClick={() => router.back()}
        whileHover={{ x: -4, scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className="mb-6 flex items-center gap-2 px-4 py-2 rounded-xl 
             bg-white/5 backdrop-blur-md 
             border border-white/10 
             text-gray-300 hover:text-white 
             hover:bg-white/10 
             transition-all duration-300 shadow-lg"
      >
        <ArrowLeft size={18} />
        Back
      </motion.button>
      <div className="min-h-screen bg-black text-white px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Technical Excellence
        </h1>

        <p className="text-gray-400 max-w-2xl">
          Recognized for strong skills in full-stack development, system design,
          and problem solving across multiple real-world projects.
        </p>
      </div>
    </div>
  );
}