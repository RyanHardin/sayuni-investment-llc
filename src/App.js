import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import React from 'react'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <footer>
        <p>COPYRIGHT © 2022 SAYUNI INVESTMENT INC LLC - ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

export default App;
