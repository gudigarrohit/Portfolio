"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";


// Animation
const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 200 : -200,
    opacity: 0,
    scale: 0.95,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({
    x: dir > 0 ? -200 : 200,
    opacity: 0,
    scale: 0.95,
  }),
};

export default function ProjectsSection() {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [[current, direction], setCurrent] = useState([0, 0]);

  // 👉 Swipe state
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const paginate = useCallback((dir) => {
    setCurrent(([prev]) => {
      const next = (prev + dir + projects.length) % projects.length;
      return [next, dir];
    });
  }, []);

  // 👉 Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [paginate]);

  // 👉 Swipe logic
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      paginate(1); // swipe left
    } else if (distance < -minSwipeDistance) {
      paginate(-1); // swipe right
    }
  };

  const p = projects[current];

  return (
    <section
      id="projects"
      className="py-[clamp(4rem,8vw,6rem)] px-[clamp(1rem,4vw,2rem)]"
    >

      {/* Heading */}
      <div ref={ref} className="max-w-6xl mx-auto mb-[clamp(2rem,6vw,4rem)]">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-[clamp(1.5rem,4vw,3rem)]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <p className="text-gray-400 text-[clamp(0.7rem,1vw,0.8rem)] tracking-widest uppercase mb-2">
              03
            </p>

            <h2 className="text-[clamp(2rem,5vw,3rem)] text-white mb-4">
              PROJECTS
            </h2>

            <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-transparent rounded-full" />
          </motion.div>

          <motion.p
            className="text-gray-400 text-[clamp(0.9rem,1.3vw,1.1rem)] self-end"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Use arrows or swipe to explore projects.
          </motion.p>
        </div>
      </div>

      {/* Slider */}
      <div className="max-w-3xl mx-auto relative">

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-[clamp(1rem,3vw,2rem)]">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const dir = i === current ? 0 : i > current ? 1 : -1;
                setCurrent([i, dir]);
              }}
              className="relative h-[6px] rounded-full overflow-hidden transition-all cursor-pointer"
              style={{ width: i === current ? 32 : 12 }}
            >
              <div className="absolute inset-0 bg-gray-600/30" />
              {i === current && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500"
                  layoutId="activeDot"
                />
              )}
            </button>
          ))}
        </div>

        {/* Card (Swipe Enabled) */}
        <div
          className="relative overflow-hidden rounded-2xl min-h-[clamp(280px,40vw,340px)] cursor-grab active:cursor-grabbing"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              onClick={() => router.push(`/projects/${p.slug}`)}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-[clamp(1.5rem,4vw,2.5rem)] relative cursor-pointer hover:scale-[1.02] transition"
            >
              {/* Watermark */}
              <span
                className="absolute -top-4 -right-2 text-[clamp(4rem,10vw,7rem)] font-bold opacity-[0.03]"
                style={{ color: p.accent }}
              >
                {p.num}
              </span>

              {/* Accent */}
              <motion.div
                className="absolute top-0 left-0 h-px"
                style={{
                  background: `linear-gradient(90deg, ${p.accent}, transparent)`,
                }}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
              />

              <div className="relative z-10">
                <div className="flex justify-between mb-6 text-gray-400 text-[clamp(0.7rem,1vw,0.8rem)]">
                  <span>{p.num}</span>
                  <span>
                    {current + 1} / {projects.length}
                  </span>
                </div>

                <h3 className="text-[clamp(1.2rem,2vw,1.6rem)] text-white mb-4">
                  {p.title}
                </h3>

                <p className="text-gray-400 mb-6 text-[clamp(0.9rem,1.2vw,1rem)]">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[clamp(0.65rem,0.9vw,0.75rem)] px-3 py-1.5 rounded-full border border-white/10 text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(p.live, "_blank");
                    }}
                    className="flex items-center gap-2 text-gray-400 hover:text-white"
                  >
                    <ExternalLink size={14} /> Live
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(p.github, "_blank");
                    }}
                    className="flex items-center gap-2 text-gray-400 hover:text-white"
                  >
                    <FaGithub size={14} /> Code
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-[clamp(1.5rem,4vw,2rem)]">
          <motion.button
            onClick={() => paginate(-1)}
            className="w-[clamp(2.5rem,5vw,3rem)] h-[clamp(2.5rem,5vw,3rem)] rounded-full bg-white/5 backdrop-blur-lg flex items-center justify-center text-gray-400 hover:text-white"
          >
            <ChevronLeft size={18} />
          </motion.button>

          <motion.button
            onClick={() => paginate(1)}
            className="w-[clamp(2.5rem,5vw,3rem)] h-[clamp(2.5rem,5vw,3rem)] rounded-full bg-white/5 backdrop-blur-lg flex items-center justify-center text-gray-400 hover:text-white"
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}