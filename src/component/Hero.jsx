import React from 'react';
import HeroImage from '../assets/hero.jpg';

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16  left-0 right-0 z-50 '>
      <img 
        src={HeroImage} 
        alt="" 
        className='mx-auto  mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' 
      />

      <h1>
        I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Neeraj Rana</span>, 
        Full-Stack Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I specialize in building modern and responsive web applications.
      </p>
      <div className='mt-8 space-x-4'>
      <a href="https://wa.me/33601114671" className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
  Contact With Me
</a>


        <a 
          href="/resume.pdf" 
          download 
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full inline-block'>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
