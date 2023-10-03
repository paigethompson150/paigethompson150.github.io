import 'animate.css';
import React, { useState, useRef, useEffect } from 'react';
import Project from './Project';
import gamenight from '../images/gamenight.png';
import cos from '../images/cos.png';
import ramen from '../images/ramen.png';
import portfolio from '../images/portfolio.png';
import tweet from '../images/tweet.png';
import ticTacToe from '../images/tictactoe.gif';
import dashboard from '../images/dashboard.png';
import signUp from '../images/SignUp.png'

export default function Portfolio() {
  let projects = [
    {id: 0, type: "Web", name:"Pagu Ramen", image:ramen, desc: "Restaurant landing page"},
    {id: 1, type: "Web", name:"Curse of Strahd", image:cos, desc: "Book Tracking Site"},
    {id: 2, type: "iOS", name:"GameNight", image:gamenight, desc: "Created an iOS app"},
    {id: 3, type: "Web", name:"Portfolio", image:portfolio, desc: "Designed a reactive native app"},
    {id: 4, type: "iOS", name:"Tweeter", image:tweet, desc: "Designed a reactive native app"},
    {id: 5, type: "Design", name:"Admin Dashboard", image:dashboard, desc: "Designed a reactive native app"},
    {id: 6, type: "Design", name:"Sign Up Form", image:signUp, desc: "Designed a reactive native app"},
    {id: 7, type: "Web", name:"Tic-Tac-Toe", image:ticTacToe, desc: "Designed a reactive native app"},
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
      <div className={selectedProject !== -1 ? "project-expanded" : "project-hidden"} ref={newRef}>
        <div className="project-img-container">
          <img src={selectedProject.image} alt="project"/>
        </div>
        <div className="project-description">
          <h1>{selectedProject.name}</h1>
          <h2>{selectedProject.desc}</h2>
        </div>
      </div>
  </div>
}