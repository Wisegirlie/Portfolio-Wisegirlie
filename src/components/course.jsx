import "../css/course.css";

export default function Course ( {id, title, provider, date, description  }) {
  return (
    <div className="course-div-container" id={id}>
        <div className="course-logo">
          <img src="" alt={`Logo of ${provider}`} />
        </div>
        <h2>{title}</h2>        
        <div className="course-provider">
          {provider}
        </div>
        <div className="course-date">
          {date}
        </div>
    </div>
  );
}
