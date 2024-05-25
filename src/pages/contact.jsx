import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";

export default function Contact() {
    return (
        <div>
            <Header />
                <div className="recuadro gris_back">
                    <div className="contact_container">
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

                </div>
            <Footer/>
        </div>
    );
}
    