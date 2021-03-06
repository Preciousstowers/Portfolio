
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
                <h1 className="rowTitle">Grid - Tutorial</h1>
                <p className="rowDescription"> an easy and simple walkthrough to learn how to use Grid</p>
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
                                    {/* <p> */}

                                        <p>
                                            This tutorial was made for the previous project Grid, an application
                                            that allow users to identify, rate and contribute to the knowledge
                                            of physical accessibility features in and around the University of
                                            Washington campus. This overarching tutorial is broken up in tutorial sections
                                            which the user can select from. We will be focusing on the writing of the 
                                            “Create a Contribution” tutorial.

                                        </p>


                                     <b>   <p>
                                            Our goal with the tutorial is for our users to gain a better understanding of the
                                            application and an added layer of confidence knowing that they can successfully use
                                            the application to its fullest.
                                        </p> </b> 

                                       
                                        <a href="https://www.figma.com/proto/ZgU5j6JsZB7pB6NpJk45cD/INFO-360?node-id=311%3A8754&scaling=scale-down&page-id=16%3A158&starting-point-node-id=311%3A8754" target="_blank" >
                                            <p>view full interactive application</p>
                                        </a>

                                        <a href="https://www.figma.com/proto/ZgU5j6JsZB7pB6NpJk45cD/INFO-360?node-id=359%3A10285&scaling=scale-down&page-id=359%3A8889&starting-point-node-id=359%3A10285" target="_blank" >
                                            <p>view full slide deck</p>
                                        </a>

                                        <a href="https://drive.google.com/file/d/1UYOE-vx9Kz_yZSSNZU7jj2SjKxdky9w6/view?usp=sharing" target="_blank" >
                                            <p>view product video</p>
                                        </a>
                                    {/* </p> */}
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
                        <b> Users are unlikely to read a long list of instructions to learn how to use an application, </b>
                            therefore, our application tutorial needed to be  <b> simple, quick, and easy</b> to increase application
                            comprehension in a short period of time.

                        </p>

                    </div>
                </div>


               {/* Main Feature: 
                        -> likes that things are bolded
               */}

                <div className="GridProjectRowOne">
                    <div className="box">
                        <h3 className="rowTitle">Grid Tutorial Selections</h3>
                        <p >
                            Our team agreed to break the tutorial into sections for each feature
                            where users can choose to walk through a tutorial if needed.
                            This allows the users to choose a tutorial or skip to the next tutorial until
                            they are finished viewing the all features.
                        </p>

                        <b>  <p >
                            We need our application tutorial writing to be straightforward, skimmable and simple.

                        </p></b> 

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
                                        <b> Straightforward title </b> - easily allows the user to
                                        directly understand the tutorial choice without additional confusion
                                    </li>
                                </Col>
                                <Col>
                                    <li>
                                    <b>Skimmable helper text </b> - readily allows the user to understand
                                        more about the tutorial without creating assumptions by the application designer
                                    </li>
                                </Col>
                                <Col >
                                    <li>
                                    <b>Simple directions</b> - consistently allows the user to make quick decisions without
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
                          <b> Straightforward. Skimmable. Simple.</b> 
                        </p>

                          {/* Main Feature: 
                                     -> Red markings are not as noticable 
               */}
                            <br />
                            <ol>
                                    <li><p>
                                    <b> Straightforward action words</b> - Straightforward action words help user intuitiveness by
                                        directly telling the user what they can do without hesitation. Create, search and
                                        tap are all key verbs that the user can follow without confusion.
                                    </p></li>
                                    <li> <p>
                                    <b>  Skimmable instructions </b>- Skimmable instructions prevents information overload as
                                        the user has a longer list of directions to walkthrough.
                                    </p></li>
                                    <li><p>
                                    <b> Simple forwarding directions</b> - Simple directions maintains consistency for users as they
                                        learn new information, we want to keep some information the same to help the user focus
                                        on what is new.
                                    </p></li>
                                    </ol>
                                </Col>
                                <Col xs={12}  md={6} lg={3}>
                                    <img className="tutorialBubbles" src="/Frame 178 (2).png" />
                                </Col>
                                
                            </Row>

                        </Container>
                    </div>
                </div>

  {/* Main Feature: 
                                     -> Heading for what I would do next "as for next steps"

               */}
                <h3 className="rowTitle">Closing Thoughts</h3>
                <Container>
                    <Row>
                        <Col xs={12}  md={6} lg={6}>
                            <br />
                            <p >
                                Tutorials can be hard however keeping communication clear and simple allows complexity to
                                be broken down into bite-sized chunks. Instructions are oftentimes skipped,
                                however when needed, they are vital to setting up user intuitiveness for the whole application.
                                I’m very proud to have created a tutorial that our team could showcase.
                            </p>
                            <br />
                            <h5 className="rowTitle"> If I were to work on this project in the future,</h5>

                            <p >
                               <b> I would do more research on tutorial punctuation.</b> Throughout the tutorial I used exclamation points,
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