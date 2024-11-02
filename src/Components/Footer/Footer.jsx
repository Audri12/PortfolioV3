import React from 'react'
import { FaHome, FaUser, FaCalendarAlt, FaPhoneAlt, FaPen } from 'react-icons/fa';
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
import LastNavbar from '../Shared/Navbar/LastNavbar';


const Footer = () => {
  return (
    <div>
          <div className="bg-black ">
      {/* Header Section */}
      <LastNavbar></LastNavbar>

      {/* Footer Section */}
      <footer className="flex flex-col items-center text-center py-8 px-4">
        <p className="mb-6 text-white text-sm md:text-base">
          I’m currently looking to join a cross-functional team that values improving people’s lives <br className="hidden md:inline-block" />
          through accessible design. Or have a project in mind? Let’s connect.
        </p>
        <p className="mb-8 text-white text-sm md:text-base">ibrahimmemon930@gmail.com</p>

        {/* Social Media Icons */}
        <div className="flex space-x-6 gap-6 justify-center mb-4">
          <a href="#" className="text-pink-500">
            <FaInstagram size={28} md:size={32} />
          </a>
          <a href="#" className="text-blue-400">
            <FaTwitter size={28} md:size={32} />
          </a>
          <a href="#" className="text-blue-700">
            <FaLinkedin size={28} md:size={32} />
          </a>
          <a href="#" className="text-blue-600">
            <FaFacebook size={28} md:size={32} />
          </a>
          <a href="#" className="text-red-600">
            <FaYoutube size={28} md:size={32} />
          </a>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Footer