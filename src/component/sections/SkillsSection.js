"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const skills = [
    { name: "React", radius: 140, speed: 25 },
    { name: "JavaScript", radius: 140, speed: -30 },
    { name: "HTML", radius: 200, speed: 20 },
    { name: "CSS", radius: 200, speed: -22 },
    { name: "Bootstrap", radius: 200, speed: 35 },
    { name: "Node.js", radius: 260, speed: -18 },
    { name: "Express", radius: 260, speed: 28 },
    { name: "Git", radius: 310, speed: 15 },
    { name: "GitHub", radius: 310, speed: -25 },
    { name: "Postman", radius: 310, speed: 32 },
    { name: "VS Code", radius: 310, speed: -20 },
];

export default function SkillsSection() {
    const [hovered, setHovered] = useState(null);
    const [scale, setScale] = useState(1);

    const time = useMotionValue(0);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // 🔥 Smooth animation loop (same as your original)
    useEffect(() => {
        let frame;
        const animate = () => {
            time.set(time.get() + 0.01);
            frame = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(frame);
    }, [time]);

    // 🔥 Responsive scaling (NO re-render per frame)
    useEffect(() => {
        const updateScale = () => {
            const w = window.innerWidth;

            if (w < 480) setScale(0.45);
            else if (w < 768) setScale(0.65);
            else if (w < 1024) setScale(0.85);
            else setScale(1);
        };

        updateScale();
        window.addEventListener("resize", updateScale);
        return () => window.removeEventListener("resize", updateScale);
    }, []);

    return (
        <section
            id="skills" className="min-h-screen flex items-center px-[clamp(1rem,4vw,2rem)] py-[clamp(4rem,8vw,6rem)]">
            <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-[clamp(2rem,5vw,3rem)] items-center">

                {/* LEFT */}
                <div ref={ref} className="max-w-6xl mx-auto mb-[clamp(2rem,6vw,4rem)]">
                    <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-[clamp(1.5rem,4vw,3rem)] items-start">

                        {/* LEFT */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                        >
                            <p className="text-gray-400 text-[clamp(0.7rem,1vw,0.8rem)] tracking-widest uppercase mb-2">
                                02
                            </p>

                            <h2 className="text-[clamp(2rem,5vw,3rem)] text-white mb-4 font-bold">
                                Skills
                            </h2>

                            <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-transparent rounded-full" />
                        </motion.div>

                        {/* RIGHT */}
                        <motion.p
                            className="text-gray-400 text-[clamp(0.9rem,1.3vw,1.1rem)] leading-relaxed md:mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                        >
                            Technologies orbiting around my expertise.
                        </motion.p>

                    </div>
                </div>
                {/* RIGHT */}
                <div className="flex justify-center">
                    {/* RIGHT */}
                    <div
                        className="relative flex items-center justify-center"
                        style={{
                            width: "clamp(260px, 80vw, 500px)",
                            height: "clamp(260px, 80vw, 500px)",
                            transform: `scale(${scale})`,
                        }}
                    >

                        {/* Rings */}
                        {[120, 180, 240, 300].map((r, i) => (
                            <div
                                key={r}
                                className="absolute rounded-full border border-gray-900/60 shadow-inner shadow-black/40" 
                                style={{
                                    width: r * 2,
                                    height: r * 2,
                                    borderColor: `rgba(31, 41, 55, ${0.2 + i * 0.15})`, // darker outer rings

                                }}
                            />
                        ))}

                        {/* Center */}
                        <div className="absolute w-2 h-2 md:w-3 md:h-3 sm:mt-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />

                        {/* Skills */}
                        {skills.map((skill, i) => {
                            const angle = useTransform(
                                time,
                                (t) => t * skill.speed * 0.02 + (i * Math.PI * 2) / skills.length
                            );

                            const x = useTransform(angle, (a) => Math.cos(a) * skill.radius);
                            const y = useTransform(angle, (a) => Math.sin(a) * skill.radius);

                            return (
                                <motion.div
                                    key={skill.name}
                                    className="absolute"
                                    style={{ x, y }}
                                    onMouseEnter={() => setHovered(skill.name)}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    <motion.div
                                        className="px-[clamp(0.5rem,1vw,0.7rem)] py-[clamp(0.3rem,0.6vw,0.4rem)] text-[clamp(0.79rem,1vw,.79rem)] font-medium tracking-wide border rounded-md bg-black/40 backdrop-blur-sm whitespace-nowrap"
                                        animate={{
                                            scale: hovered === skill.name ? 1.2 : 1,
                                            color: hovered === skill.name ? "#fff" : "#aaa",
                                        }}
                                    >
                                        {skill.name}
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}