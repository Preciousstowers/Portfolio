
import './style.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, NavLink, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";
import { Link } from "react-router-dom";

export function GridTutorial() {
    return (
        <div >
            <body >
                <h1 className="rowTitle">Grid Tutorial</h1>
                <p className="rowDescription"> An easy and simple walkthrough to learn how to use Grid</p>
                <div className="initialImages">
                    <img className="initialImageOne" src="/tutorialPhotos/Frame 180.png" />
                </div>
                <br />
                <div className="GridProjectRowOne">
                    <div className="box">
                        <br />
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs={12} lg={7}>
                                    <h2 className="rowTitle">Overview</h2>
                                    <p>
                                        <p>
                                            This tutorial was made for the project Grid, an application
                                            that allow users to identify, rate and contribute to the knowledge
                                            of physical accessibility features in and around the University of
                                            Washington Campus. This overarching tutorial is broken up in tutorial sections
                                            which the user can select from. We will be focusing on the writing for the
                                            tutorial sections and the “Create a Contribution” tutorial.

                                        </p>


                                        <p>
                                            Our goal with the tutorial is for our suers to gain a better understanding of the
                                            application and an added layer of confidence knowing that they can successful use
                                            the application to the fullest.
                                        </p>


                                        <a href="https://www.figma.com/proto/FdjP3QHiSXLWg45xKmXVIt/Tutela%3A-Connecting-Safely%2C-Together.?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2" target="_blank" >
                                            <p>view full interactive application</p>
                                        </a>

                                        <a href="https://www.canva.com/design/DAETdDe0fpo/oeytfbreqagPj8e6kr2RQA/view?utm_content=DAETdDe0fpo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" >
                                            <p>view full slide deck</p>
                                        </a>

                                        <a href="https://drive.google.com/file/d/1UYOE-vx9Kz_yZSSNZU7jj2SjKxdky9w6/view?usp=sharing" target="_blank" >
                                            <p>view product video</p>
                                        </a>
                                    </p>
                                </Col>
                                <Col xs={12} md lg={5}>
                                    <br />
                                    <br />
                                    <br />
                                    <h5 className="detail">Project: Tutorial Specifics  </h5>
                                    <p className="detail">  My Role:  Lead UX Writer and Designer  </p>
                                    <p className="detail">  Team size: 5 total people</p>
                                    <p className="detail">  Time Frame: 1 week to complete tutorial (11 total weeks to complete project) </p>
                                    <p className="detail">  Tools: Figma and Miro</p>
                                    <p className="detail">  Teammates: Anna Shi, Emily Dooley, Pranav Shekar and Rachel Chung</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                {/* <br /> */}


                <div className="GridProjectRowTwo">
                    <div className="box">
                        <h3 className="rowTitle">Thought Process</h3>
                        <p >
                            Users are unlikely to read a long list of instructions to learn how to use an application,
                            therefore, our application tutorial needed to be simple, quick, and easy to increase application
                            comprehension in a short period of time.

                        </p>

                    </div>
                </div>




                <div className="GridProjectRowOne">
                    <div className="box">
                        <h3 className="rowTitle">Grid Tutorial Selections</h3>
                        <p >
                            Our team agreed to break the tutorial sections into their main features
                            where users can choose to walk through a tutorial if needed.
                            This allows the users to choose a tutorial or skip to the next tutorial until
                            they are finished viewing the main four features.

                        </p>

                        <p >
                            We need our application tutorial writing to be straightforward, skimmable and simple.

                        </p>

                        <br />
                  
                        {/* <Container> */}
                        <ol>
                        <Container>
                            <Row className="justify-content-md-center">
                                <img className="gridTutorialCards" src="/tutorialPhotos/Frame 179 (2).png" />
                            </Row >
                            <br />
                            <Row className="justify-content-md-center">
                                <Col >
                                    <li>
                                        Straightforward title - easily allows the user to
                                        directly understand the tutorial choice without additional confusion
                                    </li>
                                </Col>
                                <Col>
                                    <li>
                                        Skimmable helper text - readily allows the user to understand
                                        more about the tutorial without creating assumptions by the application designer
                                    </li>
                                </Col>
                                <Col >
                                    <li>
                                        Simple directions - consistently allows the user to make quick decisions without
                                        overwhelming the user in the onboarding process
                                    </li>
                                </Col>
                            </Row>
                        </Container>
                  </ol>
                        <br />
                    </div>
                </div>

                <h4 className="rowTitle">Let's check out the Create a Contribution tutorial</h4>

            
                <br />
                <Container>
                    <Row className="justify-content-md-center">
                        <img className="directionFrames" src="/tutorialPhotos/directionFrames.png" />
                    </Row>
                </Container>
                <br />
            


                <div className="GridProjectRowOne">
                    <div className="box">
                        <h3 className="rowTitle">Thought Process</h3>
                       
                    
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col md  md={6} lg={9}>
                                <p>
                            <br />
                            Straightforward. Skimmable. Simple.
                        </p>

                        <p>
                            <br />
                            These descriptions are consistently key to creating the in-depth tutorial.
                        </p>
                            <br />
                                    <ol>
                                    <li><p>
                                        Straightforward action words - Straightforward action words help user intuitvness by
                                        directly telling the user what they can do without hesitation. Create, Search and
                                        tap are all key verbs that the user can follow without confusion, creating application
                                        accessibility.
                                    </p></li>
                                    <li> <p>
                                        Skimmable instructions - Skimmable instructions prevents information overload as
                                        the user has a longer list of directions to walkthrough.
                                    </p></li>
                                    <li><p>
                                        Simple forwarding directions - Simple directions maintains consistency for users as they
                                        learn new information, we want to keep some information the same to help the user focus
                                        on what they need to learn.
                                    </p></li>
                                    </ol>
                                </Col>
                                <Col xs={12}  md={6} lg={3}>
                                    <img className="tutorialBubbles" src="/tutorialPhotos/annotatedDirections.png" />
                                </Col>
                                
                            </Row>

                        </Container>
                    </div>
                </div>

                <h3 className="rowTitle">Closing Thoughts</h3>
                <Container>
                    <Row>
                        <Col xs={12}  md={6} lg={6}>
                            <br />
                            <p >
                                Tutorials can be hard however keeping communication clear and simple allows complexity to
                                be broken down into bite-sized comprehensible chunks. Intructions are oftentimes skipped,
                                however when needed, they are vital to setting up user intuitvness for the whole application.
                                I’m very proud to have created a tutorial that our team could showcase.
                            </p>
                            <p >
                                I would do more research on tutorial punctution. Throughout the tutorial I used exclamation points,
                                however looking back I am not certain that using exclamation points communicates the correct tone
                                I want to give to the user.
                            </p>
                        </Col>
                        <Col  md={6} lg={6}>
                            <img className="featuredImage smallerScreenSizeClassLastImage" src="/Frame 8 (2).png" />
                        </Col>
                    </Row>
                </Container>
                <center>
                    <br />
                    <Link exact to="/">
                        <button className="gridButton">
                            back to homepage
                        </button>
                    </Link>
                </center>
                <br />

            </body>
        </div>
    )
};

export default GridTutorial;