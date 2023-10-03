import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Travels from './components/Travels';
import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState(0);
  const pages = [<Home onClick={() => setPage(1)}/>, <About/>, <Portfolio/>, <Contact/>, <Travels/>]

  return (
    <div className="App">
      <Header setPage={setPage} page={page}/>
      <div>
        {pages[page]}
      </div>
    </div>
  );
}

export default App;
