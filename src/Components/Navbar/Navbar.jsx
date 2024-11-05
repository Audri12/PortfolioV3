import React, { useState } from "react";
import { FaHome, FaUserAlt, FaCalendarAlt, FaPhoneAlt, FaEdit } from "react-icons/fa"; // import icons

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="fixed">
      <ul className="flex space-x-5 md:space-x-12 justify-center font-aldrich text-white p-4 px-8 border rounded-lg bg-white bg-opacity-30">
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
          <span
            className={`absolute left-[-10px] right-[-10px] bottom-0 h-0.5 transition-all duration-300 ease-in-out ${
              activeIndex === 0
                ? "bg-gradient-to-r from-[#5411ff] to-[#b000c3]"
                : "bg-transparent"
            }`}
          ></span>
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
          <span
            className={`absolute left-[-10px] right-[-10px] bottom-0 h-0.5 transition-all duration-300 ease-in-out ${
              activeIndex === 1
                ? "bg-gradient-to-r from-[#5411ff] to-[#b000c3]"
                : "bg-transparent"
            }`}
          ></span>
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
          <span
            className={`absolute left-[-10px] right-[-10px] bottom-0 h-0.5 transition-all duration-300 ease-in-out ${
              activeIndex === 2
                ? "bg-gradient-to-r from-[#5411ff] to-[#b000c3]"
                : "bg-transparent"
            }`}
          ></span>
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
          <span
            className={`absolute left-[-10px] right-[-10px] bottom-0 h-0.5 transition-all duration-300 ease-in-out ${
              activeIndex === 3
                ? "bg-gradient-to-r from-[#5411ff] to-[#b000c3]"
                : "bg-transparent"
            }`}
          ></span>
        </li>
        
        {/* <li
          className={`relative h-full transition-all duration-200 ease-linear cursor-pointer hover:text-[#5411ff] ${
            activeIndex === 4 ? "text-white" : ""
          }`}
          onClick={() => setActiveIndex(4)}
        >
          <a href="#blog" className="flex items-center space-x-2">
            <FaEdit />
            <span>Blog</span>
          </a>
          <span
            className={`absolute left-[-10px] right-[-10px] bottom-0 h-0.5 transition-all duration-300 ease-in-out ${
              activeIndex === 4
                ? "bg-gradient-to-r from-[#5411ff] to-[#b000c3]"
                : "bg-transparent"
            }`}
          ></span>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
