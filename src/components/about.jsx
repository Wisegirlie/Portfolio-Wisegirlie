/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |          ABOUT PAGE         |
   =============================== */ 
   
   
import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";
import { Link } from 'react-router-dom';
import Photo_Gaby from '../assets/foto_gaby.jpg'
import '../css/about.css';

export default function About() {
    return (
        <div>
            <Header />
                <div className="recuadro_nomargin">
                    <div className="about_container">
                        <div className="about_info_div about_resume_div">

                            <img src={Photo_Gaby} alt="Gabriela Waisman Photo" className="about_photo"/> <br />


                            <i>My Resume</i>
                            <h1 className="blanco">Gabriela Waisman</h1> 
                            <a href={'/Gabriela-Waisman-Resume.pdf'} download="Gabriela-Waisman-Resume.pdf">
                                <button className="button_white_no_margin ">Download Resume</button>  
                            </a>
                                                    
                            <br />
                        </div> 
                        <div className="about_bio_div gris_back"> 
                            <h1>About me</h1>
                                
                            <span style={{fontSize: '110%'}}><strong>I am a skilled and passionate web and software developer with experience in building effective, visually appealing, and user-friendly websites and applications. </strong></span>
                            <br /> <br />
                            
                            I started programming at the age of 12, and it was then that I found my passion for technology. From that moment on, I began teaching myself various programming languages and applications. I graduated as a <strong> Computer Programming Technician</strong> from a technical high school, and since I’ve always been drawn to challenges, I pursued a different field of study at university to broaden my skill set, getting a bachelor’s degree in <strong> Design of Image and Sound</strong> from University of Buenos Aires, Argentina. <br /> <br />

                            With over 9 years of experience in <strong>Web Development</strong>, I decided to advance my career in software engineering, earning a diploma as a <strong>Software Engineering Technician</strong> from Centennial College, Canada. 
                            I also earned a Certificate in <strong>Inclusive Leadership Practices</strong> which provided me with critical skills to foster inclusivity in modern workplaces.
                            Along the way, I've expanded my expertise across a wide range of technologies, skills, and programming languages.                            
                            <br /> <br />

                            I am eager to contribute to the innovations shaping our future. One key realization I've had is that great achievements are only possible through <strong>teamwork</strong>. <br />
                            Let’s make it happen!
                            <br />

                            <Link to="/contact">
                                <button className="button_white">Contact me</button>
                            </Link>
                            

                            
                            

                        </div>  
                    </div> {/* contact_container */}
                </div>            
            <Footer/> 
        </div>
    );
}
    