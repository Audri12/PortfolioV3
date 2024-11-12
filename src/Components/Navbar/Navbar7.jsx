import React, { useState, useEffect } from "react";

const Navbar7 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = Array.from(sections).indexOf(entry.target);
            setActiveIndex(sectionIndex);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Large screen navbar */}
      <ul className="hidden lg:flex space-x-5 md:space-x-12 justify-center font-aldrich text-white p-4 px-8 border rounded-lg bg-white bg-opacity-30">
        <li
          className={`relative h-full transition-all duration-200 ease-linear cursor-pointer hover:text-[#5411ff] ${
            activeIndex === 0 ? "text-white" : ""
          }`}
          onClick={() => setActiveIndex(0)}
        >
          <a href="#home">Home</a>
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
          <a href="#about">About Me</a>
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
          <a href="#events">Event</a>
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
            activeIndex === 2 ? "text-white" : ""
          }`}
          onClick={() => setActiveIndex(2)}
        >
          <a href="#gallery">Gallery</a>
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
          <a href="#contact">Contact</a>
          <span
            className={`absolute left-[-10px] right-[-10px] bottom-0 h-0.5 transition-all duration-300 ease-in-out ${
              activeIndex === 3
                ? "bg-gradient-to-r from-[#5411ff] to-[#b000c3]"
                : "bg-transparent"
            }`}
          ></span>
        </li>
      </ul>

      {/* Mobile & Medium screen navbar */}
      <div className="lg:hidden">
        <div className="flex justify-between items-center p-4 bg-dark">
          <h1 className="text-white font-bold">Portfolio</h1>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            ☰
          </button>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <ul className="flex flex-col space-y-3 p-4 bg-dark">
            <li
              className={`transition-all duration-200 ease-linear cursor-pointer hover:text-[#5411ff] ${
                activeIndex === 0 ? "text-white bg-blue-600" : "text-white"
              }`}
              onClick={() => {
                setActiveIndex(0);
                setIsOpen(false);
              }}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={`transition-all duration-200 ease-linear cursor-pointer hover:text-[#5411ff] ${
                activeIndex === 1 ? "text-white bg-blue-600" : "text-white"
              }`}
              onClick={() => {
                setActiveIndex(1);
                setIsOpen(false);
              }}
            >
              <a href="#about">About Me</a>
            </li>
            <li
              className={`transition-all duration-200 ease-linear cursor-pointer hover:text-[#5411ff] ${
                activeIndex === 2 ? "text-white bg-blue-600" : "text-white"
              }`}
              onClick={() => {
                setActiveIndex(2);
                setIsOpen(false);
              }}
            >
              <a href="#events">Event</a>
            </li>
            <li
              className={`transition-all duration-200 ease-linear cursor-pointer hover:text-[#5411ff] ${
                activeIndex === 2 ? "text-white bg-blue-600" : "text-white"
              }`}
              onClick={() => {
                setActiveIndex(2);
                setIsOpen(false);
              }}
            >
              <a href="#gallery">Gallery</a>
            </li>
            <li
              className={`transition-all duration-200 ease-linear cursor-pointer hover:text-[#5411ff] ${
                activeIndex === 3 ? "text-white bg-blue-600" : "text-white"
              }`}
              onClick={() => {
                setActiveIndex(3);
                setIsOpen(false);
              }}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar7;
