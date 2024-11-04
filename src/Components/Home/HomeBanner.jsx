import React from 'react'
import '../Home/homeBanner.css'
import Navbar from '../Shared/Navbar/Navbar'






const HomeBanner = () => {
  return (
    <div id="home">
    <div  className="homebanner justify-center bg-black px-[5%] lg:px-[12%] font-aldrich lg:pb-40  ">
        <div className='px-0 lg:px-36 py-10'> 
            <Navbar></Navbar>
        </div>
        
        <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2  mt-14 ">
            {/* Text Section */}

            <div className='order-last md:order-first flex flex-col justify-center text-white'>
                <h1 className='text-3xl font-normal	 mb-4 justify-start text-start '>
                    This is <span className="text-4xl font-bold">Kahafil Ora</span>
                </h1>
                <h2 className='text-4xl font-medium leading-none justify-start text-start'>
                    CYBER SECURITY EXPERT,<br />
                    IT Professional &<br /> Business Entrepreneur
                </h2>
                <p className='text-lg mt-1 justify-start text-start'>with 20 years of experience</p>

                {/* Buttons */}
                <div className='flex mt-6 space-x-4 justify-start text-start'>
                    <button className='bg-gradient-to-r from-[#5411ff] to-[#b000c3] hover:bg-purple-700 text-white px-6 py-2 rounded-lg'>Say Hello</button>
                    {/* <button className='module-border-wrap border border-gradient- text-white px-6 py-2 rounded-lg'><div className='module bg-black'>Work Demo</div></button> */}
                    
                  
                     <button class=" rounded-md bg-gradient-to-r from-[#5411ff] to-[#b000c3] p-0.5">
                     <div class=" h-full w-full items-center justify-center rounded bg-black back px-6 py-2">
                     <h1 class=" text-white">Work Demo</h1>
                    </div>
                    </button>

                </div>

                


                {/* Connections Section */}
                <div className='mt-6 justify-start text-start'>
                    <button className='border border-white flex p-3 rounded-lg bg-white bg-opacity-30 justify-start text-start'>
                    <span className='text-4xl mr-4 font-bold'>20,000+</span>
                    <p className='text-white'>Connections <br /> Across Bangladesh</p>
                    </button>
                   
                </div>
            </div>

            {/* Image Section */}

            <div className='order-first md:order-last  relative overflow-hidden flex justify-center items-center'>

                <img
                    src="https://i.postimg.cc/8krykckX/Group-13.png"
                    alt="Kahafil Ora"
                    className=' rounded-lg w-3/4 '
                />
                {/* <div className='absolute  right-40 bottom-0 w-full h-[20px] backdrop-blur-md shadow-lg bg-gradient-to-b from-transparent to-black'>
                    
                </div> */}
            </div>
        </div>

        {/* Experience and Achievements Section */}
        <div className='grid grid-cols-2 sm:grid-cols-4 text-center  text-white border rounded-lg p-4 gap-6 mt-2'>
            <div>
                <h3 className='text-2xl font-bold'>20+</h3>
                <p>Years of Experience</p>
            </div>
            <div>
                <h3 className='text-2xl font-bold'>22</h3>
                <p>Certifications</p>
            </div>
            <div>
                <h3 className='text-2xl font-bold'>35</h3>
                <p>Awards Winner</p>
            </div>
            <div>
                <h3 className='text-2xl font-bold'>300+</h3>
                <p>Projects Completed</p>
            </div>
        </div>
        
        
    </div>
 

  
   
    </div>
  )
}

export default HomeBanner
