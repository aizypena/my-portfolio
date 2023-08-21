import React from 'react';
import "./Footer.css"
import {faFacebookF, faInstagram, faXTwitter, faGithub, faLinkedinIn, faSpaceAwesome} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Footer(props) {
    return (
        <div className="footer-mainContainer">
            <div className={"footer-container"}>
                <div className="d-flex justify-content-center box-container mb-4">
                    <a className="b1 fb-a" href="https://web.facebook.com/p.azyluJ00/">
                        <FontAwesomeIcon icon={faFacebookF} color="#fff" className="fb icons"/>
                    </a>
                    <a className="b1 ig-a" href="https://www.instagram.com/aizaiahh/">
                        <FontAwesomeIcon icon={faInstagram} color="#fff" className="ig icons"/>
                    </a>
                    <a className="b1 twitter-a" href="https://twitter.com/aizkream">
                        <FontAwesomeIcon icon={faXTwitter} color="#fff" className="twitter icons"/>
                    </a>
                    <a className="b1 github-a" href="https://github.com/aizypena">
                        <FontAwesomeIcon icon={faGithub} color="#fff" className="github icons"/>
                    </a>
                    <a className="b1 linkedin-a" href="https://www.linkedin.com/in/julyza-pe%C3%B1a/">
                        <FontAwesomeIcon icon={faLinkedinIn} color="#fff" className="linkedin icons"/>
                    </a>
                </div>
                <div className="beam-icon">
                    <a href="#" className="beamIcon-a mb-4" title="Beam me up, Scotty!">
                        <FontAwesomeIcon icon={faSpaceAwesome} style={{color: "#ffffff"}} size="3x" />
                    </a>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <p className="copyright">&copy; Julyza Pena 2023</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;