import Experiences from "./Experiences"
import chevron from '../images/down.png';
import avatar from '../images/avatar.png';

export default function About() {
  return <div className="About">
      <div className="about-intro">
        <img id="avatar" src={avatar} alt="avatar with brown hair"/>
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
      <a href="#experience-section"><img class="down-arrow" src={chevron} alt="down"/></a>
      <Experiences/>
      <h1>Resume</h1>
  </div>
}