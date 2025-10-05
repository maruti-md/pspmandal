import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Box, Typography } from '@mui/material';
import Navbar from './components/Navbar';


import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Footer from './components/Footer';

// Placeholder pages
// function Home() { return <Typography variant="h4">Welcome to Our NGO</Typography>; }
// function About() { return <Typography variant="h4">About Us</Typography>; }
// function Projects() { return <Typography variant="h4">Our Projects</Typography>; }
// function Events() { return <Typography variant="h4">Events</Typography>; }
// function Donate() { return <Typography variant="h4">Donate</Typography>; }
// function Contact() { return <Typography variant="h4">Contact</Typography>; }

export default function App() {
  return (
    <Router>
      <Box sx={{ bgcolor: "#121212", minHeight: "100vh", width: '100vw' }}>
        <Navbar />
        <Box sx={{ color: "white", py: 4, width: '100%' }}>
          <Routes>
            <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/events" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
          </Routes>
           <Footer />
        </Box>
      </Box>
    </Router>
  );
}