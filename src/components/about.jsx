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
                <main className="recuadro_nomargin">
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
                                
                            <span style={{fontSize: '110%'}}><strong>I am a passionate software developer with experience in building effective, visually appealing, and user-centric digital experiences. </strong></span>
                            <br /> <br />

                            I have a diverse background in both <strong>Software Development</strong> and <strong>Design of Image and Sound</strong>, which allows me to approach projects with a unique perspective that combines technical expertise with creative design. <br /> <br />
                            
                            My journey into the tech world began when I was 12 years old, where I discovered my passion for technology and programming. From that moment on, I taught myself various programming languages and applications, beginning my journey into tech and graduating from high school with an advanced diploma as a <strong>Computer Programming Technician.</strong> <br /> <br />
                                                 
                            Always curious and eager for new challenges, I decided to broaden my skill set by pursuing a different field of study at university, earning a bachelor’s degree in <strong> Design of Image and Sound</strong> from University of Buenos Aires, Argentina. <br /> <br />

                            Fascinated by the power of technology to solve real-world problems and improve lives, I took my career a step further into software engineering, earning a diploma as a <strong>Software Engineering Technician</strong> from Centennial College, Canada. 
                            <br /> <br />

                            I also earned a Certificate in <strong>Inclusive Leadership Practices</strong> which provided me with critical skills to foster inclusivity in modern workplaces.
                            <br /> <br />
                            Along the way, I’ve expanded my expertise across a wide range of technologies, tools, and programming languages—and continue to do so every day.
                            <br /> <br />

                             I am eager to contribute to the innovations shaping our present and future. One key realization I've had is that great achievements are only possible through <strong>teamwork</strong>. <br /> <br />

                            Let’s make it happen!
                            <br />
                            <br />
                            <h3>Awards</h3>
                            <strong>PomeGran Inc. Scholarship Award</strong> - Centennial College<br />
                            Awarded scholarship based on demonstrated passion for the field and academic excellence. <br /><br />
                            
                            <strong>Outstanding Personality of Culture of the City of Buenos Aires</strong><br />
                            Legislature of the City of Buenos Aires, Argentina.<br /> 
                            
                            <Link to="/contact">
                                <button className="button_white">Contact me</button>
                            </Link>
                            

                            
                            

                        </div>  
                    </div> {/* contact_container */}
                </main>            
            <Footer/> 
        </div>
    );
}
    