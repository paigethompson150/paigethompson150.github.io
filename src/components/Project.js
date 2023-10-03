export default function Project(props) {
  const {id, type, name, image, desc} = props.obj;

  return <div className={[props.className, "project"].join(' ')} onClick={props.onClick}>
      <img className="project-image" src={image} alt=""/>
  </div>
}
