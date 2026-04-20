"use client";
import { certifications } from "@/data/certifications";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Certifications() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white px-[clamp(1rem,4vw,2rem)] py-[clamp(1rem,2vw,2rem)]">

      {/* 🔙 Back Button */}
      <motion.button
        onClick={() => router.back()}
        whileHover={{ x: -4, scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className="mb-2 flex items-center gap-2 px-4 py-2 rounded-xl 
             bg-white/5 backdrop-blur-md 
             border border-white/10 
             text-gray-300 hover:text-white 
             hover:bg-white/10 
             transition-all duration-300 shadow-lg"
      >
        <ArrowLeft size={18} />
        Back
      </motion.button>

      {/* 🔥 Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-1">
          <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Certifications
          </span>
        </h1>


      </motion.div>

      {/* 💎 Cards */}
      {/* 💎 Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((c, i) => (
          <motion.div
            key={i}
            onClick={() =>
              router.push(`/achievements/certifications/${c.slug}`)
            }
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative group cursor-pointer"
          >
            {/* 🌈 Glow Border */}
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-pink-500/40 opacity-50 group-hover:opacity-100 transition" />

            {/* 💎 Card */}
            <div className="relative rounded-2xl bg-[#0f0f14] border border-white/10 overflow-hidden">

              {/* 🖼 Image */}
              <div className="w-full aspect-[4/3] bg-black overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-contain object-top group-hover:scale-105 transition duration-500"
                  onError={(e) => {
                    e.target.src = "/fallback.jpg";
                  }}
                />
              </div>
              {/* 📄 Content */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {c.title}
                </h3>

                <p className="text-gray-400 text-sm mb-1">
                  {c.org}
                </p>

                <p className="text-gray-500 text-xs mb-3">
                  {c.desc}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    {c.date}
                  </span>

                  <span
                    className="text-[10px] px-3 py-1 rounded-full font-medium"
                    style={{
                      background: `${c.accent}20`,
                      color: c.accent,
                    }}
                  >
                    {c.type}
                  </span>
                </div>
              </div>

              {/* ✨ Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                <div className="absolute -inset-10 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-2xl" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}