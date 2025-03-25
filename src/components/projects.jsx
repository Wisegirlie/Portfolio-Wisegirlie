/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |        PROJECTS PAGE        |
   =============================== */ 
   
import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";
import Highlight_small from "./highlight_small.jsx";
import projectDiversaImg from '../assets/project-diversa1.jpg';
import projectRosariaImg from '../assets/project-rosaria3.jpg';
import projectEnergitImg from'../assets/project-energit2.jpg';
import projectRealStateImg from '../assets/project-realstate1.jpg';
import projectGabywaismanImg from '../assets/projects-gabywaisman.jpg';
import projectFormBuilderImg from '../assets/project-form-builder.png';
import projectFindGrantImg from '../assets/project-findgrant-home2.jpg';
import projectProtectedAreasImg from '../assets/project-protectedareas_2.jpg';
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
            type: "Web App", 
            description: "Development of complete functional website based on a Figma design provided by the client. Designed as a website and mobile app.", 
            website: "https://findgrant.ca/", 
            image: projectFindGrantImg, 
            techs: ["React Native", "Expo", "Node.js", "Git", "JavaScript","HTML", "CSS"]
        },
        {  id: 'project-portfolio', 
            title: 'My Portfolio', 
            type: "Web Development", 
            description: "Design and development of my portfolio's website.", 
            website: "/", 
            image: projectGabywaismanImg, 
            techs: ["React", "Node.js", "JavaScript", "PHP", "HTML", "CSS", "Git"]
        }, 
        {  id: 'project-formbuilder', 
            title: 'Form Builder', 
            type: "Web App", 
            description: "Created a web app to create custom HTML forms with drag & drop.", 
            website: "https://www.gabywaisman.com/portfolio/form-builder/index.html", 
            image: projectFormBuilderImg, 
            techs: ["React", "JavaScript", "Git", "HTML", "CSS"]
        },          
        {  id: 'project-realstate', 
            title: 'Real State', 
            type: "Web Development", 
            description: "Design and development of complete website as an exercise of a real state website  template.", 
            website: "https://www.gabywaisman.com/portfolio/real-state/index.html", 
            image: projectRealStateImg, 
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
        {  id: 'project-diversafilms', 
            title: 'Diversa Films', 
            type: "Web Development", 
            description: "Design and development of complete website.", 
            website: "https://www.diversafilms.com.ar", 
            image: projectDiversaImg, 
            techs: ["HTML", "CSS", "JavaScript"]
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