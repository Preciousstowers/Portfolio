
import './style.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, NavLink, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";

export function Tutela() {
    return (
        <div >
            <body >
                {/* <div className="box"> */}
                {/* <div className="projectTitle"> */}
                <h1 className="rowTitle">tutela</h1>
                <p className="rowDescription">connecting together, safely</p>
                {/* </div> */}
                <div className="initialImages">
                    <img className="initialImageOne" src="/tutelaPhotos/initialPhoto.png" />

                </div>
                {/* </div> */}
                <br />

                <div className="projectRowOne">

                    {/* <div className="projectOverview"> */}
                    <div className="box">
                        <br />
                        <h2 className="rowTitle">Overview</h2>
                        <p className="rowDescriptionLong">  Tutela is latin for protection and guardianship. </p>

                        <p className="rowDescriptionLong"> Our application was inspired by a tiktok trend that included users uploading
                            videos of fake video/phone conversations to mimic an active conversation when
                            other users have no one to call and are the passanger seat of a car and/or in a potentially
                            threatening situation. In the WINFO 9th annual Hackathon, my team and I decided to take
                            this trend and design an application because as women-identifying individuals,
                            myself and many others are oftentimes seen as potential targets for rape-related
                            and Human-trafficking related crimes that continue to persist as higher-institutions lack accountability
                            help end these issues.
                            <p >  This application won "Best Overall" in the 9th Annual WINFO Hackathon. </p>
                            <p >  View interactive application here </p>
                        </p>

                        <p className="rowDescriptionLong">
                            <div className="projectDetails">
                                {/* <div className="box"> */}
                                <h5 className="rowTitle">Project Specifics - </h5>
                                <p className="rowTitle">  My Role: Lead Spokespearson,  Product Designer  </p>
                                <p className="rowTitle">  Team size: 4 total people</p>
                                <p className="rowTitle">  Time Frame: ~30 Hours </p>
                                <p className="rowTitle">  Tools: Figma, Canva</p>
                                <p className="rowTitle">  Teammates: Kaamna Rishi, Megha Jain and Raveena Rao</p>


                                <br />
                                <br />
                            </div>
                        </p>
                    </div>


                </div>
                <br />


                <div className="projectRowOne">
                    <div className="box">
                        <h3 className="rowTitle">Problem</h3>
                        <b><p className="rowDescriptionLong">Higher institutions lack the accountability that Human Trafficking and Rape
                            related cases are consistently making women (and others) feel unsafe in society,
                            both in home and in public spaces. </p></b>
                        <p className="rowDescriptionLong">
                            <ol>
                                <li>Human trafficking cases lack equitable data recordings in comparison
                                    to other criminal cases, such as burglary.</li>

                                <li>The criminal justice system also lacks equal investigation qualities and
                                    motivation when crimes involve female-dominated victims.</li>

                                <li>Thousands of U.S rape cases are recorded and there has yet to be accountability
                                    to the perpetrators and liability to these victims, specifically women.</li></ol>
                        </p>
                    </div>
                </div>
                <br />


                <div className="projectRowOne">
                    <div className="box">
                        <h3 className="rowTitle">Research</h3>
                        <p className="rowDescriptionLong"> Women feel safer in the actual or potential
                            presence of others because they assume that offenders will be deterred by the possibility of bystander intervention.
                            - Women's Fear and Design of Public Space</p>
                        <b><p className="rowDescriptionLong">61% of women regularly take steps to avoid being sexually assaulted - YouGov </p></b>

                        {/* <div className="researchImages"> */}
                        <div className="sidebyside">
                            <Col md={6}>
                                <img className="researchPicture" src="tutelaPhotos/YouGov.jpeg" />
                            </Col>
                            <Col md={6}>
                                <img className="researchPicture" src="/tutelaPhotos/Safety US - 3.jpeg" />
                            </Col>
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
                        <div className="projectPersona">
                            <Col md={6}>
                                <p>Meet Hannah, a 21 year old college student who does not have a reliable
                                    support system and oftentimes find herself walking alone.</p>
                                <img className="personaOne" src="tutelaPhotos/Hannah's User Persona.jpg" />
                            </Col>

                            <Col md={6}>
                                Meet Jenna, a 25 year old transgender woman
                                who wants to be more self sufficent and finds herself walking alone thoughout her daily errands.
                                <img className="personaTwo" src="tutelaPhotos/Jenna's User Persona.png" />
                            </Col>
                        </div>
                    </div>
                </div>

                <div className="projectRowOne">
                    <div className="box">
                        <br />
                        <h3 className="rowTitle">Solution</h3>
                        <p className="rowDescriptionLong">We wanted to create an application that would offer users a way to connect with family
                            and friends when they can't connect with anyone and safety is compromised. Many women often fear walking or traveling alone,
                            our app allows users to share their location with desired contacts and play audio or video
                            recordings to provide companionship when users feel alone.</p>


                        <p className="rowDescriptionLong">
                            <ol>
                                <li>Reassures users, primarily women-idenifiying that they are never alone </li>
                                <li>Provides more holistic information for institutions
                                    when/if a Human-Trafficking case/rape-related case happens</li>
                                <li>Maintains optional in-home security for domestic violence situations
                                    by implementing Connect to Alexa/Google Home feature </li>
                            </ol>
                        </p>
                        <br />
                    </div>

                </div>
                <br />
                <br />

                <h3 className="rowTitle">Jenna's Favorite Application Features</h3>
                <br />
                <br />

                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">easy onboarding process</h4>
                        <Col>
                            <p className="rowDescriptionLong">Jenna easily follows the instructions to guide her
                                through their first recording. She can also add an shortcut widget to her dashboard at anytime
                                through the add a shortcut feature.

                            </p>
                        </Col>
       
                        <img className="featuredImage" src="/tutelaPhotos/onBoarding.png" />
                      
                    </section>
                </div>
                <br />
                <br />
                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">add an automated phone/voice recording</h4>

                        <Col>
                            <p className="rowDescriptionLong">Jenna doesn't have any recordings, but that's okay!
                                She can easily create a recording by answering the list of questions
                                and an automated call will be created and added to her saved recordings.
                                <br />
                            </p>
                        </Col>
                        <img className="longImage" src="/tutelaPhotos/createACall.png" />
                    </section>
                </div>

                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">access saved phone/voice recordings</h4>
                        <Col>
                            <p className="rowDescriptionLong">She can easily view her saved recordings privatley or search the
                                most popular public recordings that other users are currenly using.
                            </p>
                        </Col>
                        <img className="biggerfeaturedImage" src="/tutelaPhotos/Frame 3 (2).png" />
                    </section>
                </div>

                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">an on-the-go partner</h4>
                        <Col>
                            <p className="rowDescriptionLong">Jenna feels safe as she can access her tutela partner at any time and any location.
                                All location information will be submitted to emergency services if the user dials 911
                                via application.
                            </p>
                        </Col>
                        <img className="biggerfeaturedImage" src="/tutelaPhotos/Frame 2 (2).png" />
                    </section>
                </div>

                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">pair with alexa</h4>

                        <Col>
                            <p className="rowDescriptionLong"> Jenna sometimes feels unsafe at home. She can address potential at-home saftey
                                by accessing the connect to Alexa feature is added by saying a key word/sentence and the application
                                will call a friend or 911.
                            </p>
                        </Col>
                        <img className="biggerfeaturedImage" src="/tutelaPhotos/saveAlexa.png" />
                    </section>
                </div>

                <h3 className="rowTitle">Closing Thoughts</h3>
                <br />
                <Row>
                    <Col md={6}>
                    <p className="rowDescriptionLong"> Two user persona's were created to further empathize with women identifying who could potnetially
                            need bystander intervention.</p>
                    </Col>
                    <Col md={6}>
                    <img className="featuredImage" src="tutelaPhotos/WINFO9thHackathonWinningPoster.jpeg" /> 
                    </Col>
                </Row>
             
            </body>
        </div>
    )
};

export default Tutela;