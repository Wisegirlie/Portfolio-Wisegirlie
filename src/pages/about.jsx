/* ===============================
   |  Student: GABRIELA WAISMAN  |
   |         # 301328259         |
   =============================== 
   |          ABOUT PAGE         |
   =============================== */ 
   
   
import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div>
            <Header />
                <div className="recuadro_nomargin">
                    <div className="contact_container">
                        <div className="contact_info_div about_resume_div">

                            <img src="./src/assets/foto_gaby.jpg" alt="Gabriela Waisman Photo" className="about_photo"/> <br />


                            <i>My Resume</i>
                            <h1 className="blanco">Gabriela Waisman</h1> 
                            <a href={'./src/assets/Gabriela-Waisman-Resume.pdf'} download="Gabriela-Waisman-Resume.pdf">
                                <button className="button_white_no_margin ">Download Resume</button>  
                            </a>
                                                    
                            <br />
                        </div> 
                        <div className="about_bio_div gris_back"> 
                            <h1>How about me</h1>
                                
                            <span style={{fontSize: '110%'}}><strong>I am a skilled and passionate web and software developer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. </strong></span>
                            <br /> <br /><br />
                            
                            I discovered computer programming at the age of 12, and since then, never stopped enjoying it. As a teenager, I chose a technical High School from where I graduated as a <strong> Computer Programming Technician.</strong> <br /> <br />

                            My many interests took me through diverse paths, getting a bachelor’s degree in  
                            <strong> Design of Image and Sound</strong> (Cinematography and Multimedia) and an Advanced Diploma in <strong>Television Direction and Production</strong>. I’m also a professional (and hobbyist) <strong>photographer</strong>. 
                            <br /> <br />

                            At all times, I kept self-teaching different aspects of programming, including Full-Stack Web Development, Javascript, SEO, C# and Cobol, among others, until I decided to make it official and study to be a <strong>Software Engineer</strong>. So, I did, and here I am. I also have a Certificate in <strong>Inclusive Leadership Practices</strong>. 
                            <br /> <br />
                            
                            As a web developer with a strong background in <strong>visual communication</strong> and <strong>social sciences</strong>, I possess comprehensive skills in color theory, design principles, and communication processes.
                            <br /> <br />
                            
                            I have been a <strong>freelancer Web Developer</strong> for the last years, but I realized I wanted to do bigger things, and to achieve them, the better was being part of a <strong>team</strong>. 
                            <br /> <br />

                            I love creating websites and applications, and I’m also very  interested in entering the financial sector, with the aspiration to work in trading technology someday.
                            <br /> <br />

                            Maybe you can help me to make <span className="fucsia"><strong>my dreams true</strong>.</span>
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
    