/* ===============================
   |       GABRIELA WAISMAN      |
   =============================== 
   |        CONTACT PAGE          |
   =============================== */ 
   
   
import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";
import { Nets } from "./nets.jsx";
import { useState, useRef } from "react";
import Dialog from './dialog.jsx';
import Loader from './loader.jsx';
import logo_gaby_blanco from '../assets/logo_g_blanco.png';
import '../css/contact.css'

export default function Contact() {

    // Status Pop-up variables
    const [showDialog, setShowDialog] = useState(false);
    const [dialogTitle, setDialogTitle] = useState(''); 
    const [dialogMessage, setDialogMessage] = useState(''); 
    const [isError, setIsError] = useState(false); 
    const [showLoader, setShowLoader] = useState(false);

        // State to manage form inputs
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
        website: "", // honeypot field, must stay empty (bots tend to fill every field)
    });

    // Timestamp when the form was rendered, used to reject bot submissions that are too fast
    const formLoadedAt = useRef(Date.now());

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // console.log(`${name}: ${value} `); // for debugging
    };

    // Handle form submission
    const handleSubmit = async (e) => { 
        e.preventDefault(); // Prevent default form submission
        setShowLoader(true);
        // console.log("Form Data:", formData); // for debugging
        // console.log("Message sent. Thank you for your contact!"); // for debugginf       

        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            // alert("Please fill out all required fields."); // for debugginf
            setShowLoader(false);
            // Show error dialog
            setDialogTitle("Empty Field");
            setDialogMessage(`Please fill out all required fields.`);
            setIsError(true);
            setShowDialog(true);
            return;
        }
    
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            // alert("Please enter a valid email address.");
            setShowLoader(false);
            // Show error dialog
            setDialogTitle("Invalid Email");
            setDialogMessage(`Please enter a valid email address.`);
            setIsError(true);
            setShowDialog(true);
            return;
        }

        // Silently drop bot submissions: honeypot filled in, or submitted unrealistically fast
        const elapsedMs = Date.now() - formLoadedAt.current;
        if (formData.website || elapsedMs < 1500) {
            setShowLoader(false);
            setDialogTitle("Message Sent");
            setDialogMessage("Thank you for reaching out.\nI will respond promptly!");
            setIsError(false);
            setShowDialog(true);
            setFormData({ name: "", email: "", number: "", message: "", website: "" });
            return;
        }

        // Send email
        // const formDataToSend = new FormData(e.target);
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('number', formData.number);
        formDataToSend.append('message', formData.message);
        formDataToSend.append('website', formData.website); // honeypot, should always be empty
                
        try {
            const response = await fetch("https://www.gabywaisman.com/mails/send-mail.php", {
                method: "POST",
                body: formDataToSend, // Send FormData directly
            });

            if (response.status === 429) {
                setShowLoader(false);
                setDialogTitle("Too Many Attempts");
                setDialogMessage("You've reached the submission limit. Please try again in a few minutes.");
                setIsError(true);
                setShowDialog(true);
                return;
            }

            const result = await response.json(); // Parse JSON response
            if (result.success) {
                // alert("Form submitted successfully!");
                setShowLoader(false);
                // Show success dialog
                setDialogTitle("Message Sent");
                setDialogMessage("Thank you for reaching out.\nI will respond promptly!");
                setIsError(false);
                setShowDialog(true);
                
                setFormData({ name: "", email: "", number: "", message: "", website: "" }); // Reset form
            } else {
                // alert("Failed to submit form. Please try again.");
                setShowLoader(false);
                // Show error dialog
                setDialogTitle("Error submitting form.");
                setDialogMessage(`Please try again.`);
                setIsError(true);
                setShowDialog(true);
            }
        } catch (error) {
            // alert("An error occurred. Please try again.");
            // console.error("Error submitting form:", error);
            setShowLoader(false);
            // Show error dialog
            setDialogTitle("Error submitting form");
            setDialogMessage(`Please try again.`);
            setIsError(true);
            setShowDialog(true);
        }        
    };
    
    // Handle form reset
    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            number: "",
            message: "",
            website: "",
        });
    };

    return (
        <div>
            <Header />
            {/* Render Dialog conditionally */}
            {showDialog && (
                <Dialog
                    title={dialogTitle}
                    message={dialogMessage}
                    error={isError}
                    onClose={() => setShowDialog(false)}
                />
            )}
            {/* Render Loader image when submitting */}
            {showLoader && <Loader />}

            <main className="contact_recuadro_nomargin">
                <div className="contact_container">
                    <div className="contact_info_div">
                        <img
                            src={logo_gaby_blanco}
                            alt="Gabriela Logo"
                            className="logo_g"
                        />
                        <h1 className="blanco">Gabriela Waisman </h1>
                        <span className="contact_smalltext">
                            <a href="mailto:developer@gabywaisman.com">
                                developer@gabywaisman.com
                            </a>{" "}
                            <br />
                            Toronto, Canada.
                        </span>
                        <Nets className="net_icon" />
                    </div>
                    <div className="contact_form_div gris_back">
                        <h1 className="negro">Need a Developer?</h1>
                        Let’s connect to discuss how we can work together.                        
                        <form
                            action="/"
                            className="form_container"
                            onSubmit={handleSubmit}
                        >
                            <label htmlFor="name">Full Name:</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form_input"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />{" "}
                            <br />
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="form_input"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />{" "}
                            <br />
                            <label htmlFor="number">Phone:</label>
                            <input
                                type="text"
                                name="number"
                                id="number"
                                className="form_input"
                                value={formData.number}
                                onChange={handleInputChange}
                            />{" "}
                            <br />
                            <label htmlFor="message">Your message:</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="7"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                            <br />
                            
                            {/* Honeypot: hidden from real users, bots often fill every field */}
                            <label htmlFor="website" className="form_honeypot" aria-hidden="true">
                                Leave this field empty
                            </label>
                            <input
                                type="text"
                                name="website"
                                id="website"
                                className="form_honeypot"
                                value={formData.website}
                                onChange={handleInputChange}
                                tabIndex="-1"
                                autoComplete="off"
                                aria-hidden="true"
                            />
                            <button type="submit" className="form_boton_submit">
                                Send
                            </button>
                            <button
                                type="reset"
                                className="form_boton_submit form_button_reset"
                                onClick={handleReset}
                            >
                                Reset form
                            </button>
                        </form>
                    </div>
                </div>{" "}
                {/* contact_container */}
            </main>
            <Footer />
        </div>
    );
}
    