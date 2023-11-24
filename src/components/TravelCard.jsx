import uk from '../images/uk/londoneye.jpeg';
import qc from '../images/qc/quebec.png';
import tampa from '../images/tmp/sauloholdingsun.jpeg';
import northcarolina from '../images/northcarolina.jpeg';
import iceland from '../images/iceland.jpeg';
import california from '../images/cali.jpeg';
import ny from '../images/ny/drive.gif';
import mtl from '../images/mtl/mtl.jpeg';

export default function TravelCard(props) {
  const {key, title, date, desc} = props.obj;
  const TravelsImages = [uk, ny, tampa, qc, northcarolina, mtl, iceland, california];
  const image = TravelsImages[key]

  return <div className={[props.className, "project", "travel-card"].join(' ')} onClick={props.onClick}>
        <img src={image} alt=""/>
        <div className="project-intro">
          <h3>
          {title}
          </h3>
        </div>
  </div>
}
