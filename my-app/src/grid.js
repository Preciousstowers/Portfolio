
import './style.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, NavLink, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";
import { Link } from "react-router-dom";

export function Grid() {
    return (
        <div >
            <body >
                {/* <div className="box"> */}
                {/* <div className="projectTitle"> */}

                <h1 className="rowTitle">Grid</h1>
                <p className="rowDescription"> Increasing travel accessibility one direction at a time </p>
                {/* </div> */}
                <div className="initialImages">
                    <img className="initialImageOne" src="/gridPhotos/initialPhotoGrid.png" />

                </div>
                <br />
                <div className="projectRowOne">

                    {/* <div className="projectOverview"> */}
                    <div className="box">
                        <br />

                        <Container>
                            <Row className="justify-content-md-center">
                                <Col md lg={7}>
                                    <h2 className="rowTitle">Overview</h2>
                                    <p className="rowDescriptionLong">
                                        In today’s physical architecture, there lacks 
                                        inclusiveness for those who identify with a disability.
                                        This can include outside physical barriers such as not
                                        including an accessible entrance to a building to indoor
                                        physical barriers such as not including an accessible bathroom.

                                    </p>

                                    <p className="rowDescriptionLong">
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
                                            <p>  view full interactive application here </p>
                                        </a>

                                        <a href="https://www.canva.com/design/DAETdDe0fpo/oeytfbreqagPj8e6kr2RQA/view?utm_content=DAETdDe0fpo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" >
                                            <p>  view full slide deck here </p>
                                        </a>
                                    </p>
                                </Col>
                                <Col md lg={5}>
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

                <br />


                <div className="projectRowOne">
                    <div className="box">
                        <h3 className="rowTitle">Problem</h3>
                        <p className="rowDescriptionLong">
                            <b> People who identify as having a disability are historically
                                overlooked when designing society. </b>
                            At the University of Washington, there is a lack of digital technologies
                            that help reinforce the knowledge distribution about current accessibility
                            features.
                        </p>
                        <p className="rowDescriptionLong">
                            <ol>
                                <Container>
                                    <Row className="justify-content-md-center">
                                        <Col lg={4}>
                                            <li>
                                                6% of undergraduate students in the U.S. identified as
                                                having disabilities with 11% of that student body having a
                                                mobility limitation/orthopedic impairment
                                            </li>
                                        </Col>
                                        <Col lg={4}>

                                            <li>
                                                Specifically, traveling with a mobility disability can have
                                                numerous obstacles, such as longer travel times and/or the
                                                inability to reach their destination: “25.5 million Americans
                                                aged 5 and older have self-reported travel-limiting disabilities”
                                                (Bureau of Transportation Statistics, 2021).
                                            </li>
                                        </Col>
                                        <Col lg={4}>

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
                        </p>
                    </div>
                </div>
                <br />


                <div className="projectRowOne">
                    <div className="box">
                        <h3 className="rowTitle">Research</h3>
                        <p className="rowDescriptionLong">
                            Our team performed interviews to gain an understanding of
                            how people around the University of Washington gain insights
                            about accessibility features around campus.
                        </p>
                        {/* <div className="researchImages"> */}
                        <div className="sidebyside">

                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col lg={4}>
                                        Lindsey Muszkiewicz - a 4th-year undergraduate student who is mobility impaired
                                    </Col>
                                    <Col lg={8}>
                                        <img className="miroBoard" src="/gridPhotos/LindseyMiro.png" />
                                    </Col>
                                    <Col lg={4}>
                                        Annuska Zolyomi - HCDE PHD and INFO 498 Inclusive Design Professor
                                    </Col>
                                    <Col lg={8}>
                                        <img className="miroBoard" src="/gridPhotos/AnnuskaMiro.png" />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <br />
                    </div>
                </div>
                <div className="box">
                    <div className="projectRowOne">

                        <section className="leftHandSide">
                            <br />
                            <h4 className="rowTitle">Market Analysis</h4>
                            <p className="rowDescriptionLong">
                                        A market analysis allowed us to understand current products
                                        that helped address our problem. Current solutions
                                        still lacked vital features that could help solve our problem.
                                    </p>
                            <Container>
                                <Row className="justify-content-md-center">
                                        <Col xs md lg={6}> 
                                        <img className="featuredImage" src="/gridPhotos/marketAnalysis.png" /> 
                                        </Col>
                                </Row>
                            </Container>
                            <br />
                        </section>
                    </div>
                </div>

                <br />
                <div className="projectRowOne">
                    <div className="box">
                        <h3 className="rowTitle">Personas</h3>
                        <p className="rowDescriptionLong">
                            A user persona was created to further empathize and
                            understand with those identifying with a mobility disability.
                        </p>
                        <br />
                        <div className="projectPersona">
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col lg={4}>
                                        <br />
                                        <p >
                                            Meet Natasha, a mobility disabled undergraduate student
                                            who oftentimes finds themself having a hard time planning
                                            their trip to class because they don’t know which path will take her to
                                            the accessible entrance.
                                        </p>
                                    </Col>
                                    <Col md lg={8}>
                                        <img className="gridpersonaOne" src="/gridPhotos/NatashaPersona.png" />
                                   
                                    </Col>
                                </Row>
                            </Container>

                        </div>
                        <br />
                    </div>
                
                </div>
           
                <div className="projectRowOne">
                    <div className="box">
                        <br />
                        <h3 className="rowTitle">Why Grid?</h3>
                        <p className="rowDescriptionLong">
                            <ol>
                                <Container>
                                    <Row className="justify-content-md-center">
                                        <Col md lg={4}>
                                          <li><b>  Provides information</b>  about accessibility features about indoor buildings, outdoor architecture and on travel paths </li>
                                        </Col>
                                        <Col md lg={4}>
                                         <li><b> Empowers users </b> who identify having a mobility disability by reassuring self-sufficiency through 
                                                understanding current accesibility features for future travels </li>
                                        </Col>
                                        <Col md lg={4}>
                                        <li> <b> De-stigmatizes conversations </b> about disabilities and accesibility features in society </li>
                                        </Col>
                                    </Row>
                                </Container>
                            </ol>

                        </p>
                        <br />
                    </div>

                </div>

                <div className="projectRowOne">
                    <div className="box">
                        <br />
                        <h3 className="rowTitle">Initial Iteration</h3>
                        <p className="rowDescriptionLong">
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col xs lg="9"><img className="miroBoard" src="/gridPhotos/Group 197 2.png" /> </Col>
                                </Row>
                            </Container>

                        </p>
                        <p className="rowDescriptionLong">
                            From our initial iteration to our final product, we
                            changed the Color scheme/UI, restructured the information,
                            changed the centrality of information and included optional
                            flagging of misinformation.
                        </p>
                        <br />
                    </div>
                </div>
                <br />
                <br />

                <h3 className="rowTitle">Final Application Features</h3>
                <br />
                <br />

                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">building and room accessibility rating</h4>
                        <Col>
                            <p className="rowDescriptionLong">
                                Easily view building, path and room accessibility ratings
                                based on current contributions
                            </p>

                        </Col>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs lg={5}><img className="gridFeaturedImage" src="/gridPhotos/Frame 170 (2).png" /> </Col>
                            </Row>
                        </Container>
                    </section>

                </div>
                <br />
                <br />
                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">incentivized contribution</h4>
                        <Col>
                            <p className="rowDescriptionLong">
                                Users can create a contribution and earn more stickers
                                the user makes more contributions to the application
                                <br />
                            </p>
                        </Col>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs lg="8"> <img className="gridFeaturedImageTwo" src="/gridPhotos/incentivized.png" /></Col>
                            </Row>
                        </Container>
                    </section>
                </div>

                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">indoor accessibility and map features</h4>
                        <Col>
                            <p className="rowDescriptionLong">Indoor map design allows additional holistic
                                information about accessibility features within the UW campus
                            </p>
                        </Col>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs lg="7"> <img className="gridFeaturedImageTwo" src="/gridPhotos/indoorRating.png" /></Col>
                            </Row>
                        </Container>
                    </section>
                </div>

                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">consistent accesibility alerts</h4>
                        <Col>
                            <p className="rowDescriptionLong">Become more aware about what might be blocking the
                                accessible path by using the application while traveling.
                            </p>
                        </Col>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs lg="7"> <img className="biggerfeaturedImage" src="/gridPhotos/map.png" /> </Col>
                            </Row>
                        </Container>
                    </section>
                </div>

                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">hands-free interaction</h4>
                        <Col>
                            <p className="rowDescriptionLong">
                                Hands-free interaction allows those who are consistently using
                                their hands (such as wheelchair users) to be able to be guided
                                throughout their route using voice mode
                            </p>
                        </Col>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs lg="10"> <img className="biggerfeaturedImage" src="/gridPhotos/handsFree.png" /></Col>
                            </Row>
                        </Container>

                    </section>
                </div>

                <h3 className="rowTitle">Closing Thoughts</h3>
                <br />
                <Container>
                <Row>
                <Col xs lg="10">
                    <p className="rowDescriptionLong"> 
                    Disability is on a spectrum. This entails that making a digital 
                    application to capture all aspects of the spectrum will be very 
                    difficult and could still leave people unintentionally excluded. 
                    </p>
                    <p className="rowDescriptionLong"> 
                    If I were to continue this project, I would perform user testing
                    with those who identify having a mobility disability and use physical technologies
                    to examine the relationship between our application and the physical space. 
                    </p>
                </Col>
                </Row>
                </Container>
                <center>
                    <br />
                    <Link exact to="/">
                        back to homepage
                    </Link>
                </center>
                <br />

            </body>
        </div>
    )
};

export default Grid;