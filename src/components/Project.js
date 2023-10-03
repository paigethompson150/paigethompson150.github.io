export default function Project(props) {
  const {id, type, name, image, desc} = props.obj;
  
  return <div id="Project" className={props.className} onClick={props.onClick}>
      <h1>{name}</h1>
      <img className="project-image" src={image} alt=""/>
      <p>{desc}</p>
  </div>
}
