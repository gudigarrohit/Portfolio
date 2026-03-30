"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiMail, FiSend, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! I’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: FiMail, label: "Email", href: "mailto:gudigarrohit@gmail.com" },
    { icon: FaGithub, label: "GitHub", href: "https://github.com/gudigarrohit" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/gudigarrohit" },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-[clamp(4rem,8vw,6rem)] px-[clamp(1rem,4vw,2rem)]"
    >
      <div
        ref={ref}
        className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[35%_65%] gap-[clamp(2rem,5vw,4rem)]"
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-muted-grey text-[clamp(0.7rem,1vw,0.8rem)] tracking-widest uppercase mb-2">
            05
          </p>

          <h2 className="text-[clamp(2rem,5vw,3rem)] text-stark-white mb-4 leading-tight">
            LET'S TALK
          </h2>

          <div className="w-12 h-0.5 aurora-gradient rounded-full mb-8" />

          <p className="text-muted-grey text-[clamp(0.85rem,1.2vw,0.95rem)] leading-relaxed mb-[clamp(2rem,4vw,2.5rem)]">
            Have a project in mind? Let's build something amazing together.
          </p>

          {/* Social */}
          <div className="space-y-[clamp(0.5rem,2vw,0.75rem)]">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass-panel rounded-lg px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.6rem,1.5vw,0.75rem)] flex items-center justify-between group"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-3">
                  <link.icon
                    size={16}
                    className="text-muted-grey group-hover:text-stark-white transition"
                  />
                  <span className="text-muted-grey text-[clamp(0.8rem,1vw,0.9rem)] group-hover:text-stark-white transition">
                    {link.label}
                  </span>
                </div>

                <FiArrowUpRight
                  size={14}
                  className="text-muted-grey opacity-0 group-hover:opacity-100 transition"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="glass-panel rounded-2xl p-[clamp(1.5rem,3vw,2rem)] space-y-[clamp(1.2rem,2vw,1.5rem)]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {[
            { name: "name", label: "Your Name", type: "text" },
            { name: "email", label: "Your Email", type: "email" },
          ].map((field) => (
            <div key={field.name} className="relative">
              <motion.label
                className="absolute left-0 text-[clamp(0.65rem,0.9vw,0.7rem)] tracking-widest uppercase pointer-events-none"
                animate={{
                  top:
                    focusedField === field.name || formData[field.name]
                      ? -6
                      : 16,
                  color:
                    focusedField === field.name ? "#4F46E5" : "#888",
                }}
              >
                {field.label}
              </motion.label>

              <input
                type={field.type}
                value={formData[field.name]}
                onChange={(e) =>
                  setFormData({ ...formData, [field.name]: e.target.value })
                }
                onFocus={() => setFocusedField(field.name)}
                onBlur={() => setFocusedField(null)}
                required
                className="w-full bg-transparent border-b border-[rgba(255,255,255,0.08)] py-[clamp(0.7rem,1.5vw,0.9rem)] text-[clamp(0.85rem,1vw,0.95rem)] text-stark-white focus:outline-none focus:border-aurora-start transition pt-5"
              />
            </div>
          ))}

          {/* Message */}
          <div className="relative">
            <motion.label
              className="absolute left-0 text-[clamp(0.65rem,0.9vw,0.7rem)] tracking-widest uppercase pointer-events-none"
              animate={{
                top:
                  focusedField === "message" || formData.message ? -6 : 16,
                color:
                  focusedField === "message" ? "#4F46E5" : "#888",
              }}
            >
              Message
            </motion.label>

            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              required
              rows={4}
              className="w-full bg-transparent border-b border-[rgba(255,255,255,0.08)] py-[clamp(0.7rem,1.5vw,0.9rem)] text-[clamp(0.85rem,1vw,0.95rem)] text-stark-white focus:outline-none resize-none focus:border-aurora-start transition pt-5"
            />
          </div>

          <motion.button
            type="submit"
            className="group flex items-center gap-3 px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.8rem,2vw,1rem)] rounded-xl text-[clamp(0.85rem,1vw,0.95rem)] text-stark-white aurora-gradient"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiSend size={14} />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}