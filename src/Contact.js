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
                    <a
                        href="mailto: jbpena101@gmail.com"
                        className="contact-mail"
                    >
                        <button className="hello-btn d-flex">
                            <h6 className="h6-hello m-0">Say Hello</h6>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
