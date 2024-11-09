import React from "react";
import TeamLead from "./TeamLeadTittle";
import projectImage from "../../assets/demo.png";
import projectImage2 from "../../assets/Group.png";
import icon from "../../assets/iconClick.png";
import "./Event.css";

const Project = () => {
  return (
    <div className="bg-black font-aldrich px-[5%] pb-12" id="events">
      <TeamLead></TeamLead>
      <div className="">
        <div className="fullpagebg sm:bg-none">
          {/* First Part */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center pb-6">
            {/* Text section */}
            <div className="space-y-4 relative mb-2">
              <h4 className="text-purple-500 font-semibold">
                Featured Project
              </h4>
              <h2 className="text-4xl font-bold text-[#CCD6F6]">
                Example Project
              </h2>
              <div className="textt p-8 relative w-[350px] lg:w-[100%] z-10">
                <p className="text-[#CCD6F6] text-justify">
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>
              <div className="flex">
                <img src={icon} className="mr-5" />
                <img src={icon} />
              </div>
            </div>

            {/* Enlarged Image section */}
            <div className="gradient1 relative overflow-hidden -ml-0 md:-ml-16 lg:-ml-10">
              <img
                src={projectImage}
                className="w-[140%] h-[140%] object-cover"
              />
            </div>
          </div>

          {/* Second Part */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center pt-6 pb-6 lg:pt-48 lg:pb-48">
            {/* Enlarged Image section */}
            <div className="relative overflow-hidden order-last md:order-first -mr-0 md:-mr-16 lg:-mr-10 ">
              <img
                src={projectImage2}
                className="w-[140%] h-[140%] object-cover"
              />
            </div>

            {/* Text section */}
            <div className="space-y-4 relative">
              <h4 className="text-purple-500 font-semibold text-start lg:text-end">
                Featured Project
              </h4>
              <h2 className="text-4xl font-bold text-[#CCD6F6] text-start lg:text-end">
                Example Project
              </h2>
              <div className="card2 p-8 w-[350px] lg:w-[100%] z-10 text-start lg:text-end">
                <p className="text-[#CCD6F6] text-justify">
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>
              <div className="flex order-first md:order-last lg:justify-end">
                <img src={icon} className="mr-5" />
                <img src={icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;