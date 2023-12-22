import { useState, useEffect } from "react"
import atomic from "../images/atomic.png"

export default function Header(props) {
  const { page, setPage } = props
  const [headerID, setHeaderID] = useState("")

  const listenScrollEvent = (event) => {
    if (window.scrollY < 100) {
      return setHeaderID("")
    } else if (window.scrollY > 100) {
      return setHeaderID("scroll-header")
    } 
  }
  
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return <header className="App-header">
      <ul id={headerID}>
        <li className={page === 0 ? "selected-heading" : ""} id="title" onClick={() => {setPage(0)}}>
          <img src={atomic} alt="atomic structure"/>
        </li>
        <li className={page === 1 ? "selected-heading" : ""} onClick={() => {setPage(1)}}>About</li>
        <li className={page === 2 ? "selected-heading" : ""} onClick={() => {setPage(2)}}>Portfolio</li>
        <li className={page === 3 ? "selected-heading" : ""} onClick={() => {setPage(3)}}>Contact</li>
      </ul>
  </header>
}