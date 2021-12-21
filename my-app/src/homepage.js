
import './style.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, NavLink, Card, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";
import {
    Link
} from "react-router-dom";
import SimpleReactFooter from "simple-react-footer";


export function Homepage() {

    return (
        <div>
            <body className='homepageBody'>
            <div className="homepageContainer">
                <section className="homepageMe">
                   

                    <Container>
                   
                        <Row>
                            <Col md lg={11}>
                            <div className="rowTitle">
                                <h4 className="rowTitle">Welcome, make yourself at home</h4>
                            </div>
                            <div className="homepagerowDescriptionLong">
                                <p>
                                    I'm glad you are here! I'm Precious, a third year at the University of Washington majoring in
                                    Informatics with a double concentration in Data Science and Human-Computer Interaction
                                    with a minor in writing. I strive to communicate intersections that lack the clear bridges to the solutions
                                    people need and help empower others.
                                </p>
                             
                                <p>
                                    Take your time and look around. It's cold outside anyway.
                                </p>
                        
                            </div>
                            <br />
                            <p className="homepageIcons">
                            <a href="mailto:Precious.Stowers2@gmail.com"  className="LinkedInButton" >
                                        <img className="linkedIn" src="/image 79.png" /></a>
                                    <a href="https://www.linkedin.com/in/precious-jane-stowers-a2201119a/" target="_blank" className="LinkedInButton" >
                                        <img className="linkedIn" src="/LI-In-Bug.png" /></a>
                                        <a href="https://github.com/Preciousstowers" target="_blank" className="LinkedInButton" >
                                        <img className="linkedIn" src="/GitHub-Mark-64px.png" /></a>
                                        <a href="https://www.instagram.com/_preciousjane_/" target="_blank" className="LinkedInButton" >
                                        <img className="linkedIn" src="/iglogo.png" /></a>
                                </p>
                                
                        
                            </Col>
                            <Col md lg={1} >
                                <br />
                            <img className="personalPhoto" src="/IMG_9570_Original.jpg" />
                              </Col> 
                             
                        </Row>
           
                    </Container>
                 
                </section>
              

                <div className="rowTitle">
                    <h4 className="rowTitle">UX/UI Design</h4>
                </div>

                <section className="homepageDesignWork">
                    {/* <section className="homepageRow"> */}
                    <Link className="cardLink" to="/Grid">
                        <Card className="homepageCard" style={{ width: '20rem', height: '33rem' }}>
                            <Card.Img variant="top" src="/Frame 7 (10).png" style={{ backgroundColor: '#454173' }}
                            />
                            <Card.Body>
                                <Card.Title>Meet Grid</Card.Title>
                                <Card.Text>
                                    an interactive map and accessability rating application design that
                                    encourages awareness about accessbility options on campus and empowers
                                    those who identify having a disability
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>

                    <Link className="cardLink" to="/DiscoveryHub">
                    <Card className="homepageCard" style={{ width: '20rem', height: '33rem' }}>
                        <Card.Img variant="top" src="/Rectangle (5).png" style={{ backgroundColor: '#B2ACD5' }} />
                        <Card.Body>
                            <Card.Title>Meet DiscoveryHub</Card.Title>
                            <Card.Text>
                                an interactive web application that bridges the gap between tutors/mentors and community
                                organizations to help advocate information about after-school educational resources
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Link>

                    <Link className="cardLink" to="/Tutela">
                        <Card className="homepageCard" style={{ width: '20rem', height: '33rem' }}>
                            <Card.Img src="/tutelaPhotos/Frame 6 (1).png" style={{ backgroundColor: '#80CCD7' }} />
                            <Card.Body>

                                <Card.Title>Meet Tutela</Card.Title>
                                <Card.Text>
                                    the application that provides the partner when you are alone and
                                    unable to contact anyone while your saftey is compromised in rape-related or sex trafficing situations
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>


                </section>
                <div className="rowTitle">
                    <h4 className="rowTitle">Writing</h4>
                </div>
                <section className="homepageDataWork">
                    <Card className="homepageCard" style={{ width: '20rem', height: '33rem' }}>
                        <Card.Img variant="top" src="/A4 Portrait.png" />
                        <Card.Body>
                            <Card.Title>Timing Social Media - a rhetorical analysis
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="homepageCard" style={{ width: '20rem', height: '33rem' }}>
                        <Card.Img variant="top" src="/Frame 8 (2).png" />
                        <Card.Body>
                            <Card.Title>Tutorial
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

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