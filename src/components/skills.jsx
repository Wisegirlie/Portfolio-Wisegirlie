/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |         SKILLS PAGE         |
   =============================== */ 
   
import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";
import '../css/skills.css';


export default function Skills() {


    const courses = [
        {
            id: "course-cobol",
            title: "Cobol",
            provider: "Sistemas Activos SRLSistemas Activos SRL",
            date: "Jan 2022",            
            description: "", 
        },
        {
            id: "course-agile",
            title: "Agile Methodologies - SCRUM",
            provider: "Fundación Telefónica",
            date: "May 2021",            
            description: "", 
        },
        {
            id: "course-bigdata",
            title: "Principles of Big Data",
            provider: "Fundación Telefónica",
            date: "Apr 2021",            
            description: "", 
        },        
        {
            id: "course-growth",
            title: "Product Manager 'Growth Hacking'",
            provider: "Fundación Telefónica",
            date: "Mar 2021",            
            description: "", 
        },
        {
            id: "course-analytics",
            title: "Web Analytics",
            provider: "Fundación Telefónica",
            date: "Mar 2021",            
            description: "", 
        },
        {
            id: "course-color",
            title: "Strategic Uses of Color",
            provider: "Paula Zambelli",
            date: "Jun 2020",            
            description: "", 
        },
        {
            id: "course-cultural",
            title: "1st, 2nd and 3rd International Training Seminar for Cultural Managers",
            provider: "Fundación Triángulo de España y el Centro Cultural de España.",
            date: "2008, 2009, 2010",            
            description: "", 
        },
        {
            id: "course-volunteers",
            title: "Development and management of volunteers for social organizations",
            provider: "San Andrés University",
            date: "",            
            description: "", 
        },        
        {
            id: "course-media",
            title: "NGOs and Media: a win-win alliance",
            provider: "Fundación Telefónica",
            date: "",            
            description: "", 
        },
    ];


    return (
        <div>
            <Header />

            {/* ---- SKiLLS PAGE ---- */}    
            <h1>Technical Skills</h1>            
           
            <main class="skills_container">
                {/* <h1>I do</h1> */}
                <div class="skills_div">
                    <div class="skills_info">                    
                            <h3>Frontend Development</h3>
                            <ul className="ul_bullet">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>React Native</li>
                                <li>WordPress</li>
                                <li>Responsive Design</li>
                                <li>SVG</li>
                            </ul>                     
                    </div>
                </div>

                <div class="skills_div">
                    <div class="skills_info">   
                            <h3>Backend Development</h3>
                            <ul className="ul_bullet">
                                <li>PHP</li>
                                <li>Node.js</li>
                                <li>C#</li>
                                <li>Java</li>
                                <li>COBOL</li>
                                <li>Express.js</li>                                
                            </ul>
                    </div>
                </div>

                <div class="skills_div" >
                    <div class="skills_info">                    
                            <h3>Database Management</h3>
                            <ul className="ul_bullet">
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>Oracle SQL</li>
                                <li>PL/SQL</li>
                            </ul>                      
                    </div>
                </div>

                
                <div class="skills_div" >
                    <div class="skills_info">                   
                            <h3>Version Control & <br />Agile Methodologies</h3>
                            <ul className="ul_bullet">
                                <li>Git</li>
                                <li>Scrum</li>                
                            </ul>                           
                    </div>
                </div>     

                <div class="skills_div" >
                    <div class="skills_info">                    
                            <h3>UI/UX & Design</h3>
                            <ul className="ul_bullet">
                                <li>Figma</li>
                                <li>Adobe Illustrator</li>
                                <li>Adobe Photoshop</li>
                                <li>Adobe Premiere</li>
                                <li>Adobe Lightroom</li>
                                <li>Capture One</li>                                
                                <li>Color Theory</li>
                                <li>Design principles</li>
                            </ul>
                    </div>
                </div>

                
                <div class="skills_div" >
                    <div class="skills_info">                   
                            <h3>Additional Tools</h3>
                            <ul className="ul_bullet">                                
                                <li>Visio</li>                                
                                <li>VS Code</li>
                                <li>Visual Studio</li>                                
                                <li>Dreamweaver</li>                                
                                <li>SEO – Search Engine Optimization</li>                                               
                                <li>Microsoft Office Suite:<br />Word, Excel, PowerPoint, Teams, Outlook, OneDrive</li>                
                            </ul>   
                    </div>
                </div>
                
                <div class="skills_div" style={{minHeight: "150px"}}>
                    <div class="skills_info">                   
                            <h3>Spoken Languages</h3>
                            <ul className="ul_bullet">
                                <li>English</li> 
                                <li>Spanish</li>
                            </ul>                       
                    </div>
                </div>

                <br /><br />

                {/* ---- COURSES ---- */}    
                 {/* <h1>Certifications & Courses</h1>             */}
           


            </main>
            <Footer/>
        </div>        
    );
}
   