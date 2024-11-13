import React, { useState, useEffect, useRef } from 'react';

const AnimatedProgressBar = ({ label, target, animate }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (animate) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < target) return prev + 1;
          clearInterval(interval);
          return target;
        });
      }, 20);
      return () => clearInterval(interval);
    }
  }, [target, animate]);

  return (
    <div className="w-full">
      <div className="mb-2 text-white text-sm font-semibold">{label}</div>
      <div className="bg-gray-800 w-full rounded-full h-3 mb-2">
        <div className="flex items-center">
          <div
            className="bg-gradient-to-r from-[#D500EC] to-[#5710FD] h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
          <div className="ml-2 mt-[-4px] text-sm text-white font-semibold">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};

const AnimatedSection = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const progressData = [
    { label: 'Opportunity Created', target: 92 },
    { label: 'Skill Developed', target: 95 },
    { label: 'Time Spent', target: 85 },
    { label: 'Consulted', target: 94 },
  ];

  return (
    <div ref={sectionRef} className="mt-10">
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-10 md:gap-14 px-3">
        {progressData.slice(0, 2).map((item, index) => (
          <div key={index} className="w-full md:w-1/2">
            <AnimatedProgressBar label={item.label} target={item.target} animate={animate} />
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-14 px-3">
        {progressData.slice(2, 4).map((item, index) => (
          <div key={index} className="w-full md:w-1/2">
            <AnimatedProgressBar label={item.label} target={item.target} animate={animate} />
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col justify-center md:justify-start items-center md:items-start">
        <div className="text-3xl bg-gradient-to-r bg-clip-text from-[#D500EC] to-[#5101F8] text-transparent ">
          ◆ <span className="text-white text-lg">Embrace Endless Growth</span>
        </div>
        <div className="text-3xl bg-gradient-to-r bg-clip-text from-[#D500EC] to-[#5101F8] text-transparent ">
          ◆ <span className="text-white text-lg">Pursue Greatness Relentlessly</span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedSection;
