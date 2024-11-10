import React, { useState } from "react";
import "../About/About.css";
import Experience from "./Experience";
import Skills from "./Skills";
import "./Experience.css";

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
      {/* //Tittle end */}
      {/* about first part  */}
      <section className="bg-black text-white py-10  sm:px-10 md:px-20 font-aldrich">
        <div className="">
          {/* Top Section with Image and Text */}
          <div className="lg:flex lg:flex-row md:flex-row md:items-center lg:items-center gap-10">
            {/* Left Side - Image */}
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
              {/* Image */}
              <img
                src="https://i.postimg.cc/L6p2kcVY/image-1.png" // replace this with your image path
                alt="Profile"
                className="rounded-xl object-cover shadow-lg lg:h-[560px] h-96 "
                style={{ width: "", height: "" }}
              />

              {/* Watch Intro Button */}
              <a
                href="#watch-intro"
                className="absolute lg:right-[388px] lg:top-[55px] border-2 bg-black border-transparent bg-gradient-to-r from-[#AC01C6] to-[#5411FF] md:right-[146px] md:top-[55px] right-[251px] top-[14px] transform -translate-y-12 md:-translate-y-24 h-16 w-34 md:h-20 md:w-44 text-lg md:text-2xl tracking-tighter  bg-clip-text text-transparent px-4 py-2 rounded-lg flex items-center rotate-90 origin-left"
                style={{
                  borderImage: "linear-gradient(90deg, #AC01C6, #5411FF) 1",
                }}
              >
                Watch Intro
              </a>
            </div>

            {/* Right Side - Text */}
            <div className="mt-5 md:w-1/2 text-center md:text-left lg:mr-10 md:mr-10  ">
              <p className="text-3xl md:text-4xl font-[400] mb-6 ">
                <p className="">
                  {" "}
                  <span className="bg-gradient-to-r bg-clip-text  from-[#AC01C6] to-[#5411FF] text-transparent">
                    Knowledge
                  </span>{" "}
                  is the key that unlocks the way of possibility
                </p>
              </p>
              <p className="text-md md:text-md tracking-wide px-2 font-[300]">
                I’m a strong advocate for mentorship, guiding the next
                generation of developers toward success. My approach is
                collaborative and combined with strategic thinking.
              </p>

              {/* Progress Bars Section */}
              <div className="mt-10">
                {/* Progress bars */}
                <div className="flex flex-col md:flex-row justify-between mb-6 gap-10 md:gap-14 px-3">
                  <div className="w-full md:w-1/2 pr-4">
                    <div className="mb-2">Opportunity Created</div>
                    <div className="bg-gray-800 w-full rounded-full h-3 mb-2">
                      <div className="flex">
                        <div
                          className="bg-gradient-to-r from-[#D500EC] to-[#5710FD] h-3  rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                        <div className="ml-2 mt-[-4px] text-sm">92%</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 pl-4">
                    <div className="mb-2">Skill Developed</div>
                    <div className="bg-gray-800 w-full rounded-full h-3 mb-2">
                      <div className="flex">
                        <div
                          className="bg-gradient-to-r from-[#D500EC] to-[#5710FD] h-3 rounded-full"
                          style={{ width: "95%" }}
                        ></div>
                        <div className="ml-2 mt-[-4px] text-sm">95%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-14 px-3">
                  <div className="w-full md:w-1/2 pr-4">
                    <div className="mb-2">Time Spent</div>
                    <div className="bg-gray-800 w-full rounded-full h-3 mb-2">
                      <div className="flex">
                        <div
                          className="bg-gradient-to-r from-[#D500EC] to-[#5710FD] h-3 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                        <div className="ml-2 mt-[-4px] text-sm">85%</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 pl-4">
                    <div className="mb-2">Consulted</div>
                    <div className="bg-gray-800 w-full rounded-full h-3 mb-2">
                      <div className="flex">
                        <div
                          className="bg-gradient-to-r from-[#D500EC] to-[#5710FD] h-3 rounded-full"
                          style={{ width: "94%" }}
                        ></div>
                        <div className="ml-2 mt-[-4px] text-sm">94%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="mt-10 flex flex-col justify-center md:justify-start items-center md:items-start">
                <div className=" text-3xl bg-gradient-to-r bg-clip-text  from-[#D500EC] to-[#5101F8] text-transparent ">
                  ◆{" "}
                  <span className="text-white text-lg">
                    Embrace Endless Growth
                  </span>
                </div>
                <div className=" text-3xl  bg-gradient-to-r bg-clip-text  from-[#D500EC] to-[#5101F8] text-transparent">
                  ◆{" "}
                  <span className="text-white text-lg">
                    Pursue Greatness Relentlessly
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end of about first part  */}
      {/* Show More Button */}
      {!showMore && (
        <div className="flex justify-center font-aldrich bg-black pb-[8%]">
          <button
            onClick={() => setShowMore(true)}
            className="text-lg text-white bg-gradient-to-r from-[#5411ff] to-[#b000c3] px-4 py-2 rounded flex items-center gap-2"
          >
            Show More
            {/* Down Arrow Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}

      {/* About Content */}
      {showMore && (
        <div className="bg-black text-white font-aldrich px-[5%] lg:px-[12%] py-[5%]">
          {/* Navigation Tabs */}
          <div className="flex  flex-row border-gray-600 pb-4">
            <div
              onClick={() => setActiveSection("education")}
              className={`text-xl md:text-4xl cursor-pointer ${
                activeSection === "education" ? "gradient-border-b" : ""
              } mb-4 md:mb-0 mr-8`}
            >
              Education
            </div>
            <div
              onClick={() => setActiveSection("experience")}
              className={`text-xl md:text-4xl cursor-pointer ${
                activeSection === "experience" ? "gradient-border-b" : ""
              } mb-4 md:mb-0 mr-8`}
            >
              Experience
            </div>
            <div
              onClick={() => setActiveSection("skills")}
              className={`text-xl md:text-4xl cursor-pointer ${
                activeSection === "skills" ? "gradient-border-b" : ""
              } mb-4 md:mb-0 mr-8`}
            >
              Skills
            </div>
          </div>

          {/* Conditionally Rendered Content */}
          {activeSection === "education" && (
            <div className="mt-8 font-aldrich">
              {/* Education Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between space-y-8 md:space-y-0 md:space-x-8">
                <div>
                  <div className="text-3xl">Education</div>
                  <h3 className="text-lg md:text-xl">
                    <span>
                      BSc. & MSc in CS, CCNA, MCP, MCSA, MCSE, RHCT, RHCSA, RHCE
                    </span>
                    <br />
                    Has extensive experience in Cybersecurity, IT
                    Infrastructure, and Technology Training
                  </h3>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-center text-md">
                      <span className="h-4 w-4 bg-gradient-to-r from-[#AC01C6] to-[#5411FF] mr-2"></span>
                      Performed Excellent Result
                    </li>
                    <li className="flex items-center text-md">
                      <span className="h-4 w-4 bg-gradient-to-r from-[#AC01C6] to-[#5411FF] mr-2"></span>
                      Joined in Extra Curricular Activities
                    </li>
                    <li className="flex items-center text-md">
                      <span className="h-4 w-4 bg-gradient-to-r from-[#AC01C6] to-[#5411FF] mr-2"></span>
                      Wonderful achievement in sports
                    </li>
                  </ul>
                </div>

                {/* Passing Years */}
                <div>
                  <h1 className="text-2xl sm:text-3xl mt-4 sm:mt-0 mb-5 md:mb-5">
                    Passing Years
                  </h1>
                  <div className="grid grid-cols-2">
                    <div>
                      <p className="text-base md:text-lg text-gray-300 gradient-border-b mb-5">
                        2000-2002
                      </p>
                      <p className="text-base md:text-lg tracking-tighter">
                        MSc. in Computer Science
                      </p>
                      <p className="mt-6 text-base md:text-lg text-gray-300 gradient-border-b mb-5">
                        1994-1996
                      </p>
                      <p className="text-base md:text-lg tracking-tighter mb-5">
                        Higher Secondary School Certificate
                      </p>
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-gray-300 gradient-border-b">
                        1995-2000
                      </p>
                      <p className="text-base md:text-lg md:mb-5 sm:mb-5">
                        BSc. in Computer Science
                      </p>
                      <p className="mt-6 text-base md:text-lg text-gray-300 gradient-border-b">
                        1992-1994
                      </p>
                      <p className="text-base md:text-lg">
                        Secondary School Certificate
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "experience" && <Experience />}
          {activeSection === "skills" && <Skills />}

          {/* Show Less Button */}
          <div className="flex justify-center mt-4 py-[8%]">
            <button
              onClick={() => setShowMore(false)}
              className="text-lg text-white bg-gradient-to-r from-[#5411ff] to-[#b000c3] px-4 py-2 rounded flex items-center gap-2"
            >
              Show Less
              {/* Up Arrow Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 12.79a.75.75 0 011.06 0L10 9.06l3.71 3.73a.75.75 0 001.06-1.06l-4.24-4.25a.75.75 0 00-1.06 0L5.23 11.73a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
