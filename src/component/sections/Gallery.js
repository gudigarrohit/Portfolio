"use client";

import { useEffect, useState } from "react";

export default function Gallery({ refresh, setIsModalOpen }) {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState(null);

  // 📡 Fetch images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/images");
        const data = await res.json();

        if (Array.isArray(data)) {
          setImages(data);
        } else {
          setImages([]);
        }
      } catch (err) {
        console.error(err);
        setImages([]);
      }
    };

    fetchImages();
  }, [refresh]);

  // 🎯 Sync modal state with parent (NavDots control)
  useEffect(() => {
    if (setIsModalOpen) {
      setIsModalOpen(!!selected);
    }
  }, [selected, setIsModalOpen]);

  return (
    <>
      {/* 🔳 GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto ">
        {images.map((img) => (
          <div
            key={img._id}
            className="overflow-hidden rounded-xl cursor-pointer group"
            onClick={() => setSelected(img)}
          >
            {img.type === "video" ? (
              <video
                src={img.url}
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition duration-300"
              />
            ) : (
              <img
                src={img.url}
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition duration-300"
                alt=""
              />
            )}
          </div>
        ))}
      </div>

      {/* 🌙 LIGHTBOX */}
      {selected && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ❌ CLOSE BUTTON */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-white text-3xl z-[1000] hover:scale-110 transition"
            >
              ✕
            </button>

            {/* 📸 MEDIA */}
            {selected.type === "video" ? (
              <video
                src={selected.url}
                controls
                autoPlay
                className="w-full max-h-[85vh] rounded-xl"
              />
            ) : (
              <img
                src={selected.url}
                className="w-full max-h-[85vh] object-contain rounded-xl"
                alt=""
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}