import React, { useState } from 'react';
import Project from './Project';

export default function Portfolio() {
  let projects = [
    {id: 0, type: "Web", name:"Web"},
    {id: 1, type: "Web", name:"Web 2"},
    {id: 2, type: "iOS", name:"iOS"},
    {id: 3, type: "Design", name:"Design"}
  ]
  const [selectedProjectType, setSelectedProjectType] = useState(0);

  return <div className="Portfolio">
      <h1 className="title">PROJECTS</h1>
      <ul className="project-options">
        <li className={selectedProjectType === 0 ? "unselected" : "selected"} onClick={() => setSelectedProjectType(0)}>All</li>
        <li className={selectedProjectType === 1 ? "unselected" : "selected"} onClick={() => setSelectedProjectType(1)}>Web</li>
        <li className={selectedProjectType === 2 ? "unselected" : "selected"} onClick={() => setSelectedProjectType(2)}>iOS</li>
        <li className={selectedProjectType === 3 ? "unselected" : "selected"} onClick={() => setSelectedProjectType(3)}>Design</li>
      </ul>

      <div className="projects-container">
        <Project className={selectedProjectType === 1 || selectedProjectType === 0 ? "shown" : "hidden"}/>
        <Project className={selectedProjectType === 1 || selectedProjectType === 0 ? "shown" : "hidden"}/>
        <Project className={selectedProjectType === 2 || selectedProjectType === 0 ? "shown" : "hidden"}/>
        <Project className={selectedProjectType === 3 || selectedProjectType === 0 ? "shown" : "hidden"}/>
      </div>
  </div>
}