import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";
import Highlight_small from "./highlight_mall.jsx";

export default function Projects() {
    return (
        <>
            <Header />

            <h1>Recent Projects</h1>
            <div className="project_container">

                {/* ------  DIVERSA FILMS ------- */}            
                <div className="project_div gris_back">
                    <a href="http://diversafilms.com.ar" target="blank">
                        <div className="project_img_container">
                            <div className="project_title">
                                Website
                            </div>
                            <img src="./src/assets/diversa1.jpg" alt="Project Diversa WebSite" />
                            <h2>Diversa Films</h2>
                            <Highlight_small texto='HTML'/>
                            <Highlight_small texto='CSS'/>
                        </div> 
                    </a>                
                </div>                     

                {/* ------  ROSARIA ------- */}
                <div className="project_div gris_back">
                    <a href="http://soyrosaria.com.ar" target="blank">
                        <div className="project_img_container">
                            <div className="project_title">
                                Website
                            </div>
                            <img src="./src/assets/rosaria1.jpg" alt="Project Rosaria WebSite" />
                            <h2>Rosaria</h2>
                            <Highlight_small texto='HTML'/>
                            <Highlight_small texto='CSS'/>
                            <Highlight_small texto='JavaScript'/>
                        </div>  
                    </a>               
                </div>   
                   
                {/* ------  ENERGIT ------- */}
                <div className="project_div gris_back">
                    <a href="https://energit.com.ar" target="blank">
                        <div className="project_img_container">
                            <div className="project_title">
                                Website
                            </div>
                            <img src="./src/assets/energit2.jpg" alt="Project Energit WebSite" />
                            <h2>Energit</h2>
                            <Highlight_small texto='HTML'/>
                            <Highlight_small texto='CSS'/>
                            <Highlight_small texto='JavaScript'/>
                            <Highlight_small texto='PHP'/>
                            <Highlight_small texto='MySql'/>
                        </div>  
                    </a>                  
                </div>
               

                {/* ------  REAL STATE  ------- */}                
                <div className="project_div gris_back">
                    <a href="http://studentweb.cencol.ca/gwaisman/project/index.html" className="project_links"  target="blank">
                        <div className="project_img_container">
                            <div className="project_title">
                                Website
                            </div>
                            <img src="./src/assets/realstate1.jpg" alt="Project Real State WebSite" />
                            <h2>Real State</h2>
                            <Highlight_small texto='HTML'/>
                            <Highlight_small texto='CSS'/>
                            <Highlight_small texto='JavaScript'/>
                        </div>
                    </a>
                </div>       
            </div>  
            <Footer/>
        </>        
    );
}