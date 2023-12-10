import React from 'react'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="bg-white p-2 h-screen fixed w-[20%] flex flex-col justify-between items-center">
    
      <div className="text-center mb-8">
        <img
          src="https://e7.pngegg.com/pngimages/613/484/png-clipart-pizza-logo-illustration-pizza-logo-logo-free-logo-design-template-food.png"
          alt="Site Logo"
          className="w-20 h-20 mx-auto bg-transparent object-cover rounded-full"
        />
      </div>

     
      <nav className="mb-8">
        <ul className='gap-3'>
          <li className="mb-2">
            <a href="#" className="text-cyan-600 hover:text-red-700 font-bold">
              HOME
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-cyan-600 hover:text-red-700 font-bold">
              PAGES
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-cyan-600 hover:text-red-700 font-bold">
              MENU
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-cyan-600 hover:text-red-700 font-bold">
              EVENTS
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-cyan-600 hover:text-red-700 font-bold">
              BLOG
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-cyan-600 hover:text-red-700 font-bold">
              LANGING
            </a>
          </li>
        </ul>
      </nav>

      {/* Social Media Links */}
      <div className='flex flex-col justify-center items-center m-4 '>
        <div className="flex space-x-2 items-center my-3">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaFacebook className="w-6 h-6"  />
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-500">
            <FaInstagramSquare className="w-6 h-6"   />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaLinkedin  className="w-6 h-6"  />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaTwitter className="w-6 h-6"   />
          </a>
        </div>
        <a href="#" className="bg-red-500 text-white px-12 font-bold py-2 mb-2 rounded-full">
          Order Online
        </a>
      </div>
    </div>
  );
};

export default Navbar