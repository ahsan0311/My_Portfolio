// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import Education from './components/Education';
import Skill from './components/Skill';
import Portfolio from './components/Projects';
import MouseBall from './components/Mouse';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <MouseBall/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="Skills" element={< Skill/>} />
          <Route path="projects" element={< Portfolio/>} />
          <Route path="contact" element={< Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
   
   </>
  );
}



export default App;


