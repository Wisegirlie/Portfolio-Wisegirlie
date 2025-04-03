/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |        PROJECTS PAGE        |
   =============================== */ 
   
import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";
import Highlight_small from "./highlight_small.jsx";
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
import Project from "./project.jsx";
import "../css/projects.css";
import { createContext } from "react";

export default function Projects() {

    const projects = [
        {  id: 'project-energit', 
            title: 'Energit S.A.', 
            type: "Web Development", 
            description: "Design and development of complete website for a company, including an internal portal to manage products and databases.", 
            website: "https://energit.com.ar", 
            image: projectEnergitImg, 
            techs: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
        },        
        {  id: 'project-findgrant', 
            title: 'Findgrant', 
            type: "Web & Mobile App", 
            description: "Development of functional website based on a Figma design provided by the client. Designed as a website and mobile app.", 
            website: "https://findgrant.ca/", 
            image: projectFindGrantImg, 
            techs: ["React Native", "Expo", "Node.js", "Express.js", "Git", "JavaScript","HTML", "CSS"]
        },
        {  id: 'project-portfolio', 
            title: 'My Portfolio', 
            type: "Web Development", 
            description: "Design and development of my portfolio's website.", 
            website: "/", 
            image: projectGabywaismanImg, 
            techs: ["React", "Vite", "Node.js", "JavaScript", "PHP", "HTML", "CSS", "Git"]
        }, 
        {  id: 'project-supermarketlist', 
            title: 'Voice Commanded Supermarket List', 
            type: "Mobile App", 
            description: "This app allows users to easily create and manage their shopping lists using voice commands.", 
            website: "https://github.com/Wisegirlie/Supermarket-list-voice-commanded", 
            image: projectSupermarketImg, 
            techs: ["React Native", "Expo", "Node.js", "Express.js","MongoDB", "Google Speech-to-Text API", "JavaScript", "HTML", "CSS", "Git"]
        },       
        {  id: 'project-realstate', 
            title: 'Real State', 
            type: "Web Development", 
            description: "Design and development of complete website as an exercise of a real state website  template.", 
            website: "https://www.gabywaisman.com/portfolio/real-state/index.html", 
            image: projectRealStateImg, 
            techs: ["HTML", "CSS", "JavaScript"]
        },          
        {  id: 'project-formbuilder', 
            title: 'Form Builder', 
            type: "Web App", 
            description: "Created a web app to create custom HTML forms with drag & drop, as an exercise.", 
            website: "https://www.gabywaisman.com/portfolio/form-builder/index.html", 
            image: projectFormBuilderImg, 
            techs: ["React", "JavaScript", "Git", "HTML", "CSS"]
        },  
        {  id: 'project-diversafilms', 
            title: 'Diversa Films', 
            type: "Web Development", 
            description: "Development of complete website for the company.", 
            website: "https://www.diversafilms.com.ar", 
            image: projectDiversaImg, 
            techs: ["HTML", "CSS", "JavaScript"]
        },           
        {  id: 'project-rosaria', 
            title: 'Rosaria', 
            type: "Web Development", 
            description: "Design and development of complete website. The client required to use the brand's colors and fonts.", 
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
            description: "Design and development of a webpage for environmental protected areas, done as an exercise.", 
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