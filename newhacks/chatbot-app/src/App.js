import {React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Map from './Map'; 
import Todo from './Todo';
import Bot from './Bot';
import Community from './Community';
import './App.css';
import GemBot from './Gembot';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/bot" element={<Bot/>} />
        <Route path="/community" element={<Community />} />
        <Route path="/bot" element={<GemBot />} />

      </Routes>
    </Router>
  );
}

export default App;
