
import './style.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, NavLink, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";
import { Link } from "react-router-dom";

export function AboutMe() {
    return (
        <div >
            <body >
                <h1 className="rowTitle">About Me</h1>
                <p className="rowDescription"> An easy and simple walkthrough to learn how to use Grid</p>
                <div className="initialImages">
                    <img className="initialImageOne" src="/tutorialPhotos/Frame 180.png" />
                </div>
                <br />
                <div className="aboutMeProjectRowOne">
                    <div className="box">
                        <p>
                            <b className='boldText'> People who identify as having a disability are historically
                                overlooked when designing society. </b>
                            At the University of Washington, there is a lack of digital technologies
                            that help reinforce the knowledge distribution about current accessibility
                            features.
                        </p>

                        <ol>
                            <Container>
                                <Row className="justify-content-md-center">

                                </Row>
                            </Container>
                        </ol>
                    </div>
                </div>

                <div className="aboutMeProjectRowTwo">
                    <div className="box">
                        <h3 className="rowTitle">Grid Tutorial Selections</h3>
                        <p >
                            Our team performed interviews to gain an understanding of
                            how people around the University of Washington gain insights
                            about accessibility features around campus.
                        </p>


                        <br />
                        <Container>
                            <Row className="justify-content-md-center">

                            </Row >
                            <Row className="justify-content-md-center">

                            </Row>
                        </Container>
                        <br />
                    </div>
                </div>

                <center>
                    <Link exact to="/">
                        <button className="aboutMeButton">
                            back to homepage
                        </button>    
                    </Link>
                    
                    <Link to="/PreciousStowers.pdf" target="_blank" download>
                        <button className="downloadResume">
                            download Resume
                        </button>
                    </Link>
                </center>
                <br />
            </body>
        </div>
    )
};

export default AboutMe;