import React, { useEffect, useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(97), 500); // Delays the start for a smoother animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="justify-center pt-10 font-aldrich pb-12 bg-black text-white">
      {/* Header Section */}
      {/* Uncomment the header section if needed */}
      {/* <div className="flex flex-col sm:flex-row pb-10">
           <h1 className="text-4xl mr-8 cursor-pointer py-2">Education</h1>
           <h1 className="text-4xl mr-8 cursor-pointer py-2 gradient-border-b">Experience</h1>
           <h1 className="text-4xl mr-8 cursor-pointer py-2">Skills</h1>
         </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Experience Section */}
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
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

        {/* Company Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Company</h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Company items */}
            {[
              {
                title: "Head of Information Technology",
                company: "Masco Group",
                experience: "11 Years",
                dates: "Feb 2006 - Oct 2016"
              },
              {
                title: "Head of Information Technology",
                company: "Next IT Ltd",
                experience: "1.4 Years",
                dates: "Nov 2016 - Feb 2018"
              },
              {
                title: "Head of Information Technology",
                company: "Impress Group",
                experience: "4.2 Years",
                dates: "Nov 2016 - Feb 2018"
              },
              {
                title: "Head of Information Technology",
                company: "Skylark Soft Ltd",
                experience: "4.2 Years",
                dates: "Nov 2016 - Feb 2018"
              }
            ].map((job, index) => (
              <div key={index} className="flex flex-col-14 mb-6">
                <div className="col-span-3 mr-2">
                  <img src="https://i.postimg.cc/QMQNbrcJ/Rectangle-37.png" className="w-5" alt={`${job.company} logo`} />
                </div>
                <div className="col-span-8">
                  <h1>{job.title}</h1>
                  <p>{job.company}, Experience: {job.experience}</p>
                  <p>{job.dates}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
