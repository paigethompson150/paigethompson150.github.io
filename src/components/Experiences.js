import ExperienceButton from "./ExperienceButton";

export default function Experiences() {
  return <div className="Experiences">
      <h1>EXPERIENCE</h1>
      <div class="experience-container">
        <div class="experience-titles">
          <ExperienceButton title="Guardian Life"/>
          <ExperienceButton title="Bose"/>
          <ExperienceButton title="Boynton Insurance"/>
          <ExperienceButton title="Girls Who Code"/>
        </div>
        <div class="experience-description">
          <p>Jun. 2023 - Present</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>
  </div>
}