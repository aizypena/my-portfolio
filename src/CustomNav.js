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
                        <Nav.Link></Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link>ABOUT</Nav.Link>
                            <Nav.Link>PROJECTS</Nav.Link>
                            <Nav.Link>CONTACT</Nav.Link>
                            <Nav.Link>RESUME</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default CustomNav;
