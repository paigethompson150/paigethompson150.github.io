export default function ExperienceButton(props) {

  return <div className="Experience-Button">
      <button className={props.className} onClick={props.onClick}>{props.title}</button>
  </div>
}