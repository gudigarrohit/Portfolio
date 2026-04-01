"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function UploadImage({ onUpload }) {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      // Upload to Cloudinary
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      // Save in DB
      await fetch("/api/images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: data.url,
          type: data.type,
        }),
      });

      onUpload();
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-sm mx-auto space-y-3">
      <motion.label
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="cursor-pointer flex flex-col items-center justify-center gap-3 
        p-4 rounded-xl border border-white/10 
        bg-white/5 backdrop-blur-md text-gray-300 hover:text-white"
      >
        <span>Click to upload image/video</span>

        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleUpload}
          className="hidden"
        />
      </motion.label>

      {loading && (
        <p className="text-center text-gray-400 text-sm animate-pulse">
          Uploading...
        </p>
      )}
    </div>
  );
}