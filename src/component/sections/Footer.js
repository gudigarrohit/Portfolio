import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="py-[clamp(3rem,6vw,4rem)] px-[clamp(1rem,4vw,2rem)] border-t border-[rgba(255,255,255,0.04)]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="mb-[clamp(2rem,5vw,3rem)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] text-stark-white mb-1 leading-tight">
            LET'S CREATE
          </h2>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] aurora-text leading-tight">
            SOMETHING GREAT.
          </h2>
        </motion.div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-[clamp(1.5rem,3vw,2rem)] text-center sm:text-left">

          {/* Left */}
          <div className="text-muted-grey tracking-widest uppercase flex flex-col items-center sm:items-start gap-1">
            <p className="text-[clamp(0.8rem,1vw,0.9rem)] flex items-center gap-1">
              <span className="text-[clamp(1rem,1.2vw,1.2rem)]">©</span>
              {new Date().getFullYear()}
            </p>
            <p className="text-[clamp(0.6rem,0.9vw,0.7rem)]">
              Rohit A Gudigar. All rights reserved.
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-[clamp(1rem,2vw,1.5rem)]">
            {[
              {
                icon: FaGithub,
                href: "https://github.com/gudigarrohit",
                label: "GitHub",
              },
              {
                icon: FaLinkedin,
                href: "https://www.linkedin.com/in/gudigarrohit?utm_source=share_via&utm_content=profile&utm_medium=member_android",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:rohitag@example.com",
                label: "Email",
              },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-muted-grey hover:text-stark-white transition "
                whileHover={{ scale : 1.2 }}
                aria-label={link.label}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Button */}
          <motion.button
            onClick={scrollToTop}
            className="glass-panel w-[clamp(2.5rem,4vw,2.75rem)] h-[clamp(2.5rem,4vw,2.75rem)] rounded-full flex items-center justify-center text-muted-grey hover:text-stark-white group"
            whileHover={{
              y: -4,
              boxShadow: "0 0 20px rgba(79,70,229,0.3)",
            }}
            whileTap={{ scale: .95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;