/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |   COMPONENT: network links  |
   =============================== */ 

import '../css/nets.css'
import LinkedinIcon from '../assets/Linkedin_4.png';
import GithubIcon from '../assets/Github_1.png';
// import InstragramIcon from '../assets/Instagram_3.png';

export function Nets(props) {

    const nets = [    
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
                        <img src={net.image} className={props.className} alt={net.alt} />
                    </a>)
                }
            </div>     
    );
}