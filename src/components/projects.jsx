/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |        PROJECTS PAGE        |
   =============================== */ 
   
import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";
import projectDiversaImg from '../assets/projects/project-diversa1.jpg';
import projectRosariaImg from '../assets/projects/project-rosaria3.jpg';
import projectEnergitImg from'../assets/projects/project-energit2.jpg';
import projectRealStateImg from '../assets/projects/project-realstate1.jpg';
import projectGabywaismanImg from '../assets/projects/projects-gabywaisman.jpg';
import projectFormBuilderImg from '../assets/projects/project-form-builder.png';
import projectFindGrantImg from '../assets/projects/project-findgrant-home2.jpg';
import projectProtectedAreasImg from '../assets/projects/project-protectedareas_2.jpg';
import projectSupermarketImg from '../assets/projects/project-supermarketlist.jpg';
import projectSvgMapImg from '../assets/projects/project-svgmap.jpg';
import projectTheatreAppImg from '../assets/projects/projects-theatreapp.jpg';
import projectRegistrationForm from '../assets/projects/secure-registration-form.jpg';
import Project from "./project.jsx";
import "../css/projects.css";

export default function Projects() {

    const projects = [
        {  id: 'project-energit', 
            title: 'Energit S.A.', 
            type: "Web Development", 
            description: "Design and development of complete website for a company, including an internal portal to manage product database.", 
            website: "https://energit.com.ar", 
            image: projectEnergitImg, 
            techs: ["PHP", "MySQL", "JavaScript", "HTML", "CSS" ]
        },        
        {  id: 'project-findgrant', 
            title: 'Findgrant', 
            type: "Web & Mobile App", 
            description: "Front-end Development of a fully functional web & mobile app, based on a Figma design provided by the client. Successfully implemented the original design and functionality; later visual and structural changes were made by the product owner after handoff.", 
            website: "https://findgrant.ca/", 
            image: projectFindGrantImg, 
            techs: ["React Native", "Expo", "Node.js", "Express.js", "Git", "JavaScript","HTML", "CSS"]
        },
        {  id: 'project-theatreapp', 
            title: 'Theatre App', 
            type: "Web App Development", 
            description: "Full-Stack development of a comprehensive online resource for the performing arts, culture, and entertainment. It features user authentication, client & admin portal, ticket purchasing simulation, among other features. (Still under development)", 
            website: "https://github.com/Wisegirlie/Theatre-App", 
            image: projectTheatreAppImg, 
            techs: ["React", "Vite", "Node.js", "REST API", "Express.js", "MongoDB", "JavaScript", "HTML", "CSS", "Git", "Login authentication"]
        }, 
        {  id: 'project-portfolio', 
            title: 'My Portfolio', 
            type: "Web Development", 
            description: "Design and development of my portfolio's website.", 
            website: "/", 
            image: projectGabywaismanImg, 
            techs: ["React", "Vite", "Node.js", "PHP", "JavaScript","HTML", "CSS", "Git"]
        },          
        {  id: 'project-diversafilms', 
            title: 'Diversa Films', 
            type: "Web Development", 
            description: "Development of complete website for the company.", 
            website: "https://www.diversafilms.com.ar", 
            image: projectDiversaImg, 
            techs: ["HTML", "CSS", "JavaScript"]
        },   
        {  id: 'project-secure-form', 
            title: 'Secure Registration System', 
            type: "Component", 
            description: "Secure user registration form with many features as real-time front-end and back-end validation, password strength requirements, international phone number input, accessibility support, responsive design, normalized database structure, and secure data storage following industry best practices.", 
            website: "https://gabywaisman.com/portfolio/secure-registration-form/index.html", 
            image: projectRegistrationForm, 
            techs: ["PHP",  "MySQL",  "JavaScript", "HTML", "CSS", "Git"]
        }, 
        {  id: 'project-realstate', 
            title: 'Real State', 
            type: "Web Development", 
            description: "Design and development of complete website template for a real state company.", 
            website: "https://www.gabywaisman.com/portfolio/real-state/index.html", 
            image: projectRealStateImg, 
            techs: ["HTML", "CSS", "JavaScript"]
        },
        {  id: 'project-formbuilder', 
            title: 'Form Builder', 
            type: "Web App", 
            description: "Created a web app to create custom HTML forms with drag & drop. (I'll be adding features).", 
            website: "https://www.gabywaisman.com/portfolio/form-builder/index.html", 
            image: projectFormBuilderImg, 
            techs: ["React", "JavaScript", "Git", "HTML", "CSS"]
        },    
        {  id: 'project-supermarketlist', 
            title: 'Voice Commanded Supermarket List', 
            type: "Mobile App", 
            description: "App that allows users to easily create and manage their shopping lists using voice commands.", 
            website: "https://github.com/Wisegirlie/Supermarket-list-voice-commanded", 
            image: projectSupermarketImg, 
            techs: ["React Native", "Expo", "Node.js", "Express.js","MongoDB", "Google Speech-to-Text API", "JavaScript", "HTML", "CSS", "Git"]
        }, 
        {  id: 'project-rosaria', 
            title: 'Rosaria', 
            type: "Web Development", 
            description: "Design and development of complete website. The client required to use their brand's colors and fonts.", 
            website: "https://www.soyrosaria.com", 
            image: projectRosariaImg, 
            techs: ["HTML", "CSS", "JavaScript"]
        },
        {  id: 'project-svgmap', 
            title: 'Interactive SVG Map', 
            type: "Component", 
            description: "Developed an interactive map, using full use of SVG properties, matching the look and feel of the client's webpage.", 
            website: "https://unidadpopular.org.ar/mapa-referentes/",
            image: projectSvgMapImg, 
            techs: ["SVG", "JavaScript", "HTML", "CSS"]
        },
        {  id: 'project-protectedareas',             
            title: 'Protected Areas', 
            type: "Webpage", 
            description: "Design of the Look & Feel of a webpage for environmental protected areas.", 
            website: "https://www.gabywaisman.com/portfolio/protected-areas/index.html",
            image: projectProtectedAreasImg, 
            techs: ["HTML", "CSS"]
        },
    ];

    return (
        <>
            <Header />

            {/* ---- PROJECTS ---- */}
            <h1>Key Projects</h1>
            <div className="project_container">
                {projects.map((project) => (
                    <Project 
                        key={project.id}
                        id={project.id}                          
                        title={project.title} 
                        type={project.type} 
                        description={project.description} 
                        website={project.website} 
                        image={project.image} 
                        techs={project.techs} 
                    />
                ))}                
            </div>  
            <Footer/>
        </>        
    );
}