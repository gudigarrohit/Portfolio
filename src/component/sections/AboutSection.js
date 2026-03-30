"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap } from "lucide-react";

// Data
const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "I write scalable, maintainable code following modern best practices.",
    num: "3+",
    label: "Years Experience",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "I design modern, responsive, and user-friendly interfaces.",
    num: "10+",
    label: "Projects Completed",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "I build fast, optimized applications with smooth user experience.",
    num: "5+",
    label: "Technologies",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-[clamp(4rem,8vw,6rem)] px-[clamp(1rem,4vw,2rem)]"
    >
      <div
        ref={ref}
        className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[35%_65%] gap-[clamp(2rem,5vw,4rem)]"
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gray-400 text-[clamp(0.7rem,1vw,0.8rem)] tracking-widest uppercase mb-2">
            01
          </p>

          <h2 className="text-[clamp(2rem,5vw,3rem)] text-white mb-4 font-bold leading-tight">
            ABOUT ME
          </h2>

          <div className="w-12 h-[2px] bg-indigo-500 mb-8 rounded-full" />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-[clamp(0.5rem,2vw,1rem)]">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="text-center"
              >
                <span className="text-[clamp(1.2rem,3vw,1.8rem)] font-bold text-indigo-500">
                  {h.num}
                </span>
                <p className="text-gray-400 text-[clamp(0.55rem,1vw,0.65rem)] uppercase mt-1 leading-tight">
                  {h.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div>
          <motion.p
            className="text-gray-400 text-[clamp(0.95rem,1.5vw,1.1rem)] leading-[1.9] mb-[clamp(2rem,4vw,2.5rem)]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            I'm a passionate full-stack developer based in{" "}
            <span className="text-white">Shimoga, India</span>. I specialize in
            building modern web applications that combine{" "}
            <span className="text-white">beautiful design</span> with{" "}
            <span className="text-white">powerful functionality</span>.
            <br />
            <br />
            I work with technologies like React, Next.js, and Node.js to create
            scalable and efficient solutions. I enjoy turning ideas into real
            products through clean and optimized code.
          </motion.p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(0.8rem,2vw,1rem)]">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                className="rounded-xl p-[clamp(1rem,2vw,1.5rem)] border bg-black/40 backdrop-blur-sm relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                whileHover={{ y: -5 }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-10 transition" />

                {/* Bottom line animation */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-indigo-500"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                />

                <h.icon
                  className="mb-4 text-indigo-500"
                  size={20}
                />

                <h3 className="text-[clamp(0.85rem,1.2vw,0.95rem)] text-white mb-2 font-semibold">
                  {h.title}
                </h3>

                <p className="text-gray-400 text-[clamp(0.75rem,1vw,0.8rem)] leading-relaxed">
                  {h.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}