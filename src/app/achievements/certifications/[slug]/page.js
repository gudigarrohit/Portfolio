"use client";

import { certifications } from "@/data/certifications";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
  const router = useRouter();
  const params = useParams();

  const cert = certifications.find(
    (c) =>
      c.slug?.toLowerCase().trim() ===
      params.slug?.toLowerCase().trim()
  );

  if (!cert) {
    return (
      <div className="text-white p-10">
        Certificate not found ❌
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">

      {/* Back */}
      <motion.button
        onClick={() => router.back()}
        whileHover={{ x: -4 }}
        className="mb-10 flex items-center gap-2 text-gray-400 hover:text-white"
      >
        <ArrowLeft size={18} />
        Back
      </motion.button>

      {/* Layout */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Image */}
        <motion.img
          src={cert.image}
          alt={cert.title}
          className="rounded-2xl border border-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold mb-4">
            {cert.title}
          </h1>

          <p className="text-gray-400 mb-2">
            {cert.org}
          </p>

          <span
            className="inline-block px-3 py-1 rounded-full text-xs mb-4"
            style={{
              background: `${cert.accent}20`,
              color: cert.accent,
            }}
          >
            {cert.type}
          </span>

          <p className="text-gray-500 mb-6">
            {cert.date}
          </p>

          <p className="text-gray-300 leading-relaxed">
            {cert.details}
          </p>
        </motion.div>
      </div>
    </div>
  );
}