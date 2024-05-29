import './footer.css'

export function Nets(props) {

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
            <div className="networks_container">
                { nets.map(   net => 
                    <a href={net.location} target='blank' key={net.name}>
                        <img src={net.image} className={props.className} alt={net.alt} />
                    </a>)
                }
            </div>     
    );
}