"use client";

import { motion } from "framer-motion";
import { FiArrowDown, FiMail } from "react-icons/fi";
import { FaFolderOpen } from "react-icons/fa";
import { useTextScramble, useMagneticEffect, useParallax } from "@/hooks/use-Animation";
import MorphingBlob from "@/component/sections/MorphingBlob";

const HeroSection = () => {
  const name = useTextScramble("ROHIT A GUDIGAR", 600);
  const role = useTextScramble("FULL STACK DEVELOPER", 1300);

  const magnetic1 = useMagneticEffect();
  const magnetic2 = useMagneticEffect();

  const parallaxY = useParallax(-0.15);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-[clamp(1rem,8vw,6rem)] overflow-hidden"
    >
      {/* BLOBS (responsive) */}
      <MorphingBlob className="absolute top-[10%] right-[10%] w-[clamp(200px,30vw,400px)] h-[clamp(200px,30vw,400px)] opacity-[0.06]" />
      <MorphingBlob
        className="absolute bottom-[15%] left-[8%] w-[clamp(150px,25vw,300px)] h-[clamp(150px,25vw,300px)] opacity-[0.04]"
        delay={2}
      />

      {/* GRID */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: parallaxY }}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full"
              style={{
                top: `${15 + i * 15}%`,
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.03) 50%, transparent)",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.1 * i }}
            />
          ))}

          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-full"
              style={{
                left: `${20 + i * 20}%`,
                background:
                  "linear-gradient(180deg, transparent, rgba(255,255,255,0.02) 50%, transparent)",
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: 0.2 * i }}
            />
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 w-full px-[clamp(1rem,4vw,3rem)]">
        {/* TOP LABEL */}
        <motion.div
          className="mb-[clamp(2rem,6vw,4rem)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 mb-3">
            <motion.div
              className="h-px aurora-gradient"
              initial={{ width: 0 }}
              animate={{ width: 60 }}
            />
            <p className="text-muted-grey text-[clamp(0.65rem,1vw,0.75rem)] tracking-[0.3em] uppercase">
              Portfolio — 2024
            </p>
          </div>
        </motion.div>

        {/* PROFILE + NAME */}
        <div className="mb-[clamp(1.5rem,4vw,2rem)] flex flex-col sm:flex-row items-center sm:items-center gap-[clamp(1rem,3vw,2.5rem)]">

          <motion.div
            className="relative w-[clamp(100px,10vw,160px)] h-[clamp(100px,10vw,160px)] rounded-full overflow-hidden flex-shrink-0 aurora-glow"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="absolute inset-0 aurora-gradient opacity-30 rounded-full" />

            <img
              src="/me.jpg"
              alt="Rohit A G"
              className="w-full h-full object-cover relative z-10"
            />
          </motion.div>

          <motion.h1
            className="text-[clamp(1.5rem,6vw,5.5rem)] roboto-slab font-extrabold stylish-name-gradient text-center sm:text-left leading-tight break-words"
          >
            {name}
          </motion.h1>
        </div>

        {/* ROLE */}
        <div className="flex items-center gap-[clamp(1rem,3vw,1.5rem)] mb-[clamp(2rem,5vw,3rem)] justify-center sm:justify-start">
          <motion.div
            className="h-px bg-gray-600"
            initial={{ width: 0 }}
            animate={{ width: 40 }}
          />
          <motion.p className="text-gray-400 text-[clamp(0.75rem,1vw,0.9rem)]">
            {role}
          </motion.p>
        </div>

        {/* DESC + CTA */}
        <div className="relative">

          {/* 🔥 TOP LINE */}
          <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[clamp(2rem,4vw,3rem)] bg-gradient-to-t from-indigo-500/40 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <motion.p
              className="text-muted-grey font-body text-base max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.6 }}
            >
              Crafting modern web experiences with clean code and thoughtful design.
              Based in Shimoga, India.
              lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, doloremque.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, doloremque.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 lg:justify-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <motion.button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative rounded-xl overflow-hidden cursor-pointer"

                onMouseMove={magnetic1.handleMouseMove}
                onMouseLeave={magnetic1.handleMouseLeave}

                style={{
                  transform: `translate(${magnetic1.offset.x}px, ${magnetic1.offset.y}px)`
                }}

                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* 🌈 BORDER ONLY */}
                <div className="absolute inset-0 rounded-xl p-[1px]  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

                {/* 🔥 INNER (NO GRADIENT BG) */}
                <div className="relative flex items-center gap-2 px-[clamp(0.9rem,2vw,1.4rem)] py-[clamp(0.5rem,1vw,0.8rem)] text-[clamp(0.75rem,1vw,0.9rem)] bg-black rounded-xl text-white whitespace-nowrap ">

                  <FaFolderOpen size={14} />
                  View Projects
                </div>

                {/* 💡 GLOW */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
              </motion.button>
              <motion.button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative rounded-xl overflow-hidden cursor-pointer"

                onMouseMove={magnetic2.handleMouseMove}
                onMouseLeave={magnetic2.handleMouseLeave}

                style={{
                  transform: `translate(${magnetic2.offset.x}px, ${magnetic2.offset.y}px)`
                }}

                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60" />

                <div className="relative flex items-center gap-2 px-[clamp(0.9rem,2vw,1.4rem)] py-[clamp(0.5rem,1vw,0.8rem)] text-[clamp(0.75rem,1vw,0.9rem)] bg-black rounded-xl text-gray-300 hover:text-white whitespace-nowrap">

                  <FiMail size={14} />
                  Contact Me
                </div>
              </motion.button>
            </motion.div>
          </div>

          {/* 🔥 BOTTOM LINE */}
          <div className="hidden sm:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-[clamp(2rem,4vw,3rem)] bg-gradient-to-t from-indigo-500/40 to-transparent" />

        </div>
      </div>

      {/* SCROLL */}
      <motion.div
        className="absolute bottom-[clamp(.8rem,8vw,1rem)] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-gray-400 text-[clamp(0.55rem,0.8vw,0.7rem)] uppercase">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FiArrowDown size={12} className="text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;