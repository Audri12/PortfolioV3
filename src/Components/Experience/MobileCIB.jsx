import React, { useEffect, useRef } from 'react';
import '../../genisis-project/src/assets/Gradient.png';
import '../../genisis-project/src/MobbileCIB.css';

const MobileCIB = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Adds 'animate-slide' class when the section is in view
            entry.target.classList.add(index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      cardRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <div className='MobbileCIB pt-48 py-5'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 px-[10%]">
        
        {/* Card Sections */}
        {[
          { src: "https://i.postimg.cc/9XGyNfbN/Group-2.png", title: "CIB on the Mobile" },
          { src: "https://i.postimg.cc/vBGxJr3q/Group-1935.png", title: "CIB on the Mobile" },
          { src: "https://i.postimg.cc/25GSBP7G/Group-1938.png", title: "CIB on the Mobile" },
          { src: "https://i.postimg.cc/2jsLmNcL/Icons.png", title: "CIB on the Mobile" }
        ].map((card, index) => (
          <div 
            ref={(el) => (cardRefs.current[index] = el)}
            key={index}
            className="card bg-gradient-to-r from-[#130428] via-[#251043] via-[#38126D] via-[#261045] to-[#190634] border-t-4 border-t-[#693B93] p-6 rounded-lg flex flex-col text-white shadow-md hover:shadow-lg transition-shadow duration-300 opacity-0"
          >
            <div className='flex gap-10'>
              <div>
                <img src={card.src} className='mt-2 mr-2 text-8xl' alt="" />
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">{card.title}</h3>
                <p className="mb-4 text-sm pr-24">Take your client onboard seamlessly by our amazing tool of digital onboard process.</p>
                <button className="mt-auto py-2 px-4 border border-[#693B93] bg-[#2C1250] hover:bg-[#2C1250] text-white w-44 rounded-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileCIB;