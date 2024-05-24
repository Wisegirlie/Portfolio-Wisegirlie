import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";
import './main.css'
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <Header />
                <div className="home_bio">
                    <div className="home_container">
                        <div className="home_photo_container">
                            <img src="./src/assets/foto_gaby.jpg" alt="Gabriela Waisman Photo" className="home_photo"/>
                        </div>
                        <div className="home_info">

                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
        
 }
    