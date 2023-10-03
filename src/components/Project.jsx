export default function Project(props) {
  const {key, type, name, image, desc} = props.obj;

  return <div className={[props.className, "project"].join(' ')} onClick={props.onClick}>
      <img src={image} alt=""/>
  </div>
}
