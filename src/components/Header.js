import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Hamburger from './HamburgerMenu';
import logoLight from '../images/logo_light.mp4';
import logoDark from '../images/logo_dark.mp4';
import { initializeScrollAnimation } from './ScrollAnimation';

function Header({ darkMode }) {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [menuState, setMenuState] = useState({
    initial: false,
    clicked: false,
    menuName: "Menu"
  });
  const [disabled, setDisabled] = useState(false);
  const videoRef = useRef(null);

  // Set up resize handling
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    const cleanupScrollAnimation = initializeScrollAnimation();
    return () => cleanupScrollAnimation();
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Logo selection
  const logo = darkMode ? logoDark : logoLight;

  // Pause video at end
  const handleVideoEnd = () => {
    if (videoRef.current) videoRef.current.pause();
  };

  // Toggle menu functionality
  const toggleMenu = () => {
    if (!disabled) {
      disableMenu(); // Disable rapid toggling
      setMenuState((prevState) => ({
        initial: prevState.initial === false ? null : prevState.initial,
        clicked: !prevState.clicked,
        menuName: prevState.clicked ? "Menu" : "Close"
      }));
    }
  };

  // Disable menu button temporarily to avoid rapid toggling
  const disableMenu = () => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 1200); // Matches animation duration
  };

  // Reset menu state when navigating to a new page
  useEffect(() => {
    setMenuState({ clicked: false, menuName: "Menu" });
  }, [location]);

  // Close menu and re-enable button on link click
  const handleNavLinkClick = () => {
    setMenuState({ ...menuState, clicked: false, menuName: "Menu" });
    setDisabled(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <video
          ref={videoRef}
          src={logo}
          autoPlay
          muted
          className="logo-animation animation-element slide-up"
          onEnded={handleVideoEnd}
        />
      </div>
      {!isMobile ? (
        <nav className="nav-links">
          <NavLink to="/" className="animation-element" activeClassName="active-link" onClick={handleNavLinkClick}>
            Home
          </NavLink>
          <NavLink to="/about" className="animation-element" activeClassName="active-link" onClick={handleNavLinkClick}>
            About
          </NavLink>
          <NavLink to="/projects" className="animation-element" activeClassName="active-link" onClick={handleNavLinkClick}>
            Projects
          </NavLink>
          <NavLink to="/contact" className="animation-element" activeClassName="active-link" onClick={handleNavLinkClick}>
            Contact
          </NavLink>
        </nav>
      ) : (
        <>
          <button
            disabled={disabled}
            className={`hamburger-button ${menuState.clicked ? 'open' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <div className={`hamburger-menu ${menuState.clicked ? 'open' : ''}`}>
            <Hamburger state={menuState} toggleMenu={toggleMenu} />
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
