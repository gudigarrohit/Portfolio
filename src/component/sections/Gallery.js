"use client";

import { useEffect, useState } from "react";

export default function Gallery({ refresh }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/images");

        if (!res.ok) return;

        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchImages();
  }, [refresh]);

  return (
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
  {images.map((img) => (
    <div key={img._id} className="overflow-hidden rounded-lg">
      
      {img.url.includes("video") ? (
        <video
          src={img.url}
          controls
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <img
          src={img.url}
          className="w-full h-full object-cover rounded-lg"
        />
      )}

    </div>
  ))}
</div>
  );
}