
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
    { id: "footer", label: "Footer" },

];

export default function NavDots({ activeSection }) {
  const [hovered, setHovered] = useState(null);


  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-6">
      <div className="w-px h-8 bg-gradient-to-b from-transparent to-gray-500/30 " />

      {sections.map((s) => (
        <div key={s.id} className="relative flex items-center ">
          <button
            onClick={() => scrollTo(s.id)}
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
            className="cursor-pointer w-4 h-4 flex items-center justify-center"
          >
            <motion.div
              className="rounded-full"
              animate={{
                width: activeSection === s.id ? 10 : 7,
                height: activeSection === s.id ? 10 : 7,
                background:
                  activeSection === s.id
                    ? "linear-gradient(135deg, #4F46E5, #EC4899)"
                    : "#888",
              }}
            />
          </button>

          {hovered === s.id && (
            <motion.span
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              className="
              absolute whitespace-nowrap
              text-[clamp(0.65rem,0.8vw,0.75rem)] 
              text-white

              px-3 py-1.5 rounded-md

              backdrop-blur-md 
              bg-white/5 
              border border-white/10

              shadow-[0_4px_20px_rgba(0,0,0,0.4)]

              md:left-full md:ml-2 md:top-1/2 md:-translate-y-1/2
              "            >
              {s.label}
            </motion.span>
          )}
        </div>
      ))}

      <div className="w-px h-8 bg-gradient-to-b from-gray-500/30 to-transparent" />
    </nav>
  );
}