/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |          ABOUT PAGE         |
   =============================== */ 
   
   
import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";
import { Link } from 'react-router-dom';
import Photo_Gaby from '../assets/gaby_waisman_light.jpg'
import '../css/about.css';

export default function About() {
    return (
        <div>
            <Header />
            <main className="recuadro_nomargin">
                <div className="about_container">
                    <div className="about_info_div about_resume_div">
                        <img
                            src={Photo_Gaby}
                            alt="Gabriela Waisman Photo"
                            className="about_photo"
                        />{" "}
                        <br />
                        <i>My Resume</i>
                        <h1 className="blanco">Gabriela Waisman</h1>
                        <a
                            href={"/Gabriela-Waisman-Resume.pdf"}
                            download="Gabriela-Waisman-Resume.pdf"
                        >
                            <button className="button_white_no_margin " style={{ marginTop: "8px" }}>
                                Download Resume
                            </button>
                        </a>
                        <br />
                    </div>
                    <div className="about_bio_div gris_back">
                        <h1>About me</h1>
                        <span style={{ fontSize: "110%" }}>
                            I'm a <strong>Full-Stack Software Developer</strong>{" "}
                            with a strong focus on{" "}
                            <strong style={{ color: "var(--fucsia)" }}>
                                Frontend Development
                            </strong>{" "}
                            and a background in <strong> design </strong>
                            and <strong>communication</strong>.
                        </span>
                        <br /> <br />
                        I'm a full-stack developer with a{" "}
                        <strong>designer's eye</strong> and an{" "}
                        <strong>engineer's mind</strong>, combining technical
                        depth with a strong background in design and
                        communication to build applications that are
                        well-engineered and intuitive for the people who use
                        them.
                        <br /> <br />I bring extensive hands-on experience
                        delivering end-to-end web and mobile solutions for real
                        clients, translating requirements into effective digital
                        products, building responsive interfaces, integrating
                        APIs, and owning features from concept through
                        deployment. I am equally comfortable working on the
                        <strong> frontend</strong> and the{" "}
                        <strong> backend</strong>, and I enjoy the full picture
                        of how an application comes together.
                        <br /> <br />
                        Technology and design have shaped my background in equal
                        measure. I attended a technical high school, graduated
                        as a Computer Programmer Technician, and later earned a
                        degree in <strong>Design of Image and Sound</strong>,
                        giving me a foundation that genuinely bridges both
                        disciplines. I formalized that combination with a
                        <strong> Software Engineering Technician</strong>{" "}
                        diploma from Centennial College (Canada), where I
                        graduated with High Honors and received the PomeGran
                        Inc. Scholarship for academic excellence and passion for
                        the field.
                        <br /> <br />I also earned a Certificate in{" "}
                        <strong>Inclusive Leadership Practices</strong> which
                        provided me with critical skills to foster inclusivity
                        in modern workplaces.
                        <br />
                        <br />
                        I am eager to contribute to the innovations shaping our
                        present and future while continuing to grow as a
                        developer. I’ve learned that the best results come from
                        strong collaboration, and I'm ready to bring my energy
                        and evolving toolkit to projects that value curiosity
                        and purpose.
                        <br />
                        <br />
                        <strong>Let’s make it happen!</strong>
                        <br />
                        <br />
                        <h3>Awards</h3>
                        <strong>PomeGran Inc. Scholarship Award</strong> -
                        Centennial College
                        <br />
                        Awarded scholarship based on demonstrated passion for
                        the field and academic excellence. <br />
                        <br />
                        <strong>
                            Outstanding Personality of Culture of the City of
                            Buenos Aires
                        </strong>
                        <br />
                        Legislature of the City of Buenos Aires, Argentina.
                        <br />
                        <br />
                        <h3>Tech & Community</h3>
                        <strong>AI Ladies Lounge</strong>: Active member of this
                        monthly workshop and meetup group, focused on mastering
                        AI and emerging technologies.
                        <br />
                        <br />
                        <strong>Toronto Tech Week</strong>: Engaging with the
                        local ecosystem to stay current on emerging trends,
                        industry leaders, and new professional connections.
                        <br />
                        <br />
                        <Link to="/contact">
                            <button className="button_white">Contact me</button>
                        </Link>
                    </div>
                </div>{" "}
                {/* contact_container */}
            </main>
            <Footer />
        </div>
    );
}
    