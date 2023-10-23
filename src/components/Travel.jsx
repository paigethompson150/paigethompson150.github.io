export default function Travel(props) {
  const {key, image, title, date, desc} = props.obj;

  return <div>
      <div>
        <h3>
          <img src={image} alt="" />
          {title}
        </h3>
      </div>
  </div>
}
