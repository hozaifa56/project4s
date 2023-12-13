import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Generator from './components/Generator';
import GeneratorCL from './components/GeneratorCL';
import Home from './components/Home';
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Router>
        <div className='header fs-1'>Statement of Purpose & Cover Letter Generator </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Generator' element={<Generator />} />
          <Route path='/GeneratorCL' element={<GeneratorCL />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
