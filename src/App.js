import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm.jsx';
import About from './Components/About.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343434';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  return (
    <BrowserRouter>
      <Navbar title="Text Formater" mode={mode} aboutText="About" toggleMode={toggleMode} />

      <Routes>
        <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />} />
        <Route path="/about" element={<About aboutText="About" mode={mode} />} />
        <Route path="*" element={<h1 className="text-center mt-10">404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
