import { useState } from "react"
import Home from "./Home"

export default function Header(props) {
  const { setPage } = props

  const [clicked, setClicked] = useState(false)
  const handleClicked = () => {
    setClicked(!clicked)
  }

  return <header className="App-header">
      <ul>
        <li id="title" onClick={() => {setPage(0)}}>Paige Thompson</li>
        <li onClick={() => {setPage(1)}}>About</li>
        <li onClick={() => {setPage(2)}}>Portfolio</li>
        <li onClick={() => {setPage(3)}}>Contact</li>
        <li>|</li>
        <li onClick={() => {setPage(4)}}>Travels</li>
      </ul>
  </header>
}