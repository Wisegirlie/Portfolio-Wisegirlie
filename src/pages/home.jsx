import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";
import './main.css'
import { Link } from 'react-router-dom';

const home_content = {
    
}


export default function Home() {
    return (
        <div>
            <Header />
                <div className="recuadro">
                    <div className="home_container">
                        <div className="home_photo_container">
                            <img src="./src/assets/foto_gaby.jpg" alt="Gabriela Waisman Photo" className="home_photo"/>
                        </div>
                        <div className="home_info">
                            <h1>Full-Stack  Developer</h1>
                            I'm passionate about technology and would like to be part of teams that seek the creation of innovative solutions. I have a lot of other interests as well, as film, photography and trading. 

                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
        
 }
    