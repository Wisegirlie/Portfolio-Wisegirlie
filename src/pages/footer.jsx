import './footer.css'

export function Footer() {

    const nets = [
        // instagram
        {name: "instagram", image: "./src/assets/Instagram_3.png", location: "https://www.instagram.com/gabywaisman/", alt: "Instagram link"},
        // github
        {name: "github", image: "./src/assets/Github_1.png", location: "https://github.com/Wisegirlie", alt: "Github link"},
        // facebook
        {name: "facebook", image: "./src/assets/facebook_6.png", location: "https://www.facebook.com/gabriela.waisman/", alt: "Facebook link"},
        // linkedin
        {name: "linkedin", image: "./src/assets/Linkedin_4.png", location: "https://www.linkedin.com/in/gabriela-waisman/", alt: "Linkedin link"},
        ];

    return (
        <footer>
             © Gabriela Waisman <br />
             <a href="mailto:gabywaisman@hotmail.com">gabywaisman@hotmail.com</a> <br />  
            <div className="networks_container">
                { nets.map(   net => 
                    <a href={net.location} target='blank' key={net.name}>
                        <img src={net.image} className="net_icon_white" alt={net.alt} />
                    </a>)
                }
            </div>            
        </footer>
    );
}
   