import { useState, useEffect } from "react"
import Home from "./Home"
import pageEmoji from "../images/pageEmoji.png"

export default function Header(props) {
  const { setPage, page } = props
  const [header, setHeader] = useState("header")

  const listenScrollEvent = (event) => {
    if (window.scrollY < 100) {
      return setHeader("header")
    } else if (window.scrollY > 100) {
      return setHeader("header2")
    } 
  }
  
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return <header id={header} className="App-header">
      <ul>
        <li className={[page === 0 ? "selected-heading" : "", "underlinedHeader"].join(' ')} id="title" onClick={() => {setPage(0)}}><img src={pageEmoji} alt="page emoji"/></li>
        <li className={[page === 1 ? "selected-heading" : "","underlinedHeader"].join(' ')} onClick={() => {setPage(1)}}>About</li>
        <li className={[page === 2 ? "selected-heading" : "","underlinedHeader"].join(' ')} onClick={() => {setPage(2)}}>Portfolio</li>
        <li className={[page === 3 ? "selected-heading" : "","underlinedHeader"].join(' ')} onClick={() => {setPage(3)}}>Contact</li>
        <li>|</li>
        <li className={[page === 4 ? "selected-heading" : "","underlinedHeader"].join(' ')} onClick={() => {setPage(4)}}>Travels</li>
      </ul>
  </header>
}