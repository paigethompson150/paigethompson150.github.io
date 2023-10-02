import React, { useState } from 'react';
import Project from './Project';

export default function Portfolio() {

  return <div className="Portfolio">
      <h1 className="title">PROJECTS</h1>
      <ul className="project-options">
        <li>All</li>
        <li>Web</li>
        <li>iOS</li>
        <li>Design</li>
      </ul>

      <div className="projects-container">
        <Project/>
        <Project/>
        <Project/>
        <Project/>
      </div>
  </div>
}