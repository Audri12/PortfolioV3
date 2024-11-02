import React from 'react';
import './Experience.css'

const Experience = () => {
  return (
    <div>
      <div className="justify-center pt-28 font-aldrich pb-12  bg-black  text-white">

        

       {/* Header Section */}
       {/* <div className="flex flex-col sm:flex-row pb-10">
  <h1 className="text-4xl mr-8 cursor-pointer py-2">Education</h1>
  <h1 className="text-4xl mr-8 cursor-pointer py-2 gradient-border-b">Experience</h1>
  <h1 className="text-4xl mr-8 cursor-pointer py-2">Skills</h1>
</div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-[4%]">
          {/* Experience Section */}
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <p className=" text-xl mb-6">
              Experience is a silent teacher, often unfolding in moments of trial and triumph. It shapes our understanding, revealing lessons we couldn’t grasp from words alone.
            </p>
            <div className="flex justify-between items-center mb-2">
              <span>Efforts</span>
              <span>97%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-[#5411ff] to-[#b000c3] h-2.5 rounded-full" style={{ width: "97%" }}></div>
            </div>
          </div>

          



          {/* company section2 */}
          <div>
          <h2 className="text-3xl font-bold mb-6">Company</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 ">

          <div className="flex flex-col-14  mb-6  ">
            <div className="col-span-3 mr-2">
            <img src="https://i.postimg.cc/QMQNbrcJ/Rectangle-37.png" className="w-5"/>
            </div>
            <div className="col-span-8">
            <h1>Head of Information Technology</h1>
            <p>Masco Group, Experience: 11 Years</p>
            <p>Feb 2006 - Oct 2016</p>
            </div>
            </div>

            <div className="flex flex-col-14  mb-6">
            <div className="col-span-3 mr-2">
            <img src="https://i.postimg.cc/QMQNbrcJ/Rectangle-37.png" className="w-5"/>
            </div>
            <div className="col-span-8">
            <h1>Head of Information Technology</h1>
            <p>Next IT Ltd, Experience: 1.4 Years </p>
            <p>Nov 2016 - Feb 2018</p>
            </div>
            </div>

            <div className="flex flex-col-14  mb-6">
            <div className="col-span-3 mr-2">
            <img src="https://i.postimg.cc/QMQNbrcJ/Rectangle-37.png" className="w-5"/>
            </div>
            <div className="col-span-8">
            <h1>Head of Information Technology</h1>
            <p>Impress Group, Experience: 4.2 Years
            </p>
            <p>Nov 2016 - Feb 2018</p>
            </div>
            </div>

            <div className="flex flex-col-14  mb-6">
            <div className="col-span-3 mr-2">
            <img src="https://i.postimg.cc/QMQNbrcJ/Rectangle-37.png" className="w-5"/>
            </div>
            <div className="col-span-8">
            <h1>Head of Information Technology</h1>
            <p>Skylark Soft Ltd, Experience: 4.2 Years
            </p>
            <p>Nov 2016 - Feb 2018</p>
            </div>
            </div>

          </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Experience;
