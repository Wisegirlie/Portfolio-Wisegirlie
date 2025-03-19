/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |   COMPONENT:    HEADER      |
   =============================== */ 
   
import { Link } from 'react-router-dom';
import '../css/header.css'
import logo from '../assets/logo_gaby_bolder.png';

export function Header(props) {

    const navButtons = [
            {key: "home", name: "Home", location: "/"},
            {key: "about", name: "About me", location: "/about"},
            {key: "projects", name:"Projects", location: "/projects" },
            {key: "services", name:"Services", location: "/services" },
            {key: "contact", name:"Contact", location: "/contact" }];
            
   const menuitems = navButtons.map(
              button => 
                 <Link to={button.location} key={button.key} >
                    <li className="nav-button" id={button.key} >
                        {button.name}
                    </li>
                 </Link>
                );                      
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo Gabriela Waisman" className="logo-img"/>     
      </Link>
      <nav>
        <ul>{menuitems}</ul>   
      </nav>     
    </header>
  );
}
