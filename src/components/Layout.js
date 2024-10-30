// src/components/Layout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { MdDarkMode, MdLightMode } from 'react-icons/md'; // Import the icons here

function Layout({ darkMode, toggleTheme }) {
  const location = useLocation();

  return (
    <div className="App">
      {/* Theme Toggle */}
      <div className="theme-toggle">
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {darkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
        </button>
      </div>

      {/* Header */}
      <Header darkMode={darkMode} />

      {/* Page Content */}
      <Outlet />

      {/* Conditionally Render Footer */}
      {location.pathname !== '/contact' && <Footer />}
    </div>
  );
}

export default Layout;
