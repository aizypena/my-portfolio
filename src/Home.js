import React from "react";
import "./Home.css";
import { Container, Card, CardGroup } from "react-bootstrap";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

function Home(props) {
    return (
        <div className={"container"}>
            <div className={"home-container"}>
                <Container className="d-flex justify-content-center cards-container">
                    <Card className={"cards home-cardLeft border-0"}>
                        <Card.Text>
                            <h1 className="home-myName display-1 fw-bold">
                                JULYZA PEÑA
                            </h1>
                            <h4 className="home-webDev">WEB DEVELOPER</h4>
                        </Card.Text>
                        <Card.Text>
                            <p className="mb-5">
                                An aspiring 23-year-old web developer in the Philippines.
                                I specialize in building responsive web
                                applications using React.
                            </p>
                        </Card.Text>
                        <Card.Text className="d-flex">
                            <a href={"#about"} className="home-seeMore">
                                See more about me
                            </a>
                            <TrendingFlatIcon className="home-Arrow" />
                        </Card.Text>
                        <Card.Text
                            className={
                                "d-flex home-Icons justify-content-between"
                            }
                        >
                            <a
                                href={"https://github.com/aizypena"}
                                target={"_blank"}
                                className="home-LinkIcons home-githubLink"
                            >
                                <GitHubIcon />
                            </a>
                            <a
                                href={
                                    "https://www.linkedin.com/in/julyza-pe%C3%B1a/"
                                }
                                target={"_blank"}
                                className="home-LinkIcons home-linkedinLink"
                            >
                                <LinkedInIcon />
                            </a>
                            <a
                                href={"https://web.facebook.com/p.azyluJ00/"}
                                className="home-LinkIcons home-fbLink"
                            >
                                <FacebookIcon />
                            </a>
                        </Card.Text>
                    </Card>
                    <Card
                        className={
                            "cards home-rightCard d-flex justify-content-center border-0"
                        }
                    >
                        <img
                            src="/my-animation-pic.png"
                            className="home-Pic1 img-fluid mx-auto"
                        />
                    </Card>
                </Container>
            </div>
        </div>
    );
}

export default Home;
