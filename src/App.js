import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Biography from './components/biography';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetails';
import Academic from './components/Academic';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import ScrollToTop from './components/ScrollToTop';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import Loader from './components/Loader'; // Import the Loader component

function App() {
  const [loading, setLoading] = useState(true); // Initial loading state
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

  useEffect(() => {
    // Set a minimum duration for the loader
    const fakeLoadingDuration = 7000; // 5000 ms minimum duration
    const timeout = setTimeout(() => setLoading(false), fakeLoadingDuration);

    // Clear timeout if component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} /> // Show loader during initial loading period
      ) : (
        <Router>
          <ScrollToTop /> {/* Add ScrollToTop component here */}
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
              <Route path="/about" element={<About />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project1" element={<Project1 />} />
              <Route path="/project2" element={<Project2 />} />
              <Route path="/project3" element={<Project3 />} />
              <Route path="/project4" element={<Project4 />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/academics" element={<Academic />} />
            </Route>
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
