
import './style.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, NavLink, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";
import { Link } from "react-router-dom";

export function DiscoveryHub() {
    return (
        <div >
            <body >
                <h1 className="rowTitle">DiscoveryHub</h1>
                <p className="rowDescription">creating educational opportunities for all</p>
                <div className="initialImages">
                    <img className="initialImageOne" src="/discoveryHubPhotos/Screen Shot 2021-12-17 at 9.11.30 PM.png" />
                </div>
                <br />

                <div className="projectRowOne">
                    <div className="box">
                        <br />
                        <br />
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col md lg={7}>
                                    <h2 className="rowTitle">Overview</h2>

                                    <p className="rowDescriptionLong"> Socioeconomic innequalities are still prevelant among
                                        many communities accross the United States. The long history of these innequalities has created
                                        collateral damage in the U.S educational system, where students in impoverished areas do not recieve
                                        equal amounts educational resources. Information systems to distribute these educational resources lack
                                        vital features to help their students long-term.
                                    </p>

                                    <p className="rowDescriptionLong">
                                        In our INFO442 Cooperative Software Development class, we created DiscoveryHub,
                                        a product to connect local organizations who offer tutoring and mentoring services
                                        to students within their community.
                                    </p>

                                    <b><p className="rowDescriptionLong">For students, by students. </p></b>

                                    <a href="https://discoveryhub-86001.firebaseapp.com/" target="_blank" >
                                        <p className="rowDescriptionLong">  view full product here </p>
                                    </a>

                                    <a href="https://www.canva.com/design/DAExQqM053k/k8R0Eo6dRqlccp81xUw52w/view?utm_content=DAExQqM053k&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1" target="_blank" >
                                        <p className="rowDescriptionLong">  view full slide deck here </p>
                                    </a>
                                </Col>
                                <Col md lg={5}>
                                    <br />
                                    <h5 className="detail">Project Specifics  </h5>
                                    <p className="detail">  My Role: Product Designer, assistant developer </p>
                                    <p className="detail">  Team size: 4 total people</p>
                                    <p className="detail">  Time Frame: 12 weeks (including a 3 week development sprint)</p>
                                    <p className="detail">  Tools: HTML, CSS, Javascript, React, Firebase Figma and Canva</p>
                                    <p className="detail">  Teammates: Victoria Ngyen, Sneha Reed, Natt Sakulborrirug</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <br />
                <br />


                <div className="projectRowOne">
                    <div className="box">
                        <h3 className="rowTitle">Problem</h3>
                        <p className="rowDescriptionLong"> There are inequitable information systems to learn about educational opportunities across the U.S.</p>
                        <div className="sidebyside">
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col md lg={4}>
                                        <p>  Information from <b> word of mouth,</b>
                                            can oftentimes be <b>hard to remember</b> without documentation
                                        </p>
                                        {/* <Row className="img-fluid w-100"> */}
                                        <center><img className="illustration" src="/discoveryHubPhotos/mellow-the-beginning-of-a-family (1).png" /></center>
                                        {/* </Row> */}
                                    </Col>
                                    <Col md lg={4}>
                                        <p>Educational information distributed via  <b>physical advertisements</b>, such as
                                            flyers and signs can <b> easily become destroyed</b></p>
                                        <center><img className="illustration" src="/discoveryHubPhotos/mellow-53 (1).png" /></center>
                                    </Col>
                                    <Col md lg={4}>
                                        <p> <b>Social media platforms</b> encompas a mass amount of educational
                                            information that can be <b> overwhelming for the user</b> </p>
                                        <center><img className="illustration" src="/discoveryHubPhotos/mellow-log-out (1).png" /></center>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <br />
                    </div>
                </div>

                <br />
                <div className="projectRowOne">
                    <div className="box">
                        <h3 className="rowTitle">Personas</h3>
                        <p className="rowDescriptionLong"> Two of our potential users who could utilize DiscoveryHub</p>
                        <br />
                        <Container>

                            <Row className="justify-content-md-center">
                                <Col md lg={6}>
                                <center>   <p className="rowDescriptionLong"> Meet Melissa, a busy 34 year old mother of two children.</p></center>


                                </Col>

                                <Col md lg={6} >
                                <center>    <p className="rowDescriptionLong"> Meet Winfo, sn RSO at the University of Washington who wants
                                        to help students in the surrounding community</p></center>

                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md lg={6}>
                                <center><img className="illustration" src="/discoveryHubPhotos/mellow-a-hot-summer-day.png" /></center>
                                </Col>

                                <Col md lg={6}>
                                <center>  <img className="illustration" src="/discoveryHubPhotos/mellow-the-beginning-of-a-family (1).png" /></center>
                                </Col>
                            </Row>

                            <Row className="justify-content-md-center">
                                <Col md lg={6}>
                                <center>   <p className="rowDescriptionLong"> Melissa needs an easy way to search and learn about educational
                                        programs outside of school hours for her children</p></center>  
                                </Col>

                                <Col md lg={6}>
                                <center>      <p className="rowDescriptionLong"> WINFO needs an easy platform where they can showcase their
                                        organization if parents or students are in need of a mentor/tutor</p>    </center>                                      </Col>
                            </Row>
                        </Container>
                    </div>
                </div>

                {/* <div className="projectRowOne">
                    <div className="box">
                        <br />
                        <br />
                        <Container>
                            <Row className="justify-content-lg-center">
                                <Col md lg={12}>
                                    <h3 className="textBanner">but don't worry, Melissa and WINFO met on DiscoveryHub!</h3>
                                </Col>
                            </Row>
                        </Container>
                        <br />
                        <br />
                    </div>
                </div> */}

                <div className="projectRowOne">
                    <div className="box">
                        <br />
                        <h3 className="rowTitle">Why DiscoveryHub?</h3>
                        <br />
                        <p className="rowDescriptionLong">
                            <ol>
                                <Container>
                                    <Row className="justify-content-md-center">
                                        <Col md lg={4}>
                                        <center><p><b>Provides a shared privatized platform </b> for students/parents to directly meet
                                                organizations who offer mentors/tutors in their community without potentially distracting information
                                            </p></center> 
                                        </Col>
                                        <Col md lg={4}>
                                        <center><p><b>Online and offline education support services</b>
                                                allows greater accessibility for those who need educational resources</p></center> 
                                        </Col>
                                        <Col md lg={4}>
                                        <center><p><b>Live tutoring/mentoring without the expensive costs</b> allows more people in
                                                lower-income communities to have a chance at having a more prosperoruos future</p></center>  
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center">
                                        <Col md lg={4}>
                                            <center><img className="illustration" src="/discoveryHubPhotos/mellow-virtual-meeting.png" /></center>
                                        </Col>
                                        <Col md lg={4}>
                                            <center><img className="illustration" src="/discoveryHubPhotos/mellow-remote-work.png" /></center>
                                        </Col>
                                        <Col md lg={4}>
                                            <center><img className="illustration" src="/discoveryHubPhotos/mellow-back-to-school (1).png" /></center>
                                        </Col>
                                    </Row>
                                </Container>
                            </ol>
                        </p>
                        <br />
                    </div>
                </div>
                <br />

                <div className="projectRowOne">
                    <div className="box">
                        <h3 className="rowTitle">Initial Mockup</h3>
                        <Container>
                            <Row >
                                <Col md lg={6}>
                                    <img className="discoveryHubMockUps" src="/discoveryHubPhotos/Get Started (1).jpg" />
                                </Col>
                                <Col md lg={6}>
                                    <img className="discoveryHubMockUps" src="/discoveryHubPhotos/Favorites (3).jpg" />
                                </Col>
                            </Row>
                        </Container>
                        <br />
                    </div>
                </div>
                <br />
                <br />

                <h3 className="rowTitle">main application features</h3>
                <br />
                <br />
                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">join our academic community popup</h4>
                        <Col>
                            <p className="rowDescriptionLong">a users and organizations are quickly welcomed by offering
                                to join the community using a pop-up to register.
                            </p>
                        </Col>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs lg={8}>
                                    <img className="discoveryHubMockUps" src="/discoveryHubPhotos/joinCommunity.png" />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>


                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">filter for organizations</h4>
                        <Col>
                            <p className="rowDescriptionLong">users can filter for organizations based on
                                their wanted criteria
                            </p>
                        </Col>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs lg={8}>
                                    <img className="discoveryHubMockUps" src="/discoveryHubPhotos/filterOrg.png" />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <br />
                <br />
                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">favorite organization handling</h4>
                        <Col>
                            <p className="rowDescriptionLong">logged in users can favorite an organization and it is
                                saved to their profile. if the user is not signed in, they will be notified to join the academic community
                                before using the feature
                                <br />
                            </p>
                        </Col>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs lg={8}>
                                    <img className="discoveryHubMockUps" src="/discoveryHubPhotos/favoriteOrg.png" />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>


                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">register your organization form</h4>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs lg={6}>
                                    <p className="rowDescriptionLong">organizations can become registered in discoveryHub by filling out
                                        the form and they can soon view their registered org on the homescreen
                                    </p>
                                </Col>
                                <Col xs lg={6}>
                                    <img className="evenbiggerfeaturedImage" src="/discoveryHubPhotos/Screen Shot 2021-12-17 at 9.09.36 PM.png" />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>

                <h3 className="rowTitle">Closing Thoughts</h3>
                <br />
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md lg={6}>
                            <p className="rowDescriptionLong">

                                Designing a website based on the skill level of the developers was a crucial skill I learned.
                                As someone who assisted in developing, I was able to understand where my design could succeed and fail
                                faster than if I had not understood/helped with the development. I was also able to empathize with my developers
                                if they could not finish a task due to the technicality of the design and functionality. </p>
                            <p className="rowDescriptionLong">

                                If I were to work on this project in the future, I would implement a view mentor/tutor feature. This would
                                allow specific mentors and tutors to have a platform to share singular voices along with voices of the organizations.
                                See mockup on the right.  </p>
                        </Col>
                        <Col md lg={6}>
                            <img className="biggerfeaturedImage" src="/discoveryHubPhotos/Organization Profile (2).jpg" />
                        </Col>
                    </Row>
                </Container>
                <br />

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

export default DiscoveryHub;