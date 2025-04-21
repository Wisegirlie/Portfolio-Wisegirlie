import "../css/projects.css";
import Highlight_small from "./highlight_small.jsx";

export default function Project( { id, title, type, description, website, image, techs }) {
  return (
    <div className="project_div gris_back" id={id}>
      <a href={website} target="blank">
        <div className="project_img_container">
          <img src={image} alt={title + "Image"} />
        </div>
        <h2>{title}</h2>
        <div className="project_title">{type}</div>
        <div className="project_text">
          {description}
        </div>
        {techs.map((tech) => (
            <Highlight_small texto={tech} key={tech} />
        ))}
      </a>
    </div>
  );
}
