import React from "react";
import employeeMSImage from "../assets/employee.png";
import bookMSImage from "../assets/admin.png";
import workImage from "../assets/work.jpg";
import onlineImage from "../assets/online.jpg";
import EmpImage from "../assets/Emp.jpg";
import portImage from "../assets/port.jpg";
import spotifyImage from "../assets/spotify.jpg";
import spImage from "../assets/sp.jpg";
const projects = [
  {
    id: 1,
    name: "ONLINE EXAMINATION SYSTEM",
    technologies: "DOT NET",
    image: onlineImage,
    github: "https://github.com/neerajsingh9090/Online_Exam/tree/main/WebSite11_State_Management_22March1",
  },
  {
    id: 2,
    name: "EMPLOYEE PORTAL",
    technologies: "DOT NET",
    image: EmpImage,
    github: "https://github.com/neerajsingh9090",
  },
  {
    id: 3,
    name: "PORTFOLIO ",
    technologies: "HTML CSS JS",
    image: portImage,
    github: "https://github.com/neerajsingh9090/Spotify-Clone",
  },


  {
    id: 4,
    name: "Spotify Clone ",
    technologies: "HTML CSS JS",
    image: spImage,
    github: "https://github.com/neerajsingh9090",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
