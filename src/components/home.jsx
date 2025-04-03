/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |          HOME PAGE          |
   =============================== */ 

import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";
import '../css/main.css'
import { Link } from 'react-router-dom';
import photo_gaby from '../assets/foto_gaby.jpg';

const home_content = {
    
}


export default function Home() {
    return (
        <div>
            <Header />
            <main className="recuadro">
                <div className="home_container">
                    <div className="home_photo_container">
                        <img
                            src={photo_gaby}
                            alt="Gabriela Waisman Photo"
                            className="home_photo"
                        />
                    </div>
                    <div className="home_info">
                        Hello Everyone, I am
                        <h1>Gabriela Waisman</h1>
                        <div className="highlight_big">Software Developer</div>
                        <div className="highlight_big spacebetweenJobs">
                            Full-Stack Web Developer
                        </div>
                        <br /> <br />
                        <span style={{ color: "#333" }}>
                            I am a developer with 9 years of experience. I would
                            like to be part of teams that seek the creation of
                            innovative solutions. I have a lot of other
                            interests as well, as trading, culture, sci-fi, and
                            photography.{" "}
                        </span>
                        <br />
                        <Link to="/about">
                            <button className="button_white">About me</button>
                        </Link>
                    </div>
                </div>
            </main>

            {
                // old presentation
                /* <div className="recuadro">
                    <div className="home_container">
                        <div className="home_photo_container">
                            <img src="./src/assets/foto_gaby.jpg" alt="Gabriela Waisman Photo" className="home_photo"/>
                        </div>
                        <div className="home_info">
                            <h1>Full-Stack  Developer</h1>
                            I'm passionate about technology and would like to be part of teams that seek the creation of innovative solutions. I have a lot of other interests as well, as film, photography and trading. 

                        </div>
                    </div>
                </div> */
            }
            <Footer />
        </div>
    );
        
 }
    