import React from "react";
import "./CustomNav.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function CustomNav() {
    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="lg"
                variant="light"
                id="navbar-container"
            >
                <Container>
                    <Navbar.Brand>
                        <Nav.Link>
                            <p className="display-6 playFair fw-bold">JULYZA</p>
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href={"#about"}>ABOUT</Nav.Link>
                            <Nav.Link href={"#projects"}>PROJECTS</Nav.Link>
                            <Nav.Link href={"#contact"}>CONTACT</Nav.Link>
                            <Nav.Link href={"./MyResume.pdf"} download={"MyResume.pdf"}>RESUME</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default CustomNav;
