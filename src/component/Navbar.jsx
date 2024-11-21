import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='bg-black text-white  px-8 md:px-16 lg:px-24 bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container mx-auto py-2 flex justify-between items-center'>
          <div className='text-2xl font-bold tracking-widest'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
              RANA
            </span>
          </div>
          <div className='hidden md:flex space-x-6 items-center'>
            <a href="#home" className='hover:text-gray-400'>Home</a>
            <a href="#Me" className='hover:text-gray-400'>About Me</a>
            <a href="#service" className='hover:text-gray-400'>Services</a>
            <a href="#Projects" className='hover:text-gray-400'>Projects</a>
            <a href="#contact" className='hover:text-gray-400'>Contact</a>
            <a href="#contact" className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              Connect Me
            </a>
          </div>
          <button onClick={toggleMenu} className='md:hidden flex items-center'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className='md:hidden flex flex-col items-center space-y-4 mt-4'>
            <a href="#home" className='hover:text-gray-400'>Home</a>
            <a href="#Me" className='hover:text-gray-400'>About Me</a>
            <a href="#service" className='hover:text-gray-400'>Services</a>
            <a href="#Projects" className='hover:text-gray-400'>Projects</a>
            <a href="#contact" className='hover:text-gray-400'>Contact</a>
            <a href="#contact" className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              Connect Me
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
