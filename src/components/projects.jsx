/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |        PROJECTS PAGE        |
   =============================== */ 
   
import { useState, useMemo } from "react";
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
import projectMelisaWebImg from '../assets/projects/melisamozzatiweb_2.jpg';
import projectSupermarketImg from '../assets/projects/project-supermarketlist.jpg';
import projectSvgMapImg from '../assets/projects/project-svgmap.jpg';
import projectTheatreAppImg from '../assets/projects/projects-theatreapp.jpg';
import projectRegistrationForm from '../assets/projects/secure-registration-form.jpg';
import Project from "./project.jsx";
import "../css/projects.css";

export default function Projects() {
    const [selectedTech, setSelectedTech] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const projects = [
        {
            id: "project-energit",
            title: "Energit S.A.",
            type: "Web Development",
            description:
                "Design and development of complete website for a company, including an internal portal to manage product database.",
            website: "https://energit.com.ar",
            image: projectEnergitImg,
            techs: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
        },
        {
            id: "project-findgrant",
            title: "Findgrant",
            type: "Web & Mobile App",
            description:
                "Front-end Development of a fully functional web & mobile app, based on a Figma design provided by the client. Successfully implemented the original design and functionality; later visual and structural changes were made by the product owner after handoff.",
            website: "https://findgrant.ca/",
            image: projectFindGrantImg,
            techs: [
                "React Native",
                "Expo",
                "REST API",
                "Node.js",
                "Express.js",
                "Figma",
                "Git",
                "JavaScript",
                "HTML",
                "CSS",
            ],
        },
        {
            id: "project-guionista",
            title: "Melisa Mozzati",
            type: "Web Development",
            description:
                "Design and development of the professional portfolio's for a Scriptwriter specialized in Horror. The colors and look & feel were chosen in coordination with the client.\n The website includes an internal portal for content editing.",
            website: "https://www.melisamozzati.com",
            image: projectMelisaWebImg,
            techs: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git"],
        },
        {
            id: "project-portfolio",
            title: "My Portfolio",
            type: "Web Development",
            description: "Design and development of my portfolio's website.",
            website: "/",
            image: projectGabywaismanImg,
            techs: [
                "React",
                "Vite",
                "Node.js",
                "PHP",
                "JavaScript",
                "HTML",
                "CSS",
                "Git",
            ],
        },

        {
            id: "project-theatreapp",
            title: "Theatre App",
            type: "Web App Development",
            description:
                "Full-Stack development of a comprehensive online resource for the performing arts, culture, and entertainment. It features user authentication, client & admin portal, ticket purchasing simulation, among other features. (Still under development)",
            website: "https://github.com/Wisegirlie/Theatre-App",
            image: projectTheatreAppImg,
            techs: [
                "React",
                "Vite",
                "Node.js",
                "REST API",
                "Express.js",
                "MongoDB",
                "JavaScript",
                "HTML",
                "CSS",
                "Git",
                "Login authentication",
            ],
        },
        {
            id: "project-diversafilms",
            title: "Diversa Films",
            type: "Web Development",
            description: "Development of complete website for the company.",
            website: "https://www.diversafilms.com.ar",
            image: projectDiversaImg,
            techs: ["HTML", "CSS", "JavaScript"],
        },
        {
            id: "project-secure-form",
            title: "Secure Registration System",
            type: "Component",
            description:
                "Secure user registration form with many features as real-time front-end and back-end validation, password strength requirements, international phone number input, accessibility support, responsive design, normalized database structure, and secure data storage following industry best practices.",
            website:
                "https://gabywaisman.com/portfolio/secure-registration-form/index.html",
            image: projectRegistrationForm,
            techs: [
                "PHP",
                "MySQL",
                "JavaScript",
                "HTML",
                "CSS",
                "Git",
                "Login authentication",
            ],
        },
        {
            id: "project-realstate",
            title: "Real State",
            type: "Web Development",
            description:
                "Design and development of complete website template for a real state company.",
            website:
                "https://www.gabywaisman.com/portfolio/real-state/index.html",
            image: projectRealStateImg,
            techs: ["HTML", "CSS", "JavaScript"],
        },
        {
            id: "project-formbuilder",
            title: "Form Builder",
            type: "Web App",
            description:
                "Created a web app to create custom HTML forms with drag & drop. (I'll be adding features).",
            website:
                "https://www.gabywaisman.com/portfolio/form-builder/index.html",
            image: projectFormBuilderImg,
            techs: ["React", "JavaScript", "Git", "HTML", "CSS"],
        },
        {
            id: "project-supermarketlist",
            title: "Voice Commanded Supermarket List",
            type: "Mobile App",
            description:
                "App that allows users to easily create and manage their shopping lists using voice commands.",
            website:
                "https://github.com/Wisegirlie/Supermarket-list-voice-commanded",
            image: projectSupermarketImg,
            techs: [
                "React Native",
                "Expo",
                "Node.js",
                "REST API",
                "Express.js",
                "MongoDB",
                "Google Speech-to-Text API",
                "JavaScript",
                "HTML",
                "CSS",
                "Git",
            ],
        },
        {
            id: "project-rosaria",
            title: "Rosaria",
            type: "Web Development",
            description:
                "Design and development of complete website. The client required to use their brand's colors and fonts.",
            website: "https://www.soyrosaria.com",
            image: projectRosariaImg,
            techs: ["HTML", "CSS", "JavaScript"],
        },
        {
            id: "project-svgmap",
            title: "Interactive SVG Map",
            type: "Component",
            description:
                "Developed an interactive map, using full use of SVG properties, matching the look and feel of the client's webpage.",
            website: "https://unidadpopular.org.ar/mapa-referentes/",
            image: projectSvgMapImg,
            techs: ["SVG", "JavaScript", "HTML", "CSS"],
        },
        {
            id: "project-protectedareas",
            title: "Protected Areas",
            type: "Webpage",
            description:
                "Design of the Look & Feel of a webpage for environmental protected areas.",
            website:
                "https://www.gabywaisman.com/portfolio/protected-areas/index.html",
            image: projectProtectedAreasImg,
            techs: ["HTML", "CSS"],
        },
    ];

    // Get unique technologies from all projects
    const allTechnologies = useMemo(() => {
        const techSet = new Set();
        projects.forEach(project => {
            project.techs.forEach(tech => techSet.add(tech));
        });
        return Array.from(techSet).sort();
    }, []);

    // Filter projects based on selected technology
    const filteredProjects = useMemo(() => {
        if (!selectedTech) return projects;
        return projects.filter(project => 
            project.techs.includes(selectedTech)
        );
    }, [selectedTech]);

    const handleTechFilter = (tech) => {
        setIsAnimating(true);
        setSelectedTech(selectedTech === tech ? null : tech);
        
        // Reset animation state after transition
        setTimeout(() => {
            setIsAnimating(false);
        }, 400);
    };

    const handleClearFilter = () => {
        setIsAnimating(true);
        setSelectedTech(null);
        
        // Reset animation state after transition
        setTimeout(() => {
            setIsAnimating(false);
        }, 400);
    };

    return (
        <>
            <Header />

            {/* ---- PROJECTS ---- */}
            <h1>Key Projects</h1>
            
            {/* Technology Filter Badges */}
            <div className="tech-filter-container">
                <h3 className="filter-title">Filter by technology</h3>
                <div className="tech-badges">
                    {allTechnologies.map((tech) => (
                        <button
                            key={tech}
                            className={`tech-badge ${selectedTech === tech ? 'active' : ''}`}
                            onClick={() => handleTechFilter(tech)}
                        >
                            {tech}
                        </button>
                    ))}
                </div>
                {selectedTech && (
                    <button 
                        className="clear-filter-btn"
                        onClick={handleClearFilter}
                    >
                        Clear Filter
                    </button>
                )}
            </div>

            <div className={`project_container ${isAnimating ? 'animating' : ''}`}>
                {filteredProjects.map((project, index) => (
                    <div 
                        key={project.id}
                        className="project-wrapper"
                        style={{ 
                            animationDelay: `${index * 0.1}s`,
                            transitionDelay: `${index * 0.05}s`
                        }}
                    >
                        <Project 
                            id={project.id}                          
                            title={project.title} 
                            type={project.type} 
                            description={project.description} 
                            website={project.website} 
                            image={project.image} 
                            techs={project.techs} 
                        />
                    </div>
                ))}                
            </div>  
            <Footer/>
        </>        
    );
}