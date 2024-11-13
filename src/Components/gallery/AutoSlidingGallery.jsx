import React, { useEffect, useRef } from "react";
const AutoSlidingGallery = () => {
  const galleryRef = useRef(null);
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (galleryRef.current) {
        galleryRef.current.scrollBy({ left: galleryRef.current.offsetWidth, behavior: "smooth" });
      }
    }, 2000); // Adjust the delay for the scrolling speed (in milliseconds)
    return () => clearInterval(scrollInterval);
  }, []);
  return (
    <div className="overflow-hidden w-full">
      <div
        ref={galleryRef}
        className="flex w-max space-x-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Replace these images with your actual images */}
        <div className="min-w-[300px] h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/300')" }}></div>
        <div className="min-w-[300px] h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/300')" }}></div>
        <div className="min-w-[300px] h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/300')" }}></div>
        <div className="min-w-[300px] h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/300')" }}></div>
        <div className="min-w-[300px] h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/300')" }}></div>
      </div>
    </div>
  );
};
export default AutoSlidingGallery;