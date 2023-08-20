import React from "react";
import "./Contact.css";
import { Button } from "react-bootstrap";

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
                    <a href="mailto: jbpena101@gmail.com">
                        <Button className="hello-btn">Say Hello</Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
