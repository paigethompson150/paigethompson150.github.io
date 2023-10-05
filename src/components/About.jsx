import 'animate.css';
import Experience from "./Experience";
import chevron from '../images/down.png';
import avatar from '../images/avatar.png';

export default function About() {
  let experiences = [
    {
      key:0, company: "Guardian Life", date: "Jun. 2023 - Aug. 2023", 
      title: "Mobile/iOS Developer Intern",
      role1: "Collaborated with lead engineers and UX team to create a Proof of Concept iOS Application to be used internally by Guardian Life employees.", 
      role2: "Rewrote UIKit components into SwiftUI and added notification badging to the tab bar of Guardian Life’s Accounts & Policies application. Participated in daily stand-ups, PI planning, and refinements."
    },
    {
      key:1,company:"Bose", date:"Jan. 2023 - Jun. 2023", 
      title: "Mobile Application Engineer Co-op",
      role1: "Created a Proof of Concept screen for the Bose Music application to initiate research for the new Spatial Audio demo feature, and demonstrated findings to the Mobile application team.",
      role2: "Enhanced accessibility, debugged bluetooth connection issues and integrated upcoming products into the Bose Music app."
    },
    {
      key:2, company:"Boynton Insurance", date:"Jul. 2022 - Dec. 2022",
      title: "SEO/Digital Marketing Associate",
      role1: "Updated SEO strategy and restructured website to increase page visits by 60%.",
      role2: "Designed and deployed clients intake forms, web pages, and email campaigns."
    },
    {
      key:3, company:"Girls Who Code", date:"Jun. 2022 - Aug. 2022", 
      title: "Computer Science TA",
      role1: "Maintained an exciting and accessible virtual classroom environment for a highly diverse group of 50-60 high school girls and non-binary students.",
      role2: "Led classroom lectures on HTML, CSS, JavaScript, and OOP concepts. Individually mentored 10-15 of my own students and created engaging sisterhood activities for us to play."
    }
  ]
  const experienceList = experiences.map((e) => <Experience exp={e} />)
  return <div className="About">
      <div className="about-intro">
        <div className="about-title">
          <h1 className="title">ABOUT</h1> 
          <img id="avatar"src={avatar} alt="avatar with brown hair"/>
        </div>
        <h2>Welcome to my web-paige 👋</h2>
        <br/>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. </h2>
          <br/>
          <h2>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.</h2>
      </div>
      <a href="#experience-section"><img className="down-arrow" src={chevron} alt="down"/></a>
      <h1 className="title">EXPERIENCE</h1>
      {experienceList}
      <a target="_blank" href="https://docs.google.com/document/d/1RUHfvWuPWMc6XRCGKq2mGpN9BwdSGrkEZUL0HqrzplQ/edit?usp=sharing" rel="noreferrer">
        <h1 className="resume">View Full Résumé</h1>
      </a>
  </div>
}