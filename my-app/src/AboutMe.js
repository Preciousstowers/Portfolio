
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
              
                {/* <br /> */}

         
                <div className="GridProjectRowTwo">
                    <div className="box">
                        {/* <h3 className="rowTitle">Thought Process</h3> */}
                        <p >
                            <b className='boldText'> People who identify as having a disability are historically
                                overlooked when designing society. </b>
                            At the University of Washington, there is a lack of digital technologies
                            that help reinforce the knowledge distribution about current accessibility
                            features.
                        </p>

                        <ol>
                            <Container>
                                <Row className="justify-content-md-center">
                                    {/* <Col xs={12} sm md lg={4}>
                                        <li>
                                            6% of undergraduate students in the U.S. identified as
                                            having disabilities with 11% of that student body having a
                                            mobility limitation/orthopedic impairment
                                        </li>
                                    </Col>
                                    <Col xs={12} sm md lg={4}>
                                        <li>
                                            Traveling with a mobility disability can have
                                            numerous obstacles, such as longer travel times and/or the
                                            inability to reach their destination:
                                            “25.5 million Americans aged 5 and older    have self-reported travel-limiting disabilities”
                                            (Bureau of Transportation Statistics, 2021).
                                        </li>
                                    </Col>
                                    <Col xs={12} sm md lg={4}>
                                        <li>
                                            In the U.S, “40.7 million adults aged 18 and over have a physical
                                            functioning difficulty” (CDC, 2020). This means that millions of
                                            Americans are required to work and do other day-to-day tasks while
                                            facing societal obstacles due to their disability
                                        </li>
                                    </Col> */}
                                </Row>
                            </Container>
                        </ol>
                    </div>
                </div>

                <div className="GridProjectRowOne">
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
                                {/* <img className="gridTutorialCards" src="/tutorialPhotos/Frame 179 (2).png" /> */}
                                </Row >
                                <Row className="justify-content-md-center">
                                    {/* <Col xs={12} sm md lg={4}>
                                        <li>
                                            6% of undergraduate students in the U.S. identified as
                                            having disabilities with 11% of that student body having a
                                            mobility limitation/orthopedic impairment
                                        </li>
                                    </Col>
                                    <Col xs={12} sm md lg={4}>
                                        <li>
                                            Traveling with a mobility disability can have
                                            numerous obstacles, such as longer travel times and/or the
                                            inability to reach their destination:
                                            “25.5 million Americans aged 5 and older    have self-reported travel-limiting disabilities”
                                            (Bureau of Transportation Statistics, 2021).
                                        </li>
                                    </Col>
                                    <Col xs={12} sm md lg={4}>
                                        <li>
                                            In the U.S, “40.7 million adults aged 18 and over have a physical
                                            functioning difficulty” (CDC, 2020). This means that millions of
                                            Americans are required to work and do other day-to-day tasks while
                                            facing societal obstacles due to their disability
                                        </li>
                                    </Col> */}
                                </Row>
                            </Container>
                        <br />
                    </div>
                </div>

                <center>    
                    <Link exact to="/">
                        <button className="gridButton">
                            back to homepage
                        </button>
                    </Link>
                    <Link exact to="/Resume">
                        <button className="gridButton">
                            download resume
                        </button>
                    </Link>
                </center>
                <br />

            </body>
        </div>
    )
};

export default AboutMe;