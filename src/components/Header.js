import { useState } from "react"
import Home from "./Home"

export default function Header(props) {
  const { setPage, page } = props

  return <header className="App-header">
      <ul>
        <li className={page === 0 ? "heading" : ""} id="title" onClick={() => {setPage(0)}}>Paige Thompson</li>
        <li className={page === 1 ? "heading" : ""} onClick={() => {setPage(1)}}>About</li>
        <li className={page === 2 ? "heading" : ""} onClick={() => {setPage(2)}}>Portfolio</li>
        <li className={page === 3 ? "heading" : ""} onClick={() => {setPage(3)}}>Contact</li>
        <li>|</li>
        <li className={page === 4 ? "heading" : ""} onClick={() => {setPage(4)}}>Travels</li>
      </ul>
  </header>
}