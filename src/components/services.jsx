/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |        SERVICES PAGE        |
   =============================== */ 
   
import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";
import '../css/services.css';

export default function Services() {
    return (
        <div>
            <Header />

            {/* ---- SERVICES PAGE ---- */}
            
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>

           
            <div class="services_container">
                {/* <h1>I do</h1> */}
                <div class="service_div">
                    <div class="service_info">
                    <i class="fas fa-globe"></i>                        
                            <h3>Web Development</h3>
                                <p>Website Development, from front to back end: HTML, CSS, JAVASCRIPT, PHP, MySL. Responsive coding.</p>                        
                    </div>
                </div>

                <div class="service_div">
                    <div class="service_info">
                        <i class="fas fa-mobile-alt"></i>
                        <div class="holder-section">
                            <h3>Mobile Apps</h3>
                            <p>Mobile Applications Development. MERN environments: MongoDB, Express, REACT, Node.js
                            </p>
                        </div>
                    </div>
                </div>

                <div class="service_div" >
                    <div class="service_info">
                    <i class="fas fa-laptop-code"></i> 
                            <h3>Software Development</h3>
                            <p>
                                Software architecture design and development.  
                            </p>                        
                    </div>
                </div>

                
                <div class="service_div" >
                    <div class="service_info">
                    <i class="fas fa-code"></i>                        
                            <h3>Programming</h3>
                            <p>
                                Coding in: C#, JAVA, JavaScript, COBOL. 
                            </p>                        
                    </div>
                </div>     

                <div class="service_div" >
                    <div class="service_info">
                    <i class="fas fa-smile"></i> 
                            <h3>UI / UX</h3>
                            <p>
                                User Interfaces and Experience design for user-friendly environments.  
                            </p>                        
                    </div>
                </div>

                
                <div class="service_div" >
                    <div class="service_info">
                    <i class="fas fa-database"></i>
                            <h3>Database</h3>
                            <p>
                                Database creation and management: Oracle SL, Mongo DB, MySL. 
                            </p>                        
                    </div>
                </div>


            </div>
            <Footer/>
        </div>        
    );
}
   