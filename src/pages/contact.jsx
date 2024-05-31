import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";
import { Nets } from "./nets.jsx";

export default function Contact() {
    return (
        <div>
            <Header />
                <div className="recuadro_nomargin">
                    <div className="contact_container">
                        <div className="contact_info_div">
                            <img src="./src/assets/logo_g_alone_blanco.png" alt="Gabriela Logo" className="logo_g"/>
                            <h1 className="blanco">Gabriela Waisman </h1>                            
                            <a href="mailto:gabywaisman@hotmail.com">gabywaisman@hotmail.com</a> <br />
                            <a href="tel:+6476422281">PH: (647) 642-2281</a> <br />
                            <Nets className="net_icon" />

                        </div> 
                        <div className="contact_form_div gris_back"> 
                            <h1 className="negro">Need a Full-Stack Developer?</h1>
                                
                            I'm ready to hear about your project. <br />
                            Don't hesitate to get in touch with me using the contact form. 
                            
                            <form action="/" className="form_container">

                                <label htmlFor="name">Full Name:</label>
                                <input type="text" name="name" id="name" className="form_input"/>  <br />
                                <label htmlFor="email">E-mail:</label>
                                <input type="email" name="email" id="email" className="form_input"/> <br />
                                <label htmlFor="number">Contact number:</label>
                                <input type="text" name="number" id="number" className="form_input"/>  <br />
                                <label htmlFor="message">Your message</label>
                                <textarea name="message" id="message" rows="7"></textarea><br />

                            <button type="submit" className="form_boton_submit">Send</button>
                            <button type="reset" className="form_boton_submit form_button_reset">Reset form</button>

                            </form>


                        </div>  
                    </div> {/* contact_container */}
                </div>
            <Footer/>
        </div>
        
    );
}
    