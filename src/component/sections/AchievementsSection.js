"use client";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, FileCheck } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Medical Hackathon",
    desc: "Participated in a competitive medical hackathon...",
    year: "2024",
    accent: "#6366F1",
    link: "/achievements/medical-hackathon",
  },
  {
    icon: Award,
    title: "Technical Excellence",
    desc: "Recognized for strong problem-solving...",
    year: "2023",
    accent: "#8B5CF6",
    link: "/achievements/technical-excellence",
  },
  {
    icon: FileCheck,
    title: "Certifications",
    desc: "Completed certifications...",
    year: "2023",
    accent: "#EC4899",
    link: "/achievements/certifications",
  },
];

export default function AchievementsSection() {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isTouch =
    typeof window !== "undefined" && "ontouchstart" in window;

  return (
    <section
      id="achievements"
      className="min-h-screen flex items-center py-[clamp(4rem,8vw,6rem)] px-[clamp(1rem,4vw,2rem)]"
    >
      <div
        ref={ref}
        className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[35%_65%] gap-[clamp(2rem,5vw,3rem)]"
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-gray-400 text-[clamp(0.7rem,1vw,0.8rem)] tracking-widest uppercase mb-2">
            04
          </p>

          <h2 className="text-[clamp(2rem,5vw,3rem)] text-white mb-4 font-bold">
            ACHIEVEMENTS
          </h2>

          <div className="w-12 h-[2px] bg-indigo-500 rounded-full" />
        </motion.div>

        {/* RIGHT */}
        <div className="relative">

          {/* 🔥 Vertical Neon Line */}
          <motion.div
            className="absolute left-[clamp(0.8rem,2vw,1.25rem)] top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-indigo-500/40 to-transparent"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: "top" }}
          />


          {/* Cards */}
          <div className="space-y-[clamp(1.5rem,3vw,2rem)]">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                onClick={() => router.push(a.link)}

                className="relative ml-[clamp(2.8rem,6vw,3.2rem)] group"

                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}

                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}

                whileHover={!isTouch ? { y: -4, scale: 1.02 } : {}}
                whileTap={isTouch ? { y: -3, scale: 1.02 } : { scale: 0.97 }}
              >
                {/* 🌈 Gradient Border */}
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/60 via-purple-500/40 to-pink-500/60 opacity-60 group-hover:opacity-100 transition duration-500" />

                {/* 💎 Card */}
                <div className="relative rounded-2xl p-[clamp(1rem,2vw,1.5rem)] bg-[#0d0d10]/80 backdrop-blur-xl border border-white/5 overflow-hidden">

                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute -inset-10 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 blur-2xl" />
                  </div>

                  {/* 🔵 Timeline Dot */}
                  <div className="absolute left-[clamp(-2.3rem,-4vw,-2.5rem)] top-6 flex items-center justify-center">
                    <div
                      className="absolute w-4 h-4 rounded-full"
                      style={{
                        background: a.accent,
                        filter: "blur(6px)",
                        opacity: 0.6,
                      }}
                    />
                    <div
                      className="w-2.5 h-2.5 rounded-full border-2"
                      style={{
                        borderColor: a.accent,
                        background: "#0D0D10",
                      }}
                    />
                  </div>

                  {/* ➖ Connector */}
                  <div
                    className="absolute left-[clamp(-1.3rem,-3vw,-1.4rem)] top-[1.7rem] h-[2px]"
                    style={{
                      width: "clamp(1rem,2vw,1.4rem)",
                      background: a.accent,
                      opacity: 0.5,
                      boxShadow: `0 0 10px ${a.accent}`,
                    }}
                  />

                  {/* Content */}
                  <div className="flex justify-between items-start mb-2 gap-3 relative z-10">
                    <div className="flex items-center gap-3 transition-all duration-300 group-hover:translate-x-1">
                      <a.icon size={18} style={{ color: a.accent }} />

                      <h3 className="text-[clamp(0.9rem,1.4vw,1rem)] text-white font-semibold">
                        {a.title}
                      </h3>
                    </div>

                    <span className="text-gray-400 text-[clamp(0.7rem,1vw,0.75rem)] whitespace-nowrap">
                      {a.year}
                    </span>
                  </div>

                  <p className="text-gray-400 text-[clamp(0.8rem,1.1vw,0.9rem)] leading-relaxed relative z-10">
                    {a.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}