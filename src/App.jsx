// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/Home';


export default function App({ toggleColorMode }) {
  return (
    <>
      <Header toggleColorMode={toggleColorMode} />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* More routes... */}
      </Routes>
    </>
  );
}
