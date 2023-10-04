export default function Project(props) {
  const {key, type, name, image, desc, tech, link} = props.obj;

  return <div className={[props.className, "project"].join(' ')} onClick={props.onClick}>
      <img src={image} alt=""/>
      <div className="project-intro">
        <h3>{name}</h3>
      </div>
  </div>
}
