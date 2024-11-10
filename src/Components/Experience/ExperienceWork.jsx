import React from 'react'
import './ExperienceWork.css'
import skills from '../../assets/skillIMg.png'


const ExperienceWork = () => {
  return (
    <div>
      {/* EXPERIENCE Title */}
      <div className="font-aldrich pb-12 flex justify-center items-center  px-[5%] lg:px-[12%] bg-black">
        <div className="experience-container">
          <h1 className="experience-text-outline">EXPERIENCE</h1>
          <h1 className="experience-text">EXPERIENCE</h1>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#5411ff] to-[#b000c3] absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-3 z-10">
          WORK
          </h2>
        </div>
      </div>
      {/* tittle end */}
         <div className='MobbileCIB pt-20 md:pt-48 py-5 pb-20  px-[5%] lg:px-[12%]'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        
        {/* First Section */}
        <div className="bg-gradient-to-r from-[#130428] via-[#251043] via-[#38126D] via-[#261045] to-[#190634] border-t-4 border-t-[#693B93] p-4 md:p-6 rounded-lg flex flex-col text-white shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className='flex flex-col md:flex-row gap-4 md:gap-10'>
            <div>
              <img src="https://i.postimg.cc/9XGyNfbN/Group-2.png" className='mt-2 mr-2 w-16 h-16 md:w-auto md:h-auto' alt="CIB Icon" />
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-2">CIB on the Mobile</h3>
              <p className="mb-4 text-xs md:text-sm pr-0 md:pr-24">Take your client onboard seamlessly by our amazing tool of digital onboard process.</p>
              <button className="mt-auto py-2 px-4 border border-[#693B93] bg-[#2C1250] hover:bg-[#2C1250] text-white w-full md:w-44 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="bg-gradient-to-r from-[#130428] via-[#251043] via-[#38126D] via-[#261045] to-[#190634] border-t-4 border-t-[#693B93] p-4 md:p-6 rounded-lg flex flex-col text-white shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className='flex flex-col md:flex-row gap-4 md:gap-10'>
            <div>
              <img src="https://i.postimg.cc/vBGxJr3q/Group-1935.png" className='mt-2 mr-2 w-16 h-16 md:w-auto md:h-auto' alt="CIB Icon" />
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-2">CIB on the Mobile</h3>
              <p className="mb-4 text-xs md:text-sm pr-0 md:pr-24">Take your client onboard seamlessly by our amazing tool of digital onboard process.</p>
              <button className="mt-auto py-2 px-4 border border-[#693B93] bg-[#2C1250] hover:bg-[#2C1250] text-white w-full md:w-44 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="bg-gradient-to-r from-[#130428] via-[#251043] via-[#38126D] via-[#261045] to-[#190634] border-t-4 border-t-[#693B93] p-4 md:p-6 rounded-lg flex flex-col text-white shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className='flex flex-col md:flex-row gap-4 md:gap-10'>
            <div>
              <img src="https://i.postimg.cc/25GSBP7G/Group-1938.png" className='mt-2 mr-2 w-16 h-16 md:w-auto md:h-auto' alt="CIB Icon" />
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-2">CIB on the Mobile</h3>
              <p className="mb-4 text-xs md:text-sm pr-0 md:pr-24">Take your client onboard seamlessly by our amazing tool of digital onboard process.</p>
              <button className="mt-auto py-2 px-4 border border-[#693B93] bg-[#2C1250] hover:bg-[#2C1250] text-white w-full md:w-44 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Fourth Section */}
        <div className="bg-gradient-to-r from-[#130428] via-[#251043] via-[#38126D] via-[#261045] to-[#190634] border-t-4 border-t-[#693B93] p-4 md:p-6 rounded-lg flex flex-col text-white shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className='flex flex-col md:flex-row gap-4 md:gap-10'>
            <div>
              <img src="https://i.postimg.cc/2jsLmNcL/Icons.png" className='mt-2 mr-2 w-16 h-16 md:w-auto md:h-auto' alt="CIB Icon" />
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-2">CIB on the Mobile</h3>
              <p className="mb-4 text-xs md:text-sm pr-0 md:pr-24">Take your client onboard seamlessly by our amazing tool of digital onboard process.</p>
              <button className="mt-auto py-2 px-4 border border-[#693B93] bg-[#2C1250] hover:bg-[#2C1250] text-white w-full md:w-44 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* skill titlle */}
    <div className='bg-black px-[5%] text-white font-aldrich py-12 flex justify-center'>
      <h1 className='text-center text-4xl'>I'm currently looking to join a  <span className="bg-[#AC01C6] bg-clip-text text-transparent">cross-functional  </span>team
 <br /><span className='text-2xl'>that values improving people's lives through accessible design</span></h1>
    </div>

    {/* ///img part */}
    <div className="bg-black px-[5%] text-white font-aldrich py-12 flex justify-center pb-6">
  <img src={skills} className="w-3/6 " alt="skills" />
</div>
    </div>
  )
}

export default ExperienceWork