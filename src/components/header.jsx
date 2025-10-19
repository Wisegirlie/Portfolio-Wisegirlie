/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |   COMPONENT:    HEADER      |
   =============================== */ 
   
import { Link } from 'react-router-dom';
import '../css/header.css'
import logo from '../assets/logo_gaby_bolder.png';
import hamburger from "../assets/hamburger.png";
import { useState, useEffect } from 'react';

// SVG Icon Definitions
const SunIcon = () => (
    <svg className="theme-toggle-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Environment / Sun">
            <path id="Vector" d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
    </svg>
);

const MoonIcon = () => (
    <svg className="theme-toggle-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M22 12.0004C22 17.5232 17.5228 22.0004 12 22.0004C10.8358 22.0004 9.71801 21.8014 8.67887 21.4357C8.24138 20.3772 8 19.217 8 18.0004C8 15.7792 8.80467 13.7459 10.1384 12.1762C11.31 13.8818 13.2744 15.0004 15.5 15.0004C17.8615 15.0004 19.9289 13.741 21.0672 11.8572C21.3065 11.4612 22 11.5377 22 12.0004Z" fill="currentColor"/>
        <path d="M2 12C2 16.3586 4.78852 20.0659 8.67887 21.4353C8.24138 20.3768 8 19.2166 8 18C8 15.7788 8.80467 13.7455 10.1384 12.1758C9.42027 11.1303 9 9.86422 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12Z" fill="currentColor"/>
    </svg>
);


export function Header() {

    const [responsiveMenu, setResponsiveMenu] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check localStorage for saved theme preference first
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        // If no saved preference, check system preference
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    });
    
    const navButtons = [
            {key: "home", name: "Home", location: "/"},
            {key: "about", name: "About me", location: "/about"},
            {key: "projects", name:"Projects", location: "/projects" },
            {key: "skills", name:"Tech Skills", location: "/skills" },
            {key: "contact", name:"Contact", location: "/contact" }];
            
   const menuitems = navButtons.map(
              button => 
                 <Link to={button.location} key={button.key} >
                    <li className="nav-button" id={button.key} >
                        {button.name}
                    </li>
                 </Link>
                );                      

    function toggleResponsiveMenu() {
        setResponsiveMenu(!responsiveMenu);    
    }

    function toggleDarkMode() {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    }

    // Apply theme to document on mount and when theme changes
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

  return (
      <header>
          <Link to="/">
              <img
                  src={logo}
                  alt="Logo Gabriela Waisman"
                  className="logo-img"
              />
          </Link>
          <nav>
              {/*  hamburger for responsive menu */}
              <div className="hamburger">
                  <button onClick={toggleResponsiveMenu} aria-label="Menu Button"  className="buttonHamburger">
                      <img
                          src={hamburger}
                          alt="Menu Mobile Icon"
                          className="hamburgerImg"
                      />
                  </button>
              </div>
              {/* menu items */}
              <ul className={`nav-ul ${responsiveMenu ? 'show-responsive-menu' : ''}`} id="menu">
                  {menuitems}
                  {/* Dark mode toggle */}
                  <li className="theme-toggle-nav">
                      <button 
                          onClick={toggleDarkMode} 
                          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                          className="theme-toggle-button"
                          title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                      >                          
                          <MoonIcon />
                          <SunIcon />
                      </button>
                  </li>
              </ul>
          </nav>
      </header>
  );
}
