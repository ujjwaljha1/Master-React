import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Help from "./Pages/Help/help";
import About from "./Pages/About/about";
import Home from "./Pages/Home/home";

function App() {
  return (
    <div className='App'>
      <p>This is home</p>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/help">Help</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
