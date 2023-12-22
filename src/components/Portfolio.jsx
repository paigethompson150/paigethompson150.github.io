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
import signUp from '../images/SignUp.png';
import arrowBack from '../images/arrowBack.png';

export default function Portfolio() {
  let leftProjects = [
    {key: 2, type: "iOS", name:"GameNight", image:gamenight, desc: "A social networking app for boardgame enthusiasts. This was the final project for the CodePath course: intermediate iOS development. I worked on this app with two team members and we were one of the 12 out of 80+ teams to present during CodePath's National Demo Day! I was responsible for UX/UI Design, database organization, implementation of player profiles and persistence of data.", tech: ['Swift','Figma', 'Parse', 'BoardGameAPI'], link: 'https://github.com/paigethompson150/GameNight'},
    {key: 0, type: "Web", name:"Pagu Ramen", image:ramen, desc: "A landing page for a sample ramen restaurant, `Pagu Ramen`. All pages are fully rendered in the DOM using ES6 modules & bundled using webpack.", tech: ['JavaScript', 'Webpack', 'HTML/CSS'], link: 'https://paigethompson150.github.io/webpack_practice/'},
    {key: 7, type: "Web", name:"Tic-Tac-Toe", image:ticTacToe, desc: "An interactive website where you play tic-tac-toe against `Demagotron`: the computer who makes randomized decisions.", tech: ['JavaScript', 'HTML/CSS'], link: 'https://paigethompson150.github.io/browser-tic-tac-toe/'},
  ]
  let rightProjects = [
    {key: 4, type: "iOS", name:"Tweeter", image:tweet, desc: "A `Twitter`(or now X) app to view, compose, favorite, and retweet tweets.", tech: ['Swift', 'UIKit','Twitter API'], link: 'https://github.com/paigethompson150/tweeter'},
    {key: 1, type: "Web", name:"Curse of Strahd", image:cos, desc: "Website created for documenting the journeys of my Dungeons & Dragons group.", tech: ['HTML/CSS', 'JavaScript'], link: 'https://paigethompson150.github.io/CurseOfStrahd/'},
    {key: 3, type: "Web", name:"Portfolio", image:portfolio, desc: "This very website here!", tech: ['HTML/CSS', 'React.JS']},
  ]
  const [selectedProjectType, setSelectedProjectType] = useState("All");
  const [selectedProject, setSelectedProject] = useState(-1);
  const leftProjectsList = leftProjects.map((project) => <Project className={selectedProjectType === project.type || selectedProjectType === "All" ? "shown" : "hidden"} obj={project} onClick={() => setSelectedProject(project)}/>);
  const rightProjectsList = rightProjects.map((project) => <Project className={selectedProjectType === project.type || selectedProjectType === "All" ? "shown" : "hidden"} obj={project} onClick={() => setSelectedProject(project)}/>);
  
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
          <div className="project-header">
            <button onClick={() => setSelectedProject(-1)}>
              <img className="back-arrow" src={arrowBack} alt="back arrow" />
            </button>
          </div>
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
      <div className={selectedProject !== -1 ? "overlay" : ""}></div>
  </div>
}