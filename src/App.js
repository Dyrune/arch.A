// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Biography from './components/biography';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetails';
import Academic from './components/Academic'; // Import the Academic component

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle dark mode
  const toggleTheme = () => setDarkMode(!darkMode);

  // Toggle menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Update theme on root element based on darkMode state
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Router>
      <Routes>
        <Route
          element={
            <Layout
              darkMode={darkMode}
              toggleTheme={toggleTheme}
              menuOpen={menuOpen}
              toggleMenu={toggleMenu}
            />
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/academics" element={<Academic />} /> {/* Add Academic route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
