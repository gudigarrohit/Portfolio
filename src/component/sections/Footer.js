import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      id="footer"
      className="min-h-screen flex items-center px-[clamp(1rem,4vw,2rem)] border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold text-white leading-tight">
            LET'S CREATE
          </h2>

          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text leading-tight">
            SOMETHING GREAT.
          </h2>
        </motion.div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

          {/* Left */}
          <div className="text-gray-400 text-center sm:text-left tracking-widest uppercase">
            <p className="text-sm flex items-center justify-center sm:justify-start gap-1">
              © {new Date().getFullYear()}
            </p>
            <p className="text-xs mt-1">
              Rohit A Gudigar. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {[
              {
                icon: Mail,
                href: "mailto:gudigarrohit@gmail.com",
              },

              {
                icon: FaGithub,
                href: "https://github.com/gudigarrohit",
              },

              {
                icon: FaLinkedin,
                href: "https://www.linkedin.com/in/gudigarrohit",
              },

              {
                icon: FaInstagram,
                href: "https://www.instagram.com/__rohittt__04_",
              },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                whileHover={{ scale: 1.2 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Scroll Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-11 h-11 rounded-full p-[1.5px] group"
          >
            {/* Gradient Border */}
            <span className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 opacity-60 group-hover:opacity-100 blur-[1px]" />

            {/* Glass Inner */}
            <span className="relative flex items-center justify-center w-full h-full rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gray-400 group-hover:text-white transition">
              <ArrowUp size={18} />
            </span>
          </motion.button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;