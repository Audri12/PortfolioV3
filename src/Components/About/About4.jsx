import React, { useState } from "react";
import "../About/About.css";
import Experience from "./Experience";
import Skills from "./Skills";
import AnimatedSection from "./AnimatedSection";
import Education from "./Education";

const About = () => {
  const [activeSection, setActiveSection] = useState("education");
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="about">
      {/* About Title */}
      <div className="font-aldrich pb-12 pt-12 px-[5%] lg:px-[12%] flex justify-center items-center bg-black ">
        <div className="about-container">
          <h1 className="about-text-outline">About Me</h1>
          <h1 className="about-text">About Me</h1>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#5411ff] to-[#b000c3] absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-3 z-10">
            Career
          </h2>
        </div>
      </div>

      {/* About First Part */}
      <section className="bg-black text-white py-10 px-[5%] lg:px-[12%] sm:px-10 md:px-20 font-aldrich">
        <div className="lg:flex lg:flex-row md:flex-row md:items-center lg:items-center gap-10">
        <div className="relative w-full flex justify-center items-center">
  <img
    src="https://i.postimg.cc/L6p2kcVY/image-1.png"
    alt="Profile"
    className="rounded-xl object-cover shadow-lg lg:h-[560px] h-96"
  />
  <a
    href="#watch-intro"
    className="absolute lg:right-[388px] lg:top-[55px] rotate-90  bg-gradient-to-r from-[#AC01C6] to-[#5411FF] bg-clip-text text-transparent border-transparent border-2 h-16 w-34 md:h-20 md:w-44 text-lg md:text-2xl tracking-tighter rounded-lg flex items-center justify-center px-4 py-2"
    style={{
      borderImage: "linear-gradient(90deg, #AC01C6, #5411FF) 1",
    }}
  >
    Watch Intro
  </a>
</div>

          <div className="mt-5 text-center md:text-left lg:mr-10 md:mr-10">
          
            <p className="text-3xl md:text-4xl font-[400] mb-6">
  <span className="bg-gradient-to-r from-[#AC01C6] to-[#5411FF] bg-clip-text text-transparent">
    Knowledge
  </span>{" "}
  is the key that unlocks the way of possibility
</p>

            
            <p className="text-md md:text-md tracking-wide px-2 font-[300]">
            I&apos;m a strong advocate for mentorship, guiding the next generation of developers toward success. My approach is collaborative and combined with strategic thinking.

</p>
            <AnimatedSection />
          </div>
        </div>
      </section>

      {/* Show More Section */}
      <div className={`font-aldrich bg-black px-[5%] lg:px-[12%]  text-white ${showMore ? "visible-content" : "hidden-content"}`}>
        <div className="flex flex-row border-gray-600 pb-4 pt-4 ">
          <div
            onClick={() => setActiveSection("education")}
            className={`text-xl md:text-4xl cursor-pointer mb-4 md:mb-0 mr-8 ${activeSection === "education" ? "gradient-border-b" : ""}`}
          >
            Education
          </div>
          <div
            onClick={() => setActiveSection("experience")}
            className={`text-xl md:text-4xl cursor-pointer mb-4 md:mb-0 mr-8 ${activeSection === "experience" ? "gradient-border-b" : ""}`}
          >
            Experience
          </div>
          <div
            onClick={() => setActiveSection("skills")}
            className={`text-xl md:text-4xl cursor-pointer mb-4 md:mb-0 mr-8 ${activeSection === "skills" ? "gradient-border-b" : ""}`}
          >
            Skills
          </div>
        </div>
        {activeSection === "education" && <Education />}
        {activeSection === "experience" && <Experience />}
        {activeSection === "skills" && <Skills />}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center bg-black py-[6%] ">
      <button
  onClick={() => setShowMore(!showMore)}
  className={`text-lg text-white bg-gradient-to-r from-[#5411ff] to-[#b000c3] px-4 py-2 rounded flex items-center gap-2 transition-all duration-300 
              ${showMore ? 'animate-slide-up' : 'animate-scale-up'}`}
>
  {showMore ? 'Show Less' : 'Show More'}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-white"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d={`M${showMore ? '5.23 12.79a.75.75 0 011.06 0L10 9.06l3.71 3.73a.75.75 0 001.06-1.06l-4.24-4.25a.75.75 0 00-1.06 0L5.23 11.73a.75.75 0 000 1.06z' 
                   : '5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z'}`}
      clipRule="evenodd"
    />
  </svg>
</button>
      </div>
    </div>
  );
};

export default About;
