import glasgow from '../images/glasgow.jpeg';
import ny from '../images/newyork.jpeg';
import tampa from '../images/tampa.jpeg';
import toronto from '../images/toronto.jpeg';
import northcarolina from '../images/northcarolina.jpeg';
import iceland from '../images/iceland.jpeg';
import california from '../images/cali.jpeg';

export default function TravelCard(props) {
  const {key, title, date, desc} = props.obj;
  const TravelsImages = [glasgow, ny, tampa, toronto, /*replace with quebec */northcarolina, northcarolina, /*replace w/ montreal*/northcarolina, iceland, california];
  const image = TravelsImages[key]

  return <div className={[props.className, "project"].join(' ')} onClick={props.onClick}>
        <img src={image} alt=""/>
        <div className="project-intro">
          <h3>
          {title}
          </h3>
        </div>
  </div>
}
