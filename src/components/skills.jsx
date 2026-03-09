/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |         SKILLS PAGE         |
   =============================== */ 
   
import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";
import '../css/skills.css';
import Course from "./course.jsx";
import TelefonicaLogo from "../assets/courses/telefonica.png";
import SanAndresLogo from "../assets/courses/sanandres.webp";
import FundacionLogo from "../assets/courses/fundacion.png";
import ColorLogo from "../assets/courses/circulo.webp";
import SistemasLogo from "../assets/courses/sistemasactivos.jpg";


export default function Skills() {


    const courses = [
        {
            id: "course-agile",
            title: "Agile Methodologies - SCRUM",
            logo: TelefonicaLogo,
            provider: "Fundación Telefónica",
            date: "May 2021",            
            description: "", 
        },
        {
            id: "course-cobol",
            title: "Cobol",
            logo: SistemasLogo,
            provider: "Sistemas Activos SRL",
            date: "Jan 2022",            
            description: "", 
        },        
        {
            id: "course-bigdata",
            title: "Principles of Big Data",
            logo: TelefonicaLogo,
            provider: "Fundación Telefónica - Movistar",
            date: "Apr 2021",            
            description: "", 
        },        
        {
            id: "course-growth",
            title: "Product Manager 'Growth Hacking'",
            logo: TelefonicaLogo,
            provider: "Fundación Telefónica",
            date: "Mar 2021",            
            description: "", 
        },
        {
            id: "course-analytics",
            title: "Web Analytics",
            logo: TelefonicaLogo,
            provider: "Fundación Telefónica",
            date: "Mar 2021",            
            description: "", 
        },
        {
            id: "course-color",
            title: "Strategic Uses of Color",
            logo: ColorLogo,
            provider: "Paula Zambelli",
            date: "Jun 2020",            
            description: "", 
        },
        {
            id: "course-cultural",
            title: "1°, 2° & 3° International Training Seminar for Cultural Managers",
            logo: FundacionLogo,
            provider: "Fundación Triángulo de España y el Centro Cultural de España.",
            date: "2008, 2009, 2010",            
            description: "", 
        },
        {
            id: "course-volunteers",
            title: "Development and Management of Volunteers for Social Organizations",
            logo: SanAndresLogo,
            provider: "San Andrés University",
            date: "",            
            description: "", 
        },        
        // {
        //     id: "course-media",
        //     title: "NGOs and Media: a win-win alliance",
        //     logo: TelefonicaLogo,
        //     provider: "Fundación Telefónica",
        //     date: "",            
        //     description: "", 
        // },
    ];


    return (
        <div>
            <Header />

            {/* ---- SKiLLS PAGE ---- */}
            <h1>Technical Skills</h1>

            <main className="skills_container">
                {/* <h1>I do</h1> */}
                <div className="skills_div">
                    <div className="skills_info">
                        <h3>Frontend Development</h3>
                        <ul className="ul_bullet">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript (ES6+)</li>
                            <li>React</li>
                            <li>React Native</li>
                            <li>Vite</li>
                            <li>Expo</li>
                            <li>WordPress</li>
                            <li>Responsive Design</li>
                            <li>Accessibility (WCAG)</li>
                            <li>Semantic HTML</li>
                            <li>SVG</li>
                            <li>CSS Grid / Flexbox</li>
                            <li>Component-based</li>
                            <li>REST API integration</li>
                        </ul>
                    </div>
                </div>

                <div className="skills_div">
                    <div className="skills_info">
                        <h3>Backend Development</h3>
                        <ul className="ul_bullet">
                            <li>REST APIs</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>PHP</li>
                            <li>C#</li>
                            <li>Java</li>
                            <li>COBOL</li>
                        </ul>
                    </div>
                </div>

                <div className="skills_div">
                    <div className="skills_info">
                        <h3>Database Management</h3>
                        <ul className="ul_bullet">
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>Oracle SQL</li>
                            <li>PL/SQL</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                </div>

                <div className="skills_div">
                    <div className="skills_info">
                        <h3>
                            Version Control & <br />
                            Agile Methodologies
                        </h3>
                        <ul className="ul_bullet">
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Agile workflows</li>
                        </ul>
                    </div>
                </div>

                <div className="skills_div">
                    <div className="skills_info">
                        <h3>UI/UX & Design</h3>
                        <ul className="ul_bullet">
                            <li>Figma</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe Photoshop</li>
                            <li>Color Theory</li>
                            <li>Design principles</li>
                            <li>Typography, spacing, and visual hierarchy</li>
                            <li>Adobe Creative Suite</li>
                        </ul>
                    </div>
                </div>

                <div className="skills_div">
                    <div className="skills_info">
                        <h3>Developer Tools</h3>
                        <ul className="ul_bullet">
                            <li>VS Code</li>
                            <li>Visual Studio</li>
                            <li>Dreamweaver</li>
                            <li>Visio</li>
                            {/* <li>
                                Microsoft Office Suite
                                Word, Excel, PowerPoint, 
                                Teams, Outlook, OneDrive
                            </li> */}
                            <li>Postman</li>
                            <li>Prettier</li>
                            <li>ESLint</li>
                            <li>FastAPI</li>
                            <li>SEO</li>
                        </ul>
                    </div>
                </div>

                <div className="skills_div" style={{ minHeight: "150px" }}>
                    <div className="skills_info">
                        <h3>AI-Enhanced Development</h3>
                        <ul className="ul_bullet">
                            <li>Prompt engineering</li>
                            <li>AI-assisted debugging & refactoring</li>
                            <li>Documentation and knowledge synthesis</li>
                            <li>GitHub Copilot</li>
                            <li>Cursor AI</li>
                            <li>ChatGPT</li>
                            <li>Gemini</li>
                            <li>DeepSeek</li>
                            <li>Claude (Anthropic)</li>
                        </ul>
                    </div>
                </div>

                <div className="skills_div" style={{ minHeight: "150px" }}>
                    <div className="skills_info">
                        <h3>Media Production</h3>
                        <ul className="ul_bullet">
                            <li>Adobe Premiere</li>
                            <li>Adobe Lightroom</li>
                            <li>Capture One</li>
                        </ul>
                    </div>
                </div>

                <div className="skills_div" style={{ minHeight: "150px" }}>
                    <div className="skills_info">
                        <h3>Spoken Languages</h3>
                        <ul className="ul_bullet">
                            <li>English</li>
                            <li>Spanish</li>
                        </ul>
                    </div>
                </div>

                {/* <br />
                <br />
                <br /> */}

                {/* ---- COURSES ---- */}
                <h1 className="hide">Certifications & Extra Courses</h1>

                <div className="courses-container hide">
                    {courses.map((course) => (
                        <Course
                            id={course.id}
                            key={course.id}
                            title={course.title}
                            logo={course.logo}
                            provider={course.provider}
                            date={course.date}
                            description={course.description}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
   