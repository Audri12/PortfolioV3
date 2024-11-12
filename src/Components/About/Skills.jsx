import React, { useEffect, useState } from "react";

const Skills = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(97), 500); // Animation delay for smooth effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="justify-center pt-10 font-aldrich pb-12 bg-black text-white">
      {/* Header Section */}
      {/* Uncomment the header section if needed */}
      {/* <div className='flex flex-col sm:flex-row pb-10 '>
         <h1 className="text-4xl mr-8 cursor-pointer py-2">Education</h1>
         <h1 className="text-4xl mr-8 cursor-pointer py-2">Experience</h1>
         <h1 className="text-4xl mr-8 cursor-pointer border-[#a855f7] border-b-2 py-2">Skills</h1>
       </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        {/* Experience Section */}
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <p className="text-xl mb-6">
            Experience is a silent teacher, often unfolding in moments of trial and triumph. It shapes our understanding, revealing lessons we couldn’t grasp from words alone.
          </p>
          
          {/* Efforts Section with Animated Progress Bar */}
          <div className="flex justify-between items-center mb-2">
            <span>Efforts</span>
            <span>{progress}%</span>
          </div>
          
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-[#5411ff] to-[#b000c3] h-2.5 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Certification items */}
            {[
              {
                title: "Cisco Networking Academy",
                certification: "Cisco Certified Network Associate - R&S (CCNA)",
                dates: "Feb 2006 - Oct 2016"
              },
              {
                title: "Microsoft Ignite",
                certification: "Microsoft Certified Professional (MCP)",
                dates: "Nov 2016 - Feb 2018"
              },
              {
                title: "Microsoft Ignite",
                certification: "Microsoft Certified Solutions Associate (MCSA)",
                dates: "Nov 2016 - Feb 2018"
              },
              {
                title: "Microsoft Ignite",
                certification: "Microsoft Certified Solutions Expert (MCSE)",
                dates: "Nov 2016 - Feb 2018"
              }
            ].map((cert, index) => (
              <div key={index} className="flex flex-col-14 mb-6">
                <div className="col-span-3 mr-2">
                  <img src="https://i.postimg.cc/QMQNbrcJ/Rectangle-37.png" className="w-6" alt={`${cert.title} logo`} />
                </div>
                <div className="col-span-8">
                  <h1>{cert.title}</h1>
                  <p>{cert.certification}</p>
                  <p>{cert.dates}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
