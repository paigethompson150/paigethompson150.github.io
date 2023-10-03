import 'animate.css';
import React, { useState, useRef, useEffect } from 'react';
import glasgow from '../images/glasgow.jpeg'
import cos from '../images/cos.png'
import westminster from '../images/westminster.jpeg'
import londoneye from '../images/londoneye.jpeg'
import tampa from '../images/tampa.jpeg'
import newyork from '../images/newyork.jpeg'
import toronto from '../images/toronto.jpeg'
import northcarolina from '../images/northcarolina.jpeg'
import iceland from '../images/iceland.jpeg'
import cali from '../images/cali.jpeg'
import Project from './Project';

export default function Portfolio() {
  let travels= [
    {id: 0, name:"Scotland", image:glasgow, desc: "Restaurant landing page"},
    {id: 1, name:"England", image: westminster, desc: "Restaurant landing page"},
    {id: 2, name:"New York", image:newyork, desc: "Book Tracking Site"},
    {id: 3, name:"Tampa", image:tampa, desc: "Created an iOS app"},
    {id: 4, name:"Toronto", image:toronto, desc: "Designed a reactive native app"},
    {id: 5, name:"East Coast Tour", image:northcarolina, desc: "Designed a reactive native app"},
    {id: 6, name:"Iceland", image:iceland, desc: "Designed a reactive native app"},
    {id: 7, name:"California", image:cali, desc: "Designed a reactive native app"},
  ]
  const [selectedTravel, setSelectedTravel] = useState(-1);
  const newRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);;
    };
  });
  const handleOutsideClick = (e) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      setSelectedTravel(-1);
    }
  };


  return <div className="Portfolio">
      <h1 className="title">TRAVELS</h1>

      <div className="travels-container" ref={newRef}>
        <Project obj={travels[0]} onClick={() => setSelectedTravel(travels[0])}/>
        <Project obj={travels[1]} onClick={() => setSelectedTravel(travels[1])}/>
        <Project obj={travels[2]} onClick={() => setSelectedTravel(travels[2])}/>
        <Project obj={travels[3]} onClick={() => setSelectedTravel(travels[3])}/>
        <Project obj={travels[4]} onClick={() => setSelectedTravel(travels[4])}/>
        <Project obj={travels[5]} onClick={() => setSelectedTravel(travels[5])}/>
        <Project obj={travels[6]} onClick={() => setSelectedTravel(travels[6])}/>
        <Project obj={travels[7]} onClick={() => setSelectedTravel(travels[7])}/>
      </div>

      <div className={selectedTravel !== -1 ? "project-expanded" : "project-hidden"}>
        <h1>Title</h1>
        <h3>Title Again</h3>
      </div>
  </div>
}