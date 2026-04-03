

import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Back */}
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-white mb-8 inline-block"
        >
          ← Back to Projects
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">
          {project.title}
        </h1>

        {/* Short Desc */}
        <p className="text-gray-400 mb-6 text-lg">
          {project.desc}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-10" />

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            {project.details}
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech?.map((t) => (
              <span
                key={t}
                className="px-3 py-1 border border-white/10 rounded-md text-sm text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Features */}
        {project.features?.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-3">Key Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Buttons */}
        <section className="flex gap-4 mb-12">
          <a
            href={project.live}
            target="_blank"
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            className="px-6 py-2 border border-white/20 hover:border-white rounded-md text-sm"
          >
            View Code
          </a>
        </section>

        {/* ✅ PERFECT IMAGE GRID */}
        {project.images?.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6">Project Preview</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images?.map((img, i) => (
                <div
                  key={i}
                  className="relative h-[500px] w-full overflow-hidden rounded-xl border border-white/10 group"
                >
                  <img
                    src={img}
                    alt={`project-${i}`}
                    className="absolute inset-0 w-full h-full object-cover transition duration-500 ease-out group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="text-white text-sm tracking-wide">
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