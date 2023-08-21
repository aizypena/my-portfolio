import React from "react";
import "./Contact.css";

function Contact(props) {
    return (
        <div className="container">
            <div className="contact-mainContainer">
                <div className="contact-container">
                    <h1 className="display-1 contact-contact fw-bolder mb-5">
                        CONTACT
                    </h1>
                    <h4>GET IN TOUCH</h4>
                    <p className="mb-5">
                        Whether you have an idea for a project or just want to
                        chat, feel free to shoot me an email!
                    </p>
                    <div className="d-inline-flex contact-links justify-content-center">
                        <a href={"mailto: jbpena101@gmail.com"} className="contact-a">
                            <button className="contact-btn">
                                <h5 className="mb-0 p-2">Say Hello</h5>
                            </button>
                        </a>
                        <a href={"./MyResume.pdf"} download="MyResume.pdf" className="contact-a">
                            <button className="contact-btn">
                                <h5 className="mb-0 p-2">Resume</h5>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
