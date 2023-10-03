import 'animate.css';
import React, { useState } from 'react';
import ExperienceButton from "./ExperienceButton";

export default function Experiences() {
  let experiences = [
    {
      id:0, company: "Guardian Life", date: "Jun. 2023 - Aug. 2023", 
      title: "Mobile/iOS Developer Intern",
      role1:"- Collaborated with lead engineers and UX team to create a Proof of Concept iOS Application to be used internally by Guardian Life employees.", 
      role2: "- Rewrote UIKit components into SwiftUI and added notification badging to the tab bar of Guardian Life’s Accounts & Policies application. Participated in daily stand-ups, PI planning, and refinements."
    },
    {
      id:1,company:"Bose", date:"Jan. 2023 - Jun. 2023", 
      title: "Mobile Application Engineer Co-op",
      role1:"- Created a Proof of Concept screen for the Bose Music application to initiate research for the new Spatial Audio demo feature, and demonstrated findings to the Mobile application team.",
      role2: "- Enhanced accessibility, debugged bluetooth connection issues and integrated upcoming products into the Bose Music app."
    },
    {
      id:2, company:"Boynton Insurance", date:"Jul. 2022 - Dec. 2022",
      title: "SEO/Digital Marketing Associate",
      role1:"- Updated SEO strategy and restructured website to increase page visits by 60%. Designed new web pages and blog posts."
    },
    {
      id:3, company:"Girls Who Code", date:"Jun. 2022 - Aug. 2022", 
      title: "Computer Science Teaching Assistant",
      role1:"- Maintained an exciting and accessible virtual classroom environment for a highly diverse group of 50-60 high school girls and non-binary students.",
      role2:"- Led classroom lectures on HTML, CSS, JavaScript, and OOP concepts. Individually mentored 10-15 of my own students and created engaging sisterhood activities for us to play."
    }
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
          <h3>{experiences[selectedExperienceIndex].title}</h3>
          <h4 className="date">{experiences[selectedExperienceIndex].date}</h4>
          <p>{experiences[selectedExperienceIndex].role1}</p>
          <p>{experiences[selectedExperienceIndex].role2}</p>
        </div>
      </div>
  </div>
}