import 'animate.css';

export default function Home(props) {
  return <div className="Home">
    <div className="dots">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>

      <div className="home-intro">
        <h4>Hey, my name is</h4>
        <h1>Paige Thompson</h1>
        <h4>Learn a little bit more <a onClick={props.onClick}><u>about me</u></a></h4>
      </div>
  </div>
}