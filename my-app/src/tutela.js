
import './style.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, NavLink, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";
import { Link } from "react-router-dom";

export function Tutela() {
    return (
        <div >
            <body>
                <h1 className="rowTitle">tutela</h1>
                <p className="rowDescription">connecting together, safely</p>
                <div className="initialImages">
                    <img className="initialImageOne" src="/tutelaPhotos/initialPhoto.png" />
                </div>
                <div className="tutelaprojectRowOne">
                    <div className="box">
                        <br />
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col md lg={7}>
                                    <h2 className="rowTitle">Overview</h2>
                                    <p>  Tutela is latin for protection and guardianship. </p>

                                    <p> Our application was inspired by a TikTok trend that included users uploading
                                        videos of fake video/phone conversations to mimic an active conversation when
                                        other users have no one to call. These conversations can be played in 
                                        the passenger seat of a car and/or in a potentially
                                        threatening situation.  
                                        </p>

                                    <p>
                                        In the WINFO 9th annual Hackathon, my team and I decided to take
                                        this trend and design an application because as women-identifying individuals,
                                        myself and many others are oftentimes seen as potential targets for rape-related
                                        and Human-trafficking related crimes. 
                                        </p>

                                    <p>  This application won "Best Overall" in the 9th Annual WINFO Hackathon. </p>
                                    <a href="https://www.figma.com/proto/FdjP3QHiSXLWg45xKmXVIt/Tutela%3A-Connecting-Safely%2C-Together.?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2" target="_blank" >
                                        <p>  view full interactive application here </p>
                                    </a>

                                    <a href="https://www.canva.com/design/DAETdDe0fpo/oeytfbreqagPj8e6kr2RQA/view?utm_content=DAETdDe0fpo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" >
                                        <p>  view full slide deck here </p>
                                    </a>
                                </Col>
                                <Col md lg={5}>
                                    <br />
                                    <h5 className="detail">Project Specifics  </h5>
                                    <p className="detail">  My Role: Lead Spokesperson,  Product Designer  </p>
                                    <p className="detail">  Team size: 4 total people</p>
                                    <p className="detail">  Time Frame: ~30 Hours </p>
                                    <p className="detail">  Tools: Figma, Canva</p>
                                    <p className="detail">  Teammates: Kaamna Rishi, Megha Jain and Raveena Rao</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
          
                <div className="tutelaprojectRowTwo">
                    <div className="box">
                        <h3 className="rowTitle">Problem</h3>
                        <b><p>Higher institutions lack the accountability that Human Trafficking and Rape
                            related cases are consistently making women-identifying and others feel unsafe in society,
                            both in home and in public spaces. </p></b>
                        <p>
                            <ol>
                                <Container>
                                    <Row className="justify-content-md-center">
                                        <Col md lg={4}>
                                            <li>Human trafficking cases lack equitable data recordings in comparison
                                                to other criminal cases, such as burglary</li>
                                        </Col>
                                        <Col md lg={4}>
                                            <li>The criminal justice system lacks equal investigation
                                                qualities and
                                                motivation when crimes involve female-dominated victims</li>
                                        </Col>
                                        <Col md lg={4}>
                                            <li>Thousands of U.S rape cases are recorded and there has yet place accountability
                                                on perpetrators and liability for victims, specifically women-identifying</li>
                                        </Col>
                                    </Row>
                                </Container>
                            </ol>
                        </p>
                    </div>
                </div>

                <div className="tutelaprojectRowOne">
                    <div className="box">
                        <h3 className="rowTitle">Research</h3>
                        <p> Women feel safer in the actual or potential
                            presence of others because they assume that offenders will be deterred by the possibility of bystander intervention.
                            - Women's Fear and Design of Public Space</p>
                        <b><p>61% of women regularly take steps to avoid being sexually assaulted - YouGov </p></b>

                        <div className="sidebyside">
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col md lg={6}>

                                        <img className="researchPicture" src="tutelaPhotos/YouGov.jpeg" />
                                    </Col>
                                    <Col md lg={6}>
                                        <img className="researchPicture" src="/tutelaPhotos/Safety US - 3.jpeg" />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <br />
                    </div>
                </div>
             
                <div className="tutelaprojectRowTwo">
                    <div className="box">
                        <h3 className="rowTitle">Personas</h3>
                        <p> Two user personas were created to further empathize with women identifying who could potentially
                            need bystander intervention.</p>
                        <br />
                        <Container>
                            <Row className="justify-content-md-center">

                                <Col md lg={6}>
                                    <p> Meet Hannah, a 21 year old college student who does not have a reliable
                                        support system and oftentimes find herself walking alone</p>
                                    <img className="personaOne" src="tutelaPhotos/Hannah's User Persona.jpg" />
                                </Col>

                                <Col md lg={6} >
                                    <p>  Meet Jenna, a 25 year old transgender woman
                                        who finds herself walking alone though out her daily errands </p>
                                    <img className="personaOne" src="tutelaPhotos/Jenna's User Persona.png" />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>

           
                <div className="tutelaprojectRowOne">
                    <div className="box">
                        <br />
                        <h3 className="rowTitle">Why tutela?</h3>
                        {/* <p className="rowDescriptionLong">We wanted to create an application that would offer users a way to connect with family
                            and friends when they can't connect with anyone and safety is compromised. Many women often fear walking or traveling alone,
                            our app allows users to share their location with desired contacts and play audio or video
                            recordings to provide companionship when users feel alone.</p> */}
                        <p>
                            <ol>
                                <Container>
                                    <Row className="justify-content-md-center">
                                        <Col md lg={4}>
                                           <li><b>Reassures users by providing companionship </b> through
                                                playback audio and video calls to mimic live conversations </li>
                                        </Col>
                                        <Col md lg={4}>
                                         <li> <b> Delivers more detailed and holistic information to institutions </b> 
                                                when/if a Human-Trafficking case/rape-related case happens</li>
                                        </Col>
                                        <Col md lg={4}>
                                          <li>  <b> Maintains optional in-home security for domestic violence situations </b> 
                                                by connecting to Alexa/Google Home feature </li>
                                        </Col>
                                    </Row>
                                </Container>
                            </ol>
                        </p>
                        <br />
                    </div>
                </div>
                <br />
                <h3 className="rowTitle">Main Application Features</h3>
                <br />
                <div className="tutelaprojectRowTwo">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">easy onboarding process</h4>
                        <Col>
                            <p>easily start with adding a recording and/or shortcut widget at the begining of onboarding or start with a pre-customized dashboard
                            </p>
                        </Col>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs md={10} lg={8} xl={8}>
                                    <img className="featuredImage" src="/tutelaPhotos/onBoarding.png" />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <div className="tutelaprojectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">add an automated phone/voice recording</h4>
                        <Col>
                            <p>don't have any recordings? that's okay!
                                simply create a recording by answering a list of questions
                                and an automated call will be created and added to the saved recordings page
                                <br />
                            </p>
                        </Col>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs lg={8} xl={8}>
                                    <img className="longImage" src="/tutelaPhotos/createACall.png" />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <div className="tutelaprojectRowTwo">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">access saved phone/voice recordings</h4>
                        <Col>
                            <p>view all saved recordings privately or search the
                                most popular public recordings that are published by other users
                            </p>
                        </Col>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs lg={12} xl={12}>
                                    <img className="biggerfeaturedImage tutelaBiggerFeaturedImage" src="/tutelaPhotos/Frame 3 (2).png" />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <div className="tutelaprojectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">an on-the-go partner</h4>
                        <Col>
                            <p>feel safer as the user can access their tutela partner at any time and any location.
                                all location information will be submitted to emergency services if the user dials 911
                                via application
                            </p>
                        </Col>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs md={10} lg={9} xl={10}>
                                    <img className="biggerfeaturedImage tutelaBiggerFeaturedImage" src="/tutelaPhotos/Frame 2 (2).png" />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <div className="tutelaprojectRowTwo">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">pair with Alexa</h4>
                        {/* <Col> */}
                            <p> 
                                address potential at-home saftey
                                by accessing the "pair to Alexa" feature and entering a key word/sentence to have the application 
                                dial a friend or 911
                            </p>
                        {/* </Col> */}
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs md={11} lg={7} xl={7}>
                                    <img className="biggerfeaturedImage " src="/tutelaPhotos/saveAlexa.png" />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <br />
                <h3 className="rowTitle">Closing Thoughts</h3>
                <br />
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg={6}>
                            <p className="rowDescriptionLong">
                            <br />
                                I'm proud that my team and I were able to create an application that
                                addressed a sensitive yet important topic that affects at least half of
                                population. As mentors visited our (virtual) table, it was motivating to
                                see their positive facial expressions about our application and receive feedback
                                that helped us think more critically about both the topic and design functionality.
                            </p>
                            <p className="rowDescriptionLong">
                            Accommodating and learning about digital privacy was especially valuable.
                                When mentors would arrive at our table, we would be asked about user privacy when
                                addressing public voice memos and/or Alexa listening to users when they speak. Our team
                                answered these questions through the best of our ability, however privacy laws involve many
                                details and layers that we would thoroughly researched if we had adequate time.
                            </p>
                        </Col>
                
                    <Col xs lg={6}> <img className="featuredImage" src="tutelaPhotos/WINFO9thHackathonWinningPoster.jpeg" /></Col>
                    </Row>
                </Container>
                <br />
                
                <center>
                    <br />
                    <Link exact to="/">
                        <button className="tutelaButton">
                            back to homepage
                        </button>
                    </Link>
                </center>
                <br />

                <br />
            </body>
        </div>
    )
};

export default Tutela;