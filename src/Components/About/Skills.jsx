const Skills = () => {
  return (
    <div>
      <div className="justify-center pt-28 font-aldrich pb-12 bg-black  text-white">

        

       {/* Header Section */}
       {/* <div className='flex flex-col sm:flex-row pb-10 '>
         <h1 className="text-4xl mr-8 cursor-pointer py-2">Education</h1>
         <h1 className="text-4xl mr-8 cursor-pointer py-2">Experience</h1>
         <h1 className="text-4xl mr-8 cursor-pointer border-[#a855f7] border-b-2 py-2">Skills</h1>
       </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-[4%]">
          {/* Experience Section */}
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6 ">Skills</h2>
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

          



          {/* Certifications section2 */}
          <div>
          <h2 className="text-3xl font-bold mb-6">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 ">

          <div className="flex flex-col-14  mb-6  ">
            <div className="col-span-3 mr-2">
            <img src="https://i.postimg.cc/QMQNbrcJ/Rectangle-37.png" className="w-6"/>
            </div>
            <div className="col-span-8">
            <h1>Cisco Networking Academy</h1>
            <p>Cisco Certified Network Associate -R&S (CCNA)</p>
            <p>Feb 2006 - Oct 2016</p>
            </div>
            </div>

            <div className="flex flex-col-14  mb-6">
            <div className="col-span-3 mr-2">
            <img src="https://i.postimg.cc/QMQNbrcJ/Rectangle-37.png" className="w-6"/>
            </div>
            <div className="col-span-8">
            <h1>Microsoft Ignite</h1>
            <p>Microsoft Certified Professional (MCP)</p>
            <p>Nov 2016 - Feb 2018</p>
            </div>
            </div>

            <div className="flex flex-col-14  mb-6">
            <div className="col-span-3 mr-2">
            <img src="https://i.postimg.cc/QMQNbrcJ/Rectangle-37.png" className="w-6"/>
            </div>
            <div className="col-span-8">
            <h1>Microsoft Ignite</h1>
            <p>Microsoft Certified Solutions Associate (MCSA)</p>
            <p>Nov 2016 - Feb 2018</p>
            </div>
            </div>

            <div className="flex flex-col-14  mb-6">
            <div className="col-span-3 mr-2">
            <img src="https://i.postimg.cc/QMQNbrcJ/Rectangle-37.png" className="w-6"/>
            </div>
            <div className="col-span-8">
            <h1>Microsoft Ignite</h1>
            <p>Microsoft Certified Solutions Expert (MCSE)</p>
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

export default Skills;
