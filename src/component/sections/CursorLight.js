"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorLight() {
  const [visible, setVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.3 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    // Detect touch safely (client-side only)
    const hasTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouch);

    if (hasTouch) return;

    let rafId;

    const handleMove = (e) => {
      // throttle with RAF
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);

        if (!visible) setVisible(true);

        const target = e.target;
        const isInteractive = target.closest(
          "a, button, [role='button'], input, textarea, [data-magnetic]"
        );

        setIsHoveringInteractive(!!isInteractive);
      });
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [visible, x, y]);

  // Respect reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (isTouchDevice || prefersReducedMotion) return null;

  // Responsive sizing
  const baseSize = Math.min(window.innerWidth * 0.25, 400);
  const hoverSize = Math.min(window.innerWidth * 0.12, 200);

  const size = isHoveringInteractive ? hoverSize : baseSize;

  return (
    <>
      {/* Glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-screen"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: size,
          height: size,
          background: isHoveringInteractive
            ? "radial-gradient(circle, rgba(79,70,229,0.25) 0%, rgba(236,72,153,0.12) 40%, transparent 70%)"
            : "radial-gradient(circle, rgba(79,70,229,0.12) 0%, rgba(236,72,153,0.06) 40%, transparent 70%)",
          opacity: visible ? 1 : 0,
          transition:
            "width 0.4s ease, height 0.4s ease, opacity 0.3s ease",
          willChange: "transform, width, height",
        }}
      />

      {/* Cursor Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: isHoveringInteractive ? 36 : 8,
          height: isHoveringInteractive ? 36 : 8,
          borderRadius: "50%",
          border: isHoveringInteractive
            ? "1px solid rgba(79,70,229,0.5)"
            : "none",
          background: isHoveringInteractive
            ? "transparent"
            : "rgba(255,255,255,0.6)",
          opacity: visible ? 1 : 0,
          transition:
            "width 0.3s ease, height 0.3s ease, background 0.3s ease, border 0.3s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}