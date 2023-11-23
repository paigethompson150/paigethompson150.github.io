import 'animate.css';
import React, { useState, useRef, useEffect } from 'react';
import TravelCard from './TravelCard';
import UK from './travelComponents/UK';
import NY from './travelComponents/NY';
import TMP from './travelComponents/TMP';
import TNT from './travelComponents/TNT';
import QC from './travelComponents/QC';
import NC from './travelComponents/NC';
import MTL from './travelComponents/MTL';
import ICE from './travelComponents/ICE';
import CALI from './travelComponents/CALI';



export default function Travels() {
  const [selectedTravel, setSelectedTravel] = useState(-1);
  var data = require('./data/travels.json');
  const travelCardList = data.map((travel) => <TravelCard obj={travel} onClick={() => setSelectedTravel(travel)}/>)
  const TravelComponents = [UK,NY,TMP,TNT,QC,NC,MTL,ICE,CALI];
  const SelectedComponent = TravelComponents[(selectedTravel === -1 ? 1 : selectedTravel.key)]

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

  for (var i = 0; i < data.length; i++)
  {
    var obj = data[i]
    console.log(obj);
  }

  return <div className="Portfolio">
          <h1 className="title">TRAVELS</h1>
          <div>
            {travelCardList}
          </div>

          {/* Travel Popup */}
          <div className={selectedTravel !== -1 ? "travel-expanded" : "project-hidden"} ref={newRef}>
            <div className="project-header">
              <button className="travel-btn" onClick={() => setSelectedTravel(-1)}>
                <h2>x</h2>
              </button>
            </div>
              <SelectedComponent/>
          </div>
        <div className={selectedTravel !== -1 ? "overlay" : ""}></div>
    </div>
}