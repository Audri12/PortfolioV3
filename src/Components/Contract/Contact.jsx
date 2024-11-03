import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
         <div className='getintouch bg-black' id='contact'>
      <div className="  flex justify-center items-center px-[5%] py-10 md:py-20">
        <div className="max-w-[1150px] w-full bg-gradient-to-r from-[#D500EC33] to-[#5101F833] md:p-10 rounded-lg shadow-lg">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 px-4 md:px-24 mt-8">
            {/* Left Section */}
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 font-Aldrich">Get in touch</h2>
              <p className="mb-10 md:mb-16 text-base md:text-lg">
                I'm very approachable and would love to speak to you. Feel free to call, send me an email. Follow me on social media or simply complete the enquiry form.
              </p>
              <div className="mb-4">
                <span className="block text-sm md:text-md">📞 1-514-456-2753</span>
              </div>
              <div>
                <span className="block text-sm md:text-md">📧 Soul12@gmail.com</span>
              </div>
            </div>

            {/* Right Section */}
            <div className="px-0 md:px-16">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-5">Send me a message</h3>
              <form>
                <div className="mb-4">
                  <input
                    className="w-full md:w-80 h-10 p-4 rounded-lg bg-[#FFFFFF4D] text-white placeholder-white focus:outline-none text-sm"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full md:w-80 h-10 p-4 rounded-lg bg-[#FFFFFF4D] text-white placeholder-white focus:outline-none text-sm"
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full md:w-80 h-10 p-4 rounded-lg bg-[#FFFFFF4D] text-white placeholder-white focus:outline-none text-sm"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="w-full md:w-80 p-4 rounded-lg bg-[#FFFFFF4D] text-white placeholder-white focus:outline-none h-28 md:h-36 text-sm"
                    placeholder="Your message"
                  />
                </div>
                <button
                  className="w-full md:w-36 h-11 mb-8 bg-gradient-to-r from-[#D500EC] to-[#5101F8] text-white rounded-lg shadow-md hover:bg-pink-600 transition"
                  type="submit"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact