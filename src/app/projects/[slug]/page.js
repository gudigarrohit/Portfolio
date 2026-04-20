import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
          {/* 🔙 Glass Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-xl 
          bg-white/5 backdrop-blur-md border border-white/10 
          text-gray-300 hover:text-white hover:bg-white/10 
          transition-all duration-300"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      <div className="max-w-5xl mx-auto">

    
        {/* 🔥 Title Section */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {project.title}
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl">
            {project.desc}
          </p>
        </div>

        {/* 🌈 Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />

        {/* 📦 Overview */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-white/90">
            Overview
          </h2>

          <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            <p className="text-gray-300 leading-relaxed">
              {project.details}
            </p>
          </div>
        </section>

        {/* ⚙️ Tech Stack */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>

          <div className="flex flex-wrap gap-3">
            {project.tech?.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-sm rounded-full 
                bg-white/5 border border-white/10 
                hover:bg-white/10 transition"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* 🚀 Features */}
        {project.features?.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Key Features</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((f, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                >
                  <p className="text-gray-300 text-sm">• {f}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 🔗 Buttons */}
        <section className="flex flex-wrap gap-4 mb-14">
          <a
            href={project.live}
            target="_blank"
            className="px-6 py-2 rounded-xl text-sm font-medium 
            bg-gradient-to-r from-indigo-500 to-purple-500 
            hover:opacity-90 transition"
          >
            🚀 Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            className="px-6 py-2 rounded-xl text-sm font-medium 
            border border-white/20 hover:border-white 
            bg-white/5 hover:bg-white/10 transition"
          >
            💻 View Code
          </a>
        </section>

        {/* 🖼️ Image Grid (FIXED CLEAN) */}
        {project.images?.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6">
              Project Preview
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-xl border border-white/10 group"
                >
                  {/* Image */}
                  <img
                    src={img}
                    alt={`project-${i}`}
                    className="w-full h-auto object-contain bg-black transition duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="text-sm tracking-wide text-white">
                      Preview
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}