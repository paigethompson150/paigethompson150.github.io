import glasgow from '../images/glasgow.jpeg';

export default function Travel(props) {
  const {key, title, date, desc} = props.obj;
  const TravelsImages = [glasgow, glasgow, glasgow, glasgow];
  const image = TravelsImages[key]

  return <div>
        <img src={image} alt=""/>
        <div className="project-intro">
          <h3>
          {title}
          </h3>
        </div>
  </div>
}
