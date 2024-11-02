import React from 'react'
import './TeamLead.css'


const TeamLead = () => {
  return (
    <div className=" font-aldrich pb-12 flex justify-center items-center pt-20">
    


<div className="team-container">
      {/* Second layer: gray outline */}
      <h1 className="team-text-outline ">
      ATTENDED
      </h1>

      {/* First layer: black text */}
      <h1 className="team-text ">
      ATTENDED
      </h1>

      {/* Career with gradient fill, overlapping and on top */}
      <h2 className=" text-4xl md:text-6xl font-bold uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#5411ff] to-[#b000c3]  absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-3 z-10">
      EVENT
      </h2>
    </div>


    </div>
  )
}

export default TeamLead
