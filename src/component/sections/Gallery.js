"use client";

import { useEffect, useState } from "react";

export default function Gallery({ refresh }) {
  const [images, setImages] = useState([]);

useEffect(() => {
  const fetchImages = async () => {
    try {
      const res = await fetch("/api/images");

      if (!res.ok) {
        console.error(await res.text());
        return;
      }

      const data = await res.json();

      // ✅ Ensure it's always an array
      if (Array.isArray(data)) {
        setImages(data);
      } else {
        console.error("Not an array:", data);
        setImages([]); // fallback
      }

    } catch (err) {
      console.error(err);
      setImages([]);
    }
  };

  fetchImages();
}, [refresh]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {images.map((img) => (
        <div key={img._id} className="overflow-hidden rounded-lg">

          {img.type === "video" ? (
            <video
              src={img.url}
              controls
              preload="metadata"
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <img
              src={img.url}
              className="w-full h-full object-cover rounded-lg"
              alt=""
            />
          )}

        </div>
      ))}
    </div>
  );
}