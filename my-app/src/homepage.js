
import './style.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, NavLink, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";
import {
    Link
} from "react-router-dom";
import SimpleReactFooter from "simple-react-footer";



export function Homepage() {

 {/* 
    Notes From Feedback: 
       -> Might want to shorten descriptions about each product, a little wordy if reading fast
       -> Add arrows to go to the next project
       -> embed live figma/video into project using embed codes
       -> likes bolded words
       -> consider puting the favicons next to my name? (very optional)
*/}

    return (
        <div>
            <body className='homepageBody'>
                <div className="homepageContainer">
                    <section className="homepageMe">


                        <Container>

                            <Row>
                                <Col md={10} lg={11}>
                                    <div className="rowTitle">
                                        <h4 className="rowTitle">Welcome, make yourself at home</h4>
                                    </div>
                                    <div className="homepagerowDescriptionLong">
                                        <p>
                                            I'm Precious, a third year at the University of Washington majoring in
                                            Informatics with a concentration in Human-Computer Interaction
                                            and minoring in English. Here are some of the solutions I created through
                                            UX/UI design and writing!
                                        </p>
                                        <p>
                                            Take your time and look around!
                                        </p>

                                    </div>
                                    <br />
                                    <p className="homepageIcons">
                                        <a href="mailto:Precious.Stowers2@gmail.com" className="LinkedInButton" >
                                            <img className="linkedIn" src="/image 79.png" /></a>
                                        <a href="https://www.linkedin.com/in/precious-jane-stowers-a2201119a/" target="_blank" className="LinkedInButton" >
                                            <img className="linkedIn" src="/LI-In-Bug.png" /></a>
                                        <a href="https://github.com/Preciousstowers" target="_blank" className="LinkedInButton" >
                                            <img className="linkedIn" src="/GitHub-Mark-64px.png" /></a>
                                        <a href="https://www.instagram.com/_preciousjane_/" target="_blank" className="LinkedInButton" >
                                            <img className="linkedIn" src="/iglogo.png" /></a>
                                    </p>


                                </Col>
                                <Col md={2} lg={1} >
                                    <br />
                                    <img className="personalPhoto" src="/IMG_9570_Original.jpg" />
                                </Col>

                            </Row>
                        </Container>

                    </section>

 {/* 
    Notes From Feedback: 
                -> Fix run on descriptions !!!
*/}

                    <div className="rowTitle">
                        <h4 className="rowTitle">UX/UI Design</h4>
                        <br />
                    </div>

                    <section className="homepageDesignWork">
                        {/* <section className="homepageRow"> */}
                        <Link className="cardLink" to="/Grid">
                            <Card className="homepageCard" >
                                <Card.Img variant="top" src="/Frame 7 (10).png" style={{ backgroundColor: '#454173' }}
                                />
                                <Card.Body>
                                    <Card.Title>Meet Grid</Card.Title>
                                    <Card.Text>
                                        an accessibility rating application that
                                        encourages awareness about accessibility features on the UW campus and empowers
                                        those who identify as having a mobility disability
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>

                        <Link className="cardLink" to="/DiscoveryHub">
                            <Card className="homepageCard" >
                                <Card.Img variant="top" src="/Rectangle (5).png" style={{ backgroundColor: '#B2ACD5' }} />
                                <Card.Body>
                                    <Card.Title>Meet DiscoveryHub</Card.Title>
                                    <Card.Text>
                                        a web application that bridges the gap between tutors/mentors and community
                                        organizations to help advocate information about after-school resources
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>

                        <Link className="cardLink" to="/Tutela">
                            <Card className="homepageCard" >
                                <Card.Img src="/tutelaPhotos/Frame 6 (1).png" style={{ backgroundColor: '#80CCD7' }} />
                                <Card.Body>

                                    <Card.Title>Meet Tutela</Card.Title>
                                    <Card.Text>
                                        the application that provides the partner when you are alone and
                                        unable to contact anyone, while your safety is compromised in a rape-related or sex trafficking situation
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>


                    </section>
                    <div className="rowTitle">
                        <h4 className="rowTitle">Writing</h4>
                        <br />
                    </div>
                    <section className="homepageDesignWork">
                        <Link className="cardLink" to="/RhetoricalAnalysis">
                            <Card className="homepageCard" >
                                <Card.Img variant="top" src="/A4 Portrait.png" />
                                <Card.Body>
                                    <Card.Title>The Perfect Moment </Card.Title>
                                    <Card.Text>
                                        a rhetorical analysis on how using time as a design tool for social
                                        media platforms can alter digital rhetorics
                                        and change how users engage between physical and digital
                                        spaces
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link >



                        <Link className="cardLink" to="/GridTutorial">
                            <Card className="homepageCard" >
                                <Card.Img variant="top" src="/Frame 8 (2).png" />
                                <Card.Body>
                                    <Card.Title>Grid - Tutorial
                                    </Card.Title>
                                    <Card.Text>
                                        {/* an easy walkthough on how to use Grid tutorial on how to create your first Grid contribution and a thought process
                                        on how I went about designing UX writing */}

                                        a walkthrough on how I went about designing UX writing for an application tutorial to aid my 
                                        above project, Grid
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link >
                    </section>
                </div>

                {/* <SimpleReactFooter 
            description={description} 
            columns={columns}
            copyright="black"
            iconColor="black"
            backgroundColor="white"
            fontColor="black"
            copyrightColor="darkgrey"
            /> */}

            </body>

        </div>

    )
};

export default Homepage;