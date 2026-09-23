import { useEffect } from "react";
import PropTypes from "prop-types";
import Highlight_small from "./highlight_small.jsx";
import "../css/projects.css";

function DetailSection({ title, content }) {
    if (!content || (Array.isArray(content) && content.length === 0)) {
        return null;
    }

    return (
        <section className="project-dialog-section">
            <h3>{title}</h3>
            {Array.isArray(content) ? (
                <ul>
                    {content.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>{content}</p>
            )}
        </section>
    );
}

DetailSection.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]),
};

function isExternalUrl(url) {
    return Boolean(url) && /^https?:\/\//i.test(url);
}

export default function ProjectDialog({ project, onClose }) {
    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    const website = project.website;
    const siteLabel = website?.includes("github.com")
        ? "View on GitHub"
        : website === "/"
          ? "Reload site"
          : "Live site";

    return (
        <div
            className="project-dialog-backdrop"
            onClick={onClose}
            role="presentation"
        >
            <div
                className="project-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-dialog-title"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className="project-dialog-close"
                    onClick={onClose}
                    aria-label="Close project details"
                >
                    ×
                </button>

                {/* ----- HERO ----- */}
                <div className="project-dialog-hero">
                    <img src={project.image} alt="" />
                </div>

                {/* ----- BODY ----- */}
                <div className="project-dialog-body">
                    {/* ----- TYPE ----- */}
                    <p className="project-dialog-type">{project.type}</p>

                    {/* ----- TITLE ----- */}
                    <h2 id="project-dialog-title">{project.title}</h2>

                    {/* ----- DESCRIPTION ----- */}
                    {/* <p className="project-dialog-summary">
                        {project.description}
                    </p> */}

                    {/* ----- OVERVIEW ----- */}
                    <DetailSection
                        title="Overview"
                        content={project.overview}
                    />
                    {/* ----- OBJECTIVE ----- */}
                    <DetailSection
                        title="Objective"
                        content={project.objective}
                    />
                    {/* ----- PROCESS ----- */}
                    <DetailSection title="Process" content={project.process} />
                    {/* ----- CHALLENGES ----- */}
                    <DetailSection
                        title="Challenges"
                        content={project.challenges}
                    />

                    {/* ----- LEARNINGS ----- */}
                    <DetailSection
                        title="Learnings"
                        content={project.learnings}
                    />

                    {/* ----- SCREENSHOTS ----- */}
                    {project.screenshots?.length > 0 && (
                        <section className="project-dialog-section">
                            <h3>Screenshots</h3>
                            <div className="project-dialog-screenshots">
                                {project.screenshots.map((shot) => (
                                    <figure key={shot.src}>
                                        <img src={shot.src} alt={shot.alt} />
                                    </figure>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* ----- TECHNICAL APPROACH ----- */}
                    <DetailSection
                        title="Technical approach"
                        content={project.technicalApproach}
                    />
                    {/* ----- TECHS ----- */}
                    <div className="project-dialog-techs">
                        {project.techs.map((tech) => (
                            <Highlight_small
                                texto={tech}
                                key={tech}
                                backgroundColor="var(--projects-dialog-badge-bg)"
                                color="var(--projects-dialog-badge-color)"
                            />
                        ))}
                    </div>
                    
                    {/* ----- DELIVERY ----- */}
                    <DetailSection
                        title="Delivery"
                        content={project.delivery}
                    />

                    {/* ----- LINKS ----- */}
                    {project.links?.length > 0 && (
                        <section className="project-dialog-section">
                            <h3>Links</h3>
                            <ul className="project-dialog-links">
                                {project.links.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            target={
                                                isExternalUrl(link.href)
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel={
                                                isExternalUrl(link.href)
                                                    ? "noopener"
                                                    : undefined
                                            }
                                        >
                                            <img
                                                src="./src/assets/icons/link.svg"
                                                className="project-dialog-link-icon"
                                                alt="Link icon"
                                            />
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* ----- Close Button ------ */}
                    <div className="project-dialog-actions">
                        <a
                            className="project-action-btn project-action-btn-tertiary"
                            onClick={onClose}
                            aria-label="Close project details"
                            style={{ marginTop: "20px", width: "150px" }}
                        >
                            Close
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProjectDialog.propTypes = {
    project: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};
