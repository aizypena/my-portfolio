import React from "react";
import "./Projects.css";
import { Card } from "react-bootstrap";

function Projects(props) {
    return (
        <div className="container projects-mainContainer">
            <div className="projects-container">
                <h1 className="projects-h1 display-1 fw-bolder mb-4">
                    PROJECTS
                </h1>
                <p>Here are some of my personal projects:</p>
            </div>
            <div className="projects-picContainer d-flex flex-wrap justify-content-center justify-content-around">
                <a href="https://julyzapena-portfolio.vercel.app/">
                    <img
                        src="./project1.png"
                        className="projects-allPics mb-4 img-fluid"
                    />
                </a>
                <a href="https://mini-project-2-pi.vercel.app/">
                    <img
                        src="./project2.png"
                        className="projects-allPics mb-4 img-fluid"
                    />
                </a>
                <a href="https://capstone-kodego-mauve.vercel.app/">
                    <img
                        src="./project3.png"
                        className="projects-allPics mb-4 img-fluid"
                    />
                </a>
            </div>
        </div>
    );
}

export default Projects;
