import { useState } from "react"
import Home from "./Home"
import pageEmoji from "../images/pageEmoji.png"

export default function Header(props) {
  const { setPage, page } = props

  return <header className="App-header">
      <ul>
        <li className={page === 0 ? "heading" : ""} id="title" onClick={() => {setPage(0)}}><img src={pageEmoji} alt="page emoji"/></li>
        <li className={[page === 1 ? "heading" : "","underlinedHeader"].join(' ')} onClick={() => {setPage(1)}}>About</li>
        <li className={[page === 2 ? "heading" : "","underlinedHeader"].join(' ')} onClick={() => {setPage(2)}}>Portfolio</li>
        <li className={[page === 3 ? "heading" : "","underlinedHeader"].join(' ')} onClick={() => {setPage(3)}}>Contact</li>
        <li>|</li>
        <li className={[page === 4 ? "heading" : "","underlinedHeader"].join(' ')} onClick={() => {setPage(4)}}>Travels</li>
      </ul>
  </header>
}