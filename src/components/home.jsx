/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |          HOME PAGE          |
   =============================== */ 

import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";
import "../css/colors.css";
import '../css/home.css'
import { Link } from 'react-router-dom';
import photo_gaby from '../assets/gaby_waisman_light.jpg';
import { useState, useEffect } from 'react';

const titles = [
    "Full-Stack Developer",
    "Front-end Developer",
    "Back-end Developer",
    "Web Developer",   
    "App Developer",
    "Software Engineer",
    "UI/UX Designer",
    "AI Enthusiast",
];

const TITLE_CYCLE_MS = 1800;

export default function Home() {

    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((index) => (index + 1) % titles.length);
        }, TITLE_CYCLE_MS);

        return () => clearInterval(interval);
    }, []);

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
                        <div className="highlight_big">
                            <span className="title-rotator" style={{width: '180px'}}>
                                {titles.map((title) => (
                                    <span
                                        key={title}
                                        className="title-rotator-sizer"
                                        aria-hidden="true"
                                    >
                                        {title}
                                    </span>
                                ))}
                                <span
                                    key={currentTitleIndex}
                                    className="title-rotator-word"
                                    aria-live="polite"
                                >
                                    {titles[currentTitleIndex]}
                                </span>
                            </span>
                        </div>
                        <div className="highlight_big spacebetweenJobs">
                            Web & Mobile
                        </div>
                        <br /> <br />
                        <span className="home_text_intro"> 
                            Software Developer with a designer’s eye and an engineer's mind, passionate about crafting clear, intuitive, user-friendly, and visually appealing digital experiences. Blends strong UI/UX design and communication expertise with solid technical skills in modern technologies.
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
    