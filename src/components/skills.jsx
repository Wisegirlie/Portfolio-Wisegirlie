/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |         SKILLS PAGE         |
   =============================== */ 
   
import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";
import '../css/skills.css';

export default function Skills() {
    return (
        <div>
            <Header />

            {/* ---- SKiLLS PAGE ---- */}    
            <h1>Technical Skills</h1>            
           
            <div class="skills_container">
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


            </div>
            <Footer/>
        </div>        
    );
}
   