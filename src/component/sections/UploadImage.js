"use client";

import { useState } from "react";
import { toBase64 } from "@/utils/base64";
import { motion } from "framer-motion";

export default function UploadImage() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const base64 = await toBase64(file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: JSON.stringify({ image: base64 }),
    });

    const data = await res.json();
    setImageUrl(data.url);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-sm mx-auto space-y-4">

      {/* 🔥 Upload Box */}
      <motion.label
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative cursor-pointer flex flex-col items-center justify-center gap-3 
        p-[clamp(1rem,2vw,1.5rem)] rounded-xl 
        border border-white/10 
        bg-white/5 backdrop-blur-md 
        text-gray-300 hover:text-white transition 
        overflow-hidden group"
      >
        {/* Gradient border glow */}
        <div className="absolute inset-0 rounded-xl border border-transparent 
        group-hover:border-indigo-500/40 transition" />

        {/* Glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition" />

        <span className="text-[clamp(0.75rem,1vw,0.9rem)] relative z-10">
          Click to upload image
        </span>

        <input
          type="file"
          onChange={handleUpload}
          className="hidden"
        />
      </motion.label>

      {/* 🔄 Loading */}
      {loading && (
        <p className="text-center text-gray-400 text-sm animate-pulse">
          Uploading...
        </p>
      )}

      {/* 🖼️ Preview */}
      {imageUrl && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <img
            src={imageUrl}
            className="w-full rounded-xl border border-white/10"
          />

          {/* Overlay glow */}
          <div className="absolute inset-0 rounded-xl 
          bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>
      )}
    </div>
  );
}