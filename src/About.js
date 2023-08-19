import React from 'react';
import './About.css';

function About(props) {
    return (
        <div className={"container about-mainContainer"}>
            <div className="about-container">
                <h1 className="display-1 about-about fw-bolder mb-4">ABOUT</h1>
                <p className="about-aboutDescription1 mb-5">Recently graduated from KodeGo bootcamp and took up full stack web development. My main focus these days is building responsive and beautiful-looking web applications, while continuously learning modern web technologies. I primarily work on personal projects and actively seek job opportunities that will foster my growth as a developer.</p>
                <h6>Technical</h6>
                <p>Right now, you can find me working with React JS, Tailwind CSS, Bootstrap CSS and anything HTML, Javascript, and CSS related. Additionally, I have been gaining expertise in working with MongoDB, Express JS and Laravel.</p>
            </div>
        </div>
    );
}

export default About;