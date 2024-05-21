import { Button, ButtonGroup } from "@mui/material";
import './Header.css'

export function Header(props) {

    const navButtons = ['Home', 'About me', 'Projects', 'Contact'];

  return (
    <header>
      <img src="./src/assets/logo_gaby_bolder.png" alt="Logo Gabriela Waisman" className="logo-img"/>     
      <nav>
        <ul>
            <li className="nav-button">
                Home
            </li>
            <li className="nav-button">
                About me
            </li>
            <li className="nav-button">
                Projects
            </li>
            <li className="nav-button">
                Services
            </li>
            <li className="nav-button">
                Contact
            </li>
        </ul>
        
        {/* <ButtonGroup variant="contained" aria-label="Basic button group" >
          { navButtons.map(navButtons=> <Button key = {navButtons}>{navButtons}</Button> )}
        </ButtonGroup> */}
      </nav>
      {/* <div>{props.children}</div>       */}
    </header>
  );
}
