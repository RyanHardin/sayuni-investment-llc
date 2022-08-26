import './App.css';
import Navbar from './components/Navbar';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'

function App() {
  return (
    <div className="App">
      <h2 style={{ border: "2px solid black", padding: "5px" }}>Sayuni Investment Inc LLC</h2>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </div>
      <footer>
        <p>COPYRIGHT © 2022 SAYUNI INVESTMENT INC LLC - ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

export default App;
