import { Link } from 'react-router-dom';
import './header.css'

export function Header(props) {

    const navButtons = [
            {key: "home", name: "Home", location: "/"},
            {key: "about", name: "About me", location: "/about"},
            {key: "projects", name:"Projects", location: "/projects" },
            {key: "services", name:"Services", location: "/services" },
            {key: "contact", name:"Contact", location: "/contact" }];
            
   const menuitems = navButtons.map(
              button => 
                 <Link to={button.location}>
                    <li key={button.key} className="nav-button" >
                        {button.name}
                    </li>
                 </Link>
                );                      
  return (
    <header>
      <Link to="/">
        <img src="./src/assets/logo_gaby_bolder.png" alt="Logo Gabriela Waisman" className="logo-img"/>     
      </Link>
      <nav>
        <ul>{menuitems}</ul>   
      </nav>     
    </header>
  );
}
