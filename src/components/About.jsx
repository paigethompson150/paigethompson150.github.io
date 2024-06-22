import 'animate.css';
import Experience from "./Experience";
import chevron from '../images/down.png';
import avatar from '../images/avatar.png';

export default function About() {
  let experiences = [
    {
      key:0, company: "Fidelity Investments", date: "Jun. 2024 - Present", 
      title: "Associate Mobile Engineer",
    },
    {
      key:1, company:"CodePath", date:"Jan. 2024 - May. 2024", 
      title: "Tech Fellow",
      role1: "Lead and individually mentored 15 students through CodePath curriculum on iOS development.",
      role2: "Collaborated with the teaching team to prepare slides and troubleshoot student issues."
    },
    {
      key:2, company: "Guardian Life", date: "Jun. 2023 - Aug. 2023", 
      title: "Mobile/iOS Developer Intern",
      role1: "Collaborated with lead engineers and UX team to create a Proof of Concept iOS Application to be used internally by Guardian Life employees.", 
      role2: "Rewrote UIKit components into SwiftUI and added notification badging to the tab bar of Guardian Life’s Accounts & Policies application. Participated in daily stand-ups, PI planning, and refinements."
    },
    {
      key:3,company:"Bose", date:"Jan. 2023 - Jun. 2023", 
      title: "Mobile Application Engineer Co-op",
      role1: "Created a Proof of Concept screen for the Bose Music application to initiate research for the new Spatial Audio demo feature, and demonstrated findings to the Mobile application team.",
      role2: "Enhanced accessibility, debugged bluetooth connection issues and integrated upcoming products into the Bose Music app."
    },
    {
      key:4, company:"Girls Who Code", date:"Jun. 2022 - Aug. 2022", 
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
        <h2>Welcome to my webpage 👋</h2>
        <br/>
        <h2>
          Hi, I'm Paige! I'm a graduate of Simmons University with a Bachelor's of Science in Computer Science. In 2021 I took my first ever programming class in Java, 
          and fell in love with how fun it can be to tackle difficult problems on a team. I'm currently working as an Associate Mobile Engineer at Fidelity Investments!
        </h2>
          <br/>
          <h2>Outside of coding, I enjoy poorly playing Elliott Smith songs on the acoustic guitar, playing board games, and hiking with my friends. My family has two Boston Terriers that are the light of my life.
            </h2>
      </div>
      <a href="#experience-section"><img className="down-arrow" src={chevron} alt="down"/></a>
      <h1 className="title">EXPERIENCE</h1>
      {experienceList}
      <a target="_blank" href="https://docs.google.com/document/d/1RUHfvWuPWMc6XRCGKq2mGpN9BwdSGrkEZUL0HqrzplQ/edit?usp=sharing" rel="noreferrer">
        <h1 className="resume">View Full Résumé</h1>
      </a>
  </div>
}