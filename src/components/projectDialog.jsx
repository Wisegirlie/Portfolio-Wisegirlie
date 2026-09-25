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
                    {/* {project.screenshots?.length > 0 && (
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
                    )} */}

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
                                            {/* Link icon */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 640 640"
                                                role="img"
                                                class="project-dialog-link-icon"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M451.5 160C434.9 160 418.8 164.5 404.7 172.7C388.9 156.7 370.5 143.3 350.2 133.2C378.4 109.2 414.3 96 451.5 96C537.9 96 608 166 608 252.5C608 294 591.5 333.8 562.2 363.1L491.1 434.2C461.8 463.5 422 480 380.5 480C294.1 480 224 410 224 323.5C224 322 224 320.5 224.1 319C224.6 301.3 239.3 287.4 257 287.9C274.7 288.4 288.6 303.1 288.1 320.8C288.1 321.7 288.1 322.6 288.1 323.4C288.1 374.5 329.5 415.9 380.6 415.9C405.1 415.9 428.6 406.2 446 388.8L517.1 317.7C534.4 300.4 544.2 276.8 544.2 252.3C544.2 201.2 502.8 159.8 451.7 159.8zM307.2 237.3C305.3 236.5 303.4 235.4 301.7 234.2C289.1 227.7 274.7 224 259.6 224C235.1 224 211.6 233.7 194.2 251.1L123.1 322.2C105.8 339.5 96 363.1 96 387.6C96 438.7 137.4 480.1 188.5 480.1C205 480.1 221.1 475.7 235.2 467.5C251 483.5 269.4 496.9 289.8 507C261.6 530.9 225.8 544.2 188.5 544.2C102.1 544.2 32 474.2 32 387.7C32 346.2 48.5 306.4 77.8 277.1L148.9 206C178.2 176.7 218 160.2 259.5 160.2C346.1 160.2 416 230.8 416 317.1C416 318.4 416 319.7 416 321C415.6 338.7 400.9 352.6 383.2 352.2C365.5 351.8 351.6 337.1 352 319.4C352 318.6 352 317.9 352 317.1C352 283.4 334 253.8 307.2 237.5z"
                                                />
                                            </svg>
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
