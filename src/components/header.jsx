/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |   COMPONENT:    HEADER      |
   =============================== */ 
   
import { Link } from 'react-router-dom';
import '../css/header.css'
import logo from '../assets/logo_gaby_bolder.png';
import hamburger from "../assets/hamburger.png";
import { useState } from 'react';


export function Header(props) {

    const [responsiveMenu, setResponsiveMenu] = useState(false);
    
    const navButtons = [
            {key: "home", name: "Home", location: "/"},
            {key: "about", name: "About me", location: "/about"},
            {key: "projects", name:"Projects", location: "/projects" },
            {key: "skills", name:"Skills", location: "/skills" },
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
                  <button onClick={toggleResponsiveMenu}>
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
              </ul>
          </nav>
      </header>
  );
}
