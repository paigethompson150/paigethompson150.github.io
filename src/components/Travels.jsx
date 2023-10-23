import 'animate.css';
import React, { useState, useRef, useEffect } from 'react';
import glasgow from '../images/glasgow.jpeg';

import Travel from './Travel';

export default function Travels() {
  var data = require('./data/travels.json');
  const TravelsList = data.map((travel) => <Travel obj={travel}/>)
  const TravelsImages = [glasgow, glasgow, glasgow, glasgow];

  for (var i = 0; i < data.length; i++)
  {
    var obj = data[i]
    console.log(obj);
  }
  return <div className="Portfolio">
      <h1 className="title">TRAVELS</h1>
      <div>
        {TravelsList}
      </div>
  </div>
}