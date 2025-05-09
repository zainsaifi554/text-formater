
import './App.css';

import React from 'react'
import Navbar from './Components/Navbar'

// import TextForm from './Components/TextForm'



import About from './Components/About.js';

function App() {
  return (
    <>
 <Navbar title="Text Formater" aboutText="about "/>
{/* <TextForm heading="Enter the text to analyze below" /> */}
 <About/>

 {/* <Navbar/> */}

    </>
  )
}

export default App

