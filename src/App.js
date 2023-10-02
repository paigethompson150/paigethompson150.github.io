import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState(0);
  const pages = [<Home/>, <About/>]

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
