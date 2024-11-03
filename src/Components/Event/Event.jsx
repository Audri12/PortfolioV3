import React from "react";
import TeamLead from "./TeamLeadTittle";
import projectImage from "../../assets/demo.png";
import projectImage2 from "../../assets/Group 1941.png";
import icon from "../../assets/iconClick.png";
import './Event.css'


const Project = () => {
  return (
    <div className="bg-black px-[5%] font-aldrich pb-12" id="events">
      <TeamLead></TeamLead>
      <div className="  ">
        <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center pb-6  ">
          {/* Text section */}
          <div className="space-y-4 relative mb-2 left-0 top-0 lg:left-20 lg:-top-5">
            <h4 className=" text-purple-500 font-semibold">Featured Project</h4>
            <h2 className="text-4xl font-bold text-[#CCD6F6]">
              Example Project
            </h2>
            <div className="textt p-8 relative w-[350px] lg:w-[100%] z-10  ">
              <p className="  text-[#CCD6F6] text-justify ">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </p>
            
            </div>
            <div className="flex ">
            <img src={icon} className="mr-5 "/>
            <img src={icon}/>
            </div>
            
          </div>

          {/* Image section */}
          <div className="gradient1">
            <img src={projectImage} className="gradient1 w-11/12 h-full" />
          </div>
        </div>

        {/* 2nd paart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center pb-6">
          {/* Image section */}
          <div className="relative ">
            <img src={projectImage2} className="w-full h-full" />
          </div>
          {/* Text section */}
          <div className="space-y-4 relative left-0 top-0 lg:-left-20 lg:-top-5 ">
            <h4 className=" text-purple-500 font-semibold text text-start lg:text-end">
              Featured Project
            </h4>
            <h2 className="text-4xl font-bold text-[#CCD6F6] text-start lg:text-end">
              Example Project
            </h2>
            <div className="card2 p-8  w-[350px] lg:w-[100%]  z-10 text-start lg:text-end">
              <p className="  text-[#CCD6F6] text-justify ">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </p>
               
            </div>
            <div className="flex lg:justify-end">
            <img src={icon} className="mr-5 "/>
            <img src={icon}/>
            </div>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
