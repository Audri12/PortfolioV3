import React, { useState } from "react";
import { FaHome, FaUserAlt, FaCalendarAlt, FaPhoneAlt, FaEdit } from "react-icons/fa"; // import icons
import { GrGallery } from "react-icons/gr";

const LastNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <ul className="flex space-x-5 md:space-x-12 justify-center font-aldrich text-white p-4 px-8 ">
        <li
          className={`relative h-full transition-all duration-200 ease-linear cursor-pointer hover:text-[#5411ff] ${
            activeIndex === 0 ? "text-white" : ""
          }`}
          onClick={() => setActiveIndex(0)}
        >
          <a href="#home" className="flex items-center space-x-2">
            <FaHome />
            <span>Home</span>
          </a>
        </li>
        
        <li
          className={`relative h-full transition-all duration-200 ease-linear cursor-pointer hover:text-[#5411ff] ${
            activeIndex === 1 ? "text-white" : ""
          }`}
          onClick={() => setActiveIndex(1)}
        >
          <a href="#about" className="flex items-center space-x-2">
            <FaUserAlt />
            <span>About Me</span>
          </a>
        </li>
        
        <li
          className={`relative h-full transition-all duration-200 ease-linear cursor-pointer hover:text-[#5411ff] ${
            activeIndex === 3 ? "text-white" : ""
          }`}
          onClick={() => setActiveIndex(3)}
        >
          <a href="#contact" className="flex items-center space-x-2">
            <FaPhoneAlt />
            <span>Contact</span>
          </a>
        </li>
        
        <li
          className={`relative h-full transition-all duration-200 ease-linear cursor-pointer hover:text-[#5411ff] ${
            activeIndex === 2 ? "text-white" : ""
          }`}
          onClick={() => setActiveIndex(2)}
        >
          <a href="#events" className="flex items-center space-x-2">
            <FaCalendarAlt />
            <span>Event</span>
          </a>
        </li>
        
        <li
          className={`relative h-full transition-all duration-200 ease-linear cursor-pointer hover:text-[#5411ff] ${
            activeIndex === 4 ? "text-white" : ""
          }`}
          onClick={() => setActiveIndex(4)}
        >
          <a href="#gallery" className="flex items-center space-x-2">
          <GrGallery />
            <span>Gallery</span>
          </a>
        </li>
        
        <li
          className={`relative h-full transition-all duration-200 ease-linear cursor-pointer hover:text-[#5411ff] ${
            activeIndex === 3 ? "text-white" : ""
          }`}
          onClick={() => setActiveIndex(3)}
        >
          <a href="#contact" className="flex items-center space-x-2">
            <FaPhoneAlt />
            <span>Contact</span>
          </a>
        </li>
        
       
      </ul>
    </div>
  );
};

export default LastNavbar;
