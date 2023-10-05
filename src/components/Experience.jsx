export default function Experience(props) {
  const experience = props.exp;

  return <div className="experience-section">
      <div className="experience-date">
        <p>{experience.date}</p>
      </div>
      <div className="experience-description">
        <div className="experience-title">
          <h3>{experience.title}</h3>
          <h3>·</h3>
          <h3>{experience.company}</h3>
        </div>
        <p>{experience.role1}</p>
        <p>{experience.role2}</p>
      </div>

  </div>
}
