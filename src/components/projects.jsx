/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |        PROJECTS PAGE        |
   =============================== */ 
   
import { useState, useMemo } from "react";
import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";
import projects from "../data/projects.js";
import Project from "./project.jsx";
import ProjectDialog from "./projectDialog.jsx";
import "../css/projects.css";

export default function Projects() {
    const [selectedTech, setSelectedTech] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // Get all unique technologies from all projects
    const allTechnologies = useMemo(() => {
        const techSet = new Set();
        projects.forEach((project) => {
            project.techs.forEach((tech) => techSet.add(tech));
        });
        return Array.from(techSet).sort();
    }, []);

    const filteredProjects = useMemo(() => {
        if (!selectedTech) return projects;
        return projects.filter((project) =>
            project.techs.includes(selectedTech)
        );
    }, [selectedTech]);

    const handleTechFilter = (tech) => {
        setIsAnimating(true);
        setSelectedTech(selectedTech === tech ? null : tech);

        // Reset animation after 400ms
        setTimeout(() => {
            setIsAnimating(false);
        }, 400);
    };

    const handleClearFilter = () => {
        setIsAnimating(true);
        setSelectedTech(null);

        // Reset animation after 400ms
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
                            className={`tech-badge ${selectedTech === tech ? "active" : ""}`}
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

            <div className={`project_container ${isAnimating ? "animating" : ""}`}>
                {filteredProjects.map((project, index) => (
                    <div
                        key={project.id}
                        className="project-wrapper"
                        style={{
                            animationDelay: `${index * 0.1}s`,
                            transitionDelay: `${index * 0.05}s`,
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
                            onMoreInfo={() => setSelectedProject(project)}
                        />
                    </div>
                ))}
            </div>

            {selectedProject && (
                <ProjectDialog
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
            <Footer />
        </>
    );
}
