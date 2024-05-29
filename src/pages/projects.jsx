import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";

export default function Projects() {
    return (
        <>
            <Header />
            <p>Projects</p>


            <div className="highlight_small">
                HTML
            </div>
            <div className="highlight_small">
                CSS
            </div>
            <div className="highlight_small">
                Javascript
            </div>
            <div className="highlight_small">
                PHP
            </div>
            <div className="highlight_small">
                MySql
            </div>

            <Footer/>
        </>        
    );
}