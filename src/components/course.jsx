import "../css/course.css";

export default function Course ( {id, title, logo, provider, date, description  } ) {

  return (
    <div className="course-div-container" id={id}>

        <div className="course-logo-div">
          <img src={logo} alt={'Logo of ' + provider} className="course-logo-img"/>
        </div>
        
        <div className="course-text-container">
          <h3>{title}</h3>
          <div className="course-provider">
            {provider}
          </div>
          <div className="course-date">
            {date}
          </div>
        </div>        
    </div>
  );
}

