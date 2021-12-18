
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
                {/* <div className="box"> */}
                {/* <div className="projectTitle"> */}
                <h1 className="rowTitle">DiscoveryHub</h1>
                <p className="rowDescription">creating educational opportunities for all</p>
                {/* </div> */}
                <div className="initialImages">
                    <img className="initialImageOne" src="/discoveryHubPhotos/Screen Shot 2021-12-17 at 9.11.30 PM.png" />

                </div>
                {/* </div> */}
                <br />

                <div className="projectRowOne">

                    {/* <div className="projectOverview"> */}
                    <div className="box">
                        <br />
                        <br />
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col md lg={7}>
                                    <h2 className="rowTitle">Overview</h2>
                                    {/* <p className="rowDescriptionLong">  Tutela is latin for protection and guardianship. </p> */}

                                    <p className="rowDescriptionLong"> Our application was inspired by a tiktok trend that included users uploading
                                        videos of fake video/phone conversations to mimic an active conversation when
                                        other users have no one to call and are the passanger seat of a car and/or in a potentially
                                        threatening situation.  </p>

                                    <p className="rowDescriptionLong">
                                        In the WINFO 9th annual Hackathon, my team and I decided to take
                                        this trend and design an application because as women-identifying individuals,
                                        myself and many others are oftentimes seen as potential targets for rape-related
                                        and Human-trafficking related crimes that continue to persist as higher-institutions lack accountability
                                        help end these issues. </p>

                                    {/* <p className="rowDescriptionLong">  This application won "Best Overall" in the 9th Annual WINFO Hackathon. </p> */}
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
                                    <p className="detail">  Tools: HTML, CSS, Javascript, Figma and Canva</p>
                                    <p className="detail">  Teammates: Victoria Ngyen, Sneha Reed, Natt Sakulborrirug</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <br />


                <div className="projectRowOne">
                    <div className="box">
                        <h3 className="rowTitle">Problem Space</h3>
                        <b><p className="rowDescriptionLong">There is a disproportionate access to information
                            about educational resources due to income inequalities across the U.S </p></b>
                        <p className="rowDescriptionLong">
                            {/* <ol> */}
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col md lg={6}>
                                        <p>Only 35% of fourth graders were proficient in reading in 2019</p>
                                    </Col>
                                    <Col md lg={6}>
                                        <p>On the Nation's Report Card Fourth-graders made no improvements in math or reading,
                                            while eighth-graders scores were flat in math and only slightly improved in reading -</p>
                                    </Col>
                                    {/* <Col md lg={4}>
                                            <li>Thousands of U.S rape cases are recorded and there has yet to be accountability
                                                to the perpetrators and liability to these victims, specifically women.</li>
                                        </Col> */}
                                </Row>
                            </Container>
                            {/* </ol> */}
                        </p>
                    </div>
                </div>
                <br />


                <div className="projectRowOne">
                    <div className="box">
                        <h3 className="rowTitle">Problem</h3>
                        <p className="rowDescriptionLong"> There are inequitable information systems to learn about educational opportunities across the U.S.</p>
                        {/* <div className="researchImages"> */}
                        <div className="sidebyside">
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col md lg={4}>
                                        <b> <p>Word of Mouth</p></b>
                                        <p>Information can oftentimes be hard to remember without documentation</p>
                                    </Col>
                                    <Col md lg={4}>
                                        <b> <p>Physical Advertisements</p></b>
                                        <p>Educational Information distributed via flyers and signs can easily become destroyed</p>
                                    </Col>
                                    <Col md lg={4}>
                                        <b> <p>Social Media Platforms</p></b>
                                        <p>Social media platforms encompas a mass amount of educational information that can be overwhelming </p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <br />
                    </div>
                </div>

                {/* </div> */}

                <br />
                <div className="projectRowOne">
                    <div className="box">
                        <h3 className="rowTitle">Personas</h3>
                        <p className="rowDescriptionLong"> Two user persona's were created to further empathize with women identifying who could potnetially
                            need bystander intervention.</p>
                        <br />
                        {/* <div className="projectPersona"> */}
                        <Container>
                            <Row className="justify-content-md-center">

                                <Col md lg={6}>
                                    <p className="rowDescriptionLong"> Meet Hannah, a 21 year old college student who does not have a reliable
                                        support system and oftentimes find herself walking alone.</p>
                                    <img className="personaOne" src="tutelaPhotos/Hannah's User Persona.jpg" />
                                </Col>

                                <Col md lg={6} >
                                    <p className="rowDescriptionLong">  Meet Jenna, a 25 year old transgender woman
                                        who finds herself walking alone thoughout her daily errands. </p>
                                    <img className="personaOne" src="tutelaPhotos/Jenna's User Persona.png" />
                                </Col>
                            </Row>
                        </Container>
                        {/* </div> */}
                    </div>
                </div>

                <div className="projectRowOne">
                    <div className="box">
                        <br />
                        <h3 className="rowTitle">Why DiscoveryHub?</h3>
                        <p className="rowDescriptionLong">
                            <ol>
                                <Container>
                                    <Row className="justify-content-md-center">
                                    <Col md lg={4}>
                                        <b> <p>Shared Privatized Platform</p></b>
                                        <p>Provides a privatized platform for students/parents to directly meet organizations who offer mentors/tutors in their community </p>
                                    </Col>
                                    <Col md lg={4}>
                                        <b> <p>Online/Offline Educational Support Options</p></b>
                                        <p>The ability to have both online and offline services allows greater accessibility for those who need educational resources</p>
                                    </Col>
                                    <Col md lg={4}>
                                        <b> <p>Live Educational Help Without The Expensive Cost</p></b>
                                        <p>Tutoring/mentoring without the expensive costs allows more people in lower-income communities to have a chance at receiving higher income in the future</p>
                                    </Col>
                                    </Row>
                                </Container>
                            </ol>
                        </p>
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
                            <p className="rowDescriptionLong">She can easily view her saved recordings privatley or search the
                                most popular public recordings that other users are currenly using.
                            </p>
                        </Col>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs lg="12">
                                    <img className="biggerfeaturedImage" src="/discoveryHubPhotos/joinCommunity.png" />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>


                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">filter for organizations</h4>
                        <Col>
                            <p className="rowDescriptionLong">Jenna easily follows the instructions to guide her
                                through their first recording. She can also add an shortcut widget to her dashboard at anytime
                                through the add a shortcut feature.
                            </p>
                        </Col>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs lg="8">
                                    <img className="featuredImage" src="/discoveryHubPhotos/filterOrg.png" />
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
                            <p className="rowDescriptionLong">Jenna doesn't have any recordings, but that's okay!
                                She can easily create a recording by answering the list of questions
                                and an automated call will be created and added to her saved recordings.
                                <br />
                            </p>
                        </Col>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs lg="6">
                                    <img className="longImage" src="/discoveryHubPhotos/Screen Shot 2021-12-16 at 11.18.25 PM.png" />
                                </Col>
                                <Col xs lg="6">
                                    <img className="longImage" src="/discoveryHubPhotos/favoriteOrg.png" />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>

                
                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">register your organization form</h4>
                        <Col>
                            <p className="rowDescriptionLong">Jenna feels safe as she can access her tutela partner at any time and any location.
                                All location information will be submitted to emergency services if the user dials 911
                                via application.
                            </p>
                        </Col>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs lg="9">
                                    <img className="biggerfeaturedImage" src="/discoveryHubPhotos/Screen Shot 2021-12-17 at 9.09.36 PM.png" />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>

                <h3 className="rowTitle">Closing Thoughts</h3>
                <br />
                {/* <Row> */}
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md lg={6}>
                            <p className="rowDescriptionLong"> Two user persona's were created to further empathize with women identifying who could potnetially
                                need bystander intervention.</p>
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