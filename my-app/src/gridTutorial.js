
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
                                            In today’s physical architecture, there lacks
                                            inclusiveness for those who identify with a disability.
                                            This can include outside physical barriers such as not
                                            including an accessible entrance to a building to indoor
                                            physical barriers such as not including an accessible bathroom.
                                        </p>


                                        <p>  Created in the INFO360 Design Methods class,
                                            our application Grid, addresses the accessibility
                                            information gap by allowing users to identify,
                                            rate and contribute knowledge about physical
                                            accessibility features in and around the
                                            University of Washington Campus.
                                        </p>

                                        <p>  Our application allows those who identify with a
                                            disability to better plan out their day by understanding
                                            where accessible features are and encourages those who do
                                            not have a disability to join the conversation surrounding
                                            inclusive spaces.  </p>

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
                                    <h5 className="detail">Project Specifics  </h5>
                                    <p className="detail">  My Role: Lead Speaker,  Product Designer  </p>
                                    <p className="detail">  Team size: 5 total people</p>
                                    <p className="detail">  Time Frame: 11 weeks </p>
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
                            <b className='boldText'> People who identify as having a disability are historically
                                overlooked when designing society. </b>
                            At the University of Washington, there is a lack of digital technologies
                            that help reinforce the knowledge distribution about current accessibility
                            features.
                        </p>

                        <ol>
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col xs={12} sm md lg={4}>
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
                                    </Col>
                                </Row>
                            </Container>

                        </ol>
                    </div>
                </div>
                {/* <br /> */}


                <div className="GridProjectRowOne">
                    <div className="box">
                        <h3 className="rowTitle">Grid Tutorial Selections</h3>
                        <p >
                            Our team performed interviews to gain an understanding of
                            how people around the University of Washington gain insights
                            about accessibility features around campus.
                        </p>
                        <img className="miroBoard" src="/tutorialPhotos/Frame 179 (2).png" />

                        <br />
                        {/* <Container> */}
                        <Container>
                                <Row className="justify-content-md-center">
                                    <Col xs={12} sm md lg={4}>
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
                                    </Col>
                                </Row>
                            </Container>
                        {/* </Container> */}
                        <br />
                    </div>
                </div>

                <h4 className="rowTitle">Let's checkout the Create a Contribution tutorial</h4>

                <div className="box">
                    <div >
                        <section className="leftHandSide">
                            <br />
                            {/* <h4 className="rowTitle">Create a Contribution tutorial</h4> */}
                            <Container>
                                <Row className="justify-content-md-center">
                                 
                                        <img src="/tutorialPhotos/directionFrames.png" />
                    
                                </Row>
                            </Container>
                            <br />
                        </section>
                    </div>
                </div>


                <div className="GridProjectRowOne">
                    <div className="box">
                        <h3 className="rowTitle">Thought Process</h3>
                        <Row className="justify-content-md-center">
                            <Col xs={12} lg={4}>
                                <p>
                                    <br />
                                    A user persona was created to further empathize and
                                    understand with those identifying with a mobility disability.
                                </p>
                                <br />
                                <p>
                                    Meet Natasha, a mobility disabled undergraduate student
                                    who oftentimes finds themself having a hard time planning
                                    their trip to class because they don’t know which path will take her to
                                    the accessible entrance.
                                </p>
                            </Col>
                            <Col xs={12} lg={8}>
                                <img className="gridpersonaOne" src="/tutorialPhotos/annotatedDirections.png" />
                            </Col>
                        </Row>
                    </div>

                </div>

              
                    {/* <br /> */}

                  
                 
                <h3 className="rowTitle">Closing Thoughts</h3>
                <Container>
                    <Row>
                        <Col xs={12} lg={6}>

                            <br />
                            <p >
                                Disability is on a spectrum. This entails that making a digital
                                application to capture all aspects of the spectrum will be very
                                difficult and could still leave people unintentionally excluded.
                            </p>
                            <p >
                                If I were to continue this project, I would perform user testing
                                with those who identify having a mobility disability and use physical technologies
                                to examine the relationship between our application and the physical space.
                            </p>
                        </Col>
                        <Col lg={6}>
                            <img className="featuredImage smallerScreenSizeClassLastImage" src="/Frame 7 (10).png" />
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