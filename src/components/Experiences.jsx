import 'animate.css';
import React, { useState } from 'react';
import ExperienceButton from "./ExperienceButton";

export default function Experiences() {
  let experiences = [
    {id: 0, company: "Guardian Life", date: "Jun. 2023 - Aug. 2023", role:"Here is my long description right hurr"},
    {id: 1,company:"Bose", date:"Jan. 2023 - Jun. 2023", role:"Here is my long description right hurr"},
    {id: 2, company:"Boynton Insurance", date:"Jul. 2022 - Dec. 2022", role:"Here is my long description right hurr"},
    {id: 3, company:"Girls Who Code", date:"Jun. 2023 - Aug. 2023", role:"Here is my long description right hurr"}
  ]
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
  const experienceButtons = experiences.map(({id, company}) => <ExperienceButton className={selectedExperienceIndex === id ? "unselected" : "selected"} onClick={() => setSelectedExperienceIndex(id)} company={company}/>)

  return <div id="experience-section">
      <h1 className="title">EXPERIENCE</h1>
      <div className="experience-container">
        <div className="experience-titles">
          {experienceButtons}
        </div>
        <div className="experience-description">
          <p className="date">{experiences[selectedExperienceIndex].date}</p>
          <p>{experiences[selectedExperienceIndex].role}</p>
        </div>
      </div>
  </div>
}