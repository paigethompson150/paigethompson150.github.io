import 'animate.css';
import React, { useState, useRef, useEffect } from 'react';
import Project from './Project';
import gamenight from '../images/gamenight.png';
import cos from '../images/cos.png';
import ramen from '../images/ramen.png';
import portfolio from '../images/portfolio.png';
import tweet from '../images/tweet.jpeg';
import ticTacToe from '../images/tictactoe.gif';
import dashboard from '../images/dashboard.png';
import signUp from '../images/SignUp.png'

export default function Portfolio() {
  let leftProjects = [
    {key: 0, type: "Web", name:"Pagu Ramen", image:ramen, desc: "Restaurant landing page", tech: ['JavaScript', 'Webpack', 'HTML/CSS'], link: 'https://paigethompson150.github.io/webpack_practice/'},
    {key: 2, type: "iOS", name:"GameNight", image:gamenight, desc: "Created an iOS app", tech: ['Figma', 'Swift'], link: 'https://github.com/paigethompson150/GameNight'},
    {key: 7, type: "Web", name:"Tic-Tac-Toe", image:ticTacToe, desc: "Designed a reactive native app", tech: ['JavaScript', 'HTML/CSS'], link: 'https://paigethompson150.github.io/browser-tic-tac-toe/'},
    {key: 5, type: "Design", name:"Admin Dashboard", image:dashboard, desc: "Designed a reactive native app", tech: ['HTML/CSS'], link: 'https://paigethompson150.github.io/admin-dashboard/'},
  ]
  let rightProjects = [
    {key: 1, type: "Web", name:"Curse of Strahd", image:cos, desc: "Book Tracking Site", tech: ['HTML/CSS'], link: 'https://paigethompson150.github.io/CurseOfStrahd/'},
    {key: 3, type: "Web", name:"Portfolio", image:portfolio, desc: "Designed a reactive native app", tech: ['HTML/CSS']},
    {key: 4, type: "iOS", name:"Tweeter", image:tweet, desc: "Designed a reactive native app", tech: ['HTML/CSS'], link: 'https://github.com/paigethompson150/tweeter'},
    {key: 6, type: "Design", name:"Sign Up Form", image:signUp, desc: "Designed a reactive native app", tech: ['HTML/CSS'], link: 'https://paigethompson150.github.io/sign-up-form/'}
  ]
  const [selectedProjectType, setSelectedProjectType] = useState("All");
  const [selectedProject, setSelectedProject] = useState(-1);
  const leftProjectsList = leftProjects.map((project, index) => <Project className={selectedProjectType === project.type || selectedProjectType === "All" ? "shown" : "hidden"} obj={project} onClick={() => setSelectedProject(project)}/>);
  const rightProjectsList = rightProjects.map((project, index) => <Project className={selectedProjectType === project.type || selectedProjectType === "All" ? "shown" : "hidden"} obj={project} onClick={() => setSelectedProject(project)}/>);
  
  const tech = selectedProject.tech?.map((tech) => <span className="tech-item">{tech}</span>);

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
        <div className="projects-left">
          {leftProjectsList}
        </div>
        <div className="projects-right">
          {rightProjectsList}
        </div>
      </div>

      {/* Project Popup */}
      <div className={selectedProject !== -1 ? "project-expanded" : "project-hidden"} ref={newRef}>
        <div className="project-wrapper">
          <h2 className="project-title">{selectedProject.name}</h2>
          <img src={selectedProject.image} alt="project"/>
      
          <div className="project-description">
            <h3>About</h3>
            <p>{selectedProject.desc}</p>
          </div>
          <div className="technologies">
            <h3>Technologies</h3>
            {tech}
          </div>
          <h3>Website</h3>
          <a target="_blank" href={selectedProject.link} rel="noreferrer">{selectedProject.link}</a>
        </div>
      </div>
      <div className={selectedProject !== -1 ? "overlay" : ""}></div>
  </div>
}