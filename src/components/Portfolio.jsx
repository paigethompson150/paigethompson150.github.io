import 'animate.css';
import React, { useState, useRef, useEffect } from 'react';
import Project from './Project';
import gamenight from '../images/gamenight.png';
import cos from '../images/cos.png';
import pagu from '../images/pagu.png';

export default function Portfolio() {
  let projects = [
    {id: 0, type: "Web", name:"Pagu Ramen", image:pagu, desc: "Restaurant landing page"},
    {id: 1, type: "Web", name:"Curse of Strahd", image:cos, desc: "Book Tracking Site"},
    {id: 2, type: "iOS", name:"GameNight", image:gamenight, desc: "Created an iOS app"},
    {id: 3, type: "Design", name:"CheetaHub", image:gamenight, desc: "Designed a reactive native app"}
  ]
  const [selectedProjectType, setSelectedProjectType] = useState("All");
  const [selectedProject, setSelectedProject] = useState(-1);
  const projectsList = projects.map((project, index) => <Project className={selectedProjectType === project.type || selectedProjectType === "All" ? "shown" : "hidden"} obj={project} onClick={() => setSelectedProject(project)}/>);

  const newRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);;
    };
  });
  const handleOutsideClick = (e) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      setSelectedProject(-1);
    }
  };


  return <div className="Portfolio">
      <h1 className="title">PROJECTS</h1>
      <ul className="project-options">
        <li className={selectedProjectType === "All" ? "unselected" : "selected"} onClick={() => setSelectedProjectType("All")}>All</li>
        <li className={selectedProjectType === "Web" ? "unselected" : "selected"} onClick={() => setSelectedProjectType("Web")}>Web</li>
        <li className={selectedProjectType === "iOS" ? "unselected" : "selected"} onClick={() => setSelectedProjectType("iOS")}>iOS</li>
        <li className={selectedProjectType === "Design" ? "unselected" : "selected"} onClick={() => setSelectedProjectType("Design")}>Design</li>
      </ul>

      <div className="projects-container" ref={newRef}>
        {projectsList}
      </div>

      {/* Project Popup */}
      <div className={selectedProject !== -1 ? "project-expanded" : "project-hidden"}>
        <h1>Title</h1>
        <h3>Title Again</h3>
      </div>
  </div>
}