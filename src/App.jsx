import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Me from './component/Me';
import Service from './component/Service';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Me />
      <Service />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}