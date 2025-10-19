/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |   COMPONENT: network links  |
   =============================== */ 

import '../css/nets.css'
import LinkedinIcon from '../assets/nets/Linkedin_4.png';
import GithubIcon from '../assets/nets/Github_1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
// import InstragramIcon from '../nets/assets/Instagram_3.png';

export function Nets(props) {

    const nets = [    
        // email
        {name: "email", icon: faEnvelope, className: "net_icon", location: "mailto:developer@gabywaisman.com", alt: "Email link", tooltip: "Email"},
        // linkedin
        {name: "linkedin", image: LinkedinIcon, location: "https://www.linkedin.com/in/gabriela-waisman/", alt: "Linkedin link", tooltip: "LinkedIn"},
        // github
        {name: "github", image: GithubIcon, location: "https://github.com/Wisegirlie", alt: "Github link"},
        // instagram
        // {name: "instagram", image: InstragramIcon, location: "https://www.instagram.com/gabywaisman/", alt: "Instagram link"},
        // facebook
        // {name: "facebook", image: "./src/assets/facebook_6.png", location: "https://www.facebook.com/gabriela.waisman/", alt: "Facebook link"},        
        ];

    return (       
            <div className="networks_container">
                { nets.map(   net => 
                    <a href={net.location} target='_blank' key={net.name}>
                        {net.icon ? (
                            <FontAwesomeIcon icon={net.icon} className={props.className} alt={net.alt} style={{marginRight: '10px'}} />
                        ) : (
                            <img src={net.image} className={props.className} alt={net.alt} />
                        )}
                    </a>)
                }
            </div>     
    );
}

Nets.propTypes = {
    className: PropTypes.string
};