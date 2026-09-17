import "../css/projects.css";
import Highlight_small from "./highlight_small.jsx";
import PropTypes from "prop-types";

function isExternalUrl(url) {
    return Boolean(url) && /^https?:\/\//i.test(url);
}

function siteButtonLabel(url) {
    if (!url) return "Visit site";
    if (url.includes("github.com")) return "View on GitHub";
    if (url === "/") return "Open site";
    return "Visit site";
}

export default function Project({
    id,
    title,
    type,
    description,
    website,
    image,
    techs,
    onMoreInfo,
}) {
    return (
        <div className="project_div gris_back" id={id}>
            <div className="project_img_container">
                <img src={image} alt={title + " preview"} />
            </div>
            <h2>{title}</h2>
            <div className="project_title">{type}</div>
            <div className="project_text">{description}</div>
            <div className="project-highlights-container">
                {techs.map((tech) => (
                    <Highlight_small texto={tech} key={tech} />
                ))}
            </div>
            <div className="project-card-actions">
                <button
                    type="button"
                    className="project-action-btn project-action-btn-secondary"
                    onClick={onMoreInfo}
                >
                    More info
                </button>
                {website && (
                    <a
                        className="project-action-btn project-action-btn-secondary"
                        href={website}
                        target={isExternalUrl(website) ? "_blank" : undefined}
                        rel={
                            isExternalUrl(website)
                                ? "noopener"
                                : undefined
                        }
                    >
                        {siteButtonLabel(website)}
                    </a>
                )}
            </div>
        </div>
    );
}

Project.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    website: PropTypes.string,
    image: PropTypes.string,
    techs: PropTypes.array,
    onMoreInfo: PropTypes.func,
};
