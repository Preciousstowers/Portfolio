
import './style.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, NavLink, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";

export function Tutela() {
    return (
        <div >
            <body className="tutela">
                <div className="box">
                <div className="projectTitle">
                    <h1 className="rowTitle">tutela</h1>
                    <p className="rowDescription">connecting together, safely</p>
                </div>
                <div className="initialImages">
                    <img className="initialImageOne" src="/tutelaPhotos/initialPhoto.png" />

                </div>
                </div>
                <div className="projectRowOne">
              
                    <div className="projectOverview">
                    <div className="box">
                        <h2 className="rowTitle">Overview</h2>
                        <p className="rowDescription">  Tutela is latin for protection and guardianship. </p>

                        <p className="rowDescription"> Our application was inspired by a tiktok trend that included users uploading
                            videos of fake video/phone conversations to mimic an active conversation when
                            other users have no one to call and are the passanger seat of a car and/or in a potentially
                            threatening situation. In the WINFO 9th annual Hackathon, my team and I decided to take
                            this trend and design an application because as women-identifying individuals,
                            myself and many others are oftentimes seen as potential targets for rape-related
                            and Human-trafficking related crimes that continue to persist as higher-institutions lack accountability
                            help end these issues.
                        </p>

                        <p className="rowDescription">  This application won "Best Overall" in the 9th Annual WINFO Hackathon </p>
                        <p className="rowDescription">  View interactive application here </p>


                    </div>
                    </div>
              
                    <div className="projectDetails">
                    <div className="box">
                        <h5 className="rowTitle">Project Specifics</h5>
                        <p className="rowTitle">  My Role: Product Designer, Spokespearson  </p>
                        <p className="rowTitle">  Team size: 4 total people</p>
                        <p className="rowTitle">  Time Frame: ~30 Hours </p>
                        <p className="rowTitle">  Tools: Figma, Canva</p>
                        <p className="rowTitle">  Teammates: Kaamna Rishi, Megha Jain and Raveena Rao</p>
                    </div>
                </div>
                </div>
                <br />
                <br />

                <div className="projectRowOne">
                    <section className="leftHandSide">
                    <div className="box">
                        <h3 className="rowTitle">Problem</h3>
                        <b><p className="rowDescriptionLong">Higher institutions lack the accountability that Human Trafficking and Rape
                            related cases are consistently making women (and others) feel unsafe in society,
                            both in home and in public spaces. </p></b>
                        <p className="rowDescriptionLong">
                            <ol>
                                <li>Human trafficking cases lack equitable data recordings in comparison
                                    to other criminal cases, such as burglary.</li>
                                <br />
                                <li>The criminal justice system also lacks equal investigation qualities and
                                    motivation when crimes involve female-dominated victims.</li>
                                <br />
                                <li>Thousands of U.S rape cases are recorded and there has yet to be accountability
                                    to the perpetrators and liability to these victims, specifically women.</li></ol>
                        </p>
                        </div>
                    </section>
                    <section className="leftHandSide">
                    <div className="box">
                        <h3 className="rowTitle">Research</h3>
                        <p className="rowDescriptionLong"> Women feel safer in the actual or potential
                            presence of others because they assume that offenders will be deterred by the possibility of bystander intervention.
                            - Women's Fear and Design of Public Space</p>
                        <b><p className="rowDescriptionLong">61% of women regularly take steps to avoid being sexually assaulted - YouGov </p></b>

                        {/* <div className="researchImages"> */}
                        <div className="sidebyside">
                        <img className="researchPicture" src="tutelaPhotos/YouGov.jpeg" />
                        <img className="researchPicture"  src="/tutelaPhotos/Safety US - 3.jpeg" />
                        </div>
                        </div>
                        {/* </div> */}
                    </section>
                </div>
                <br />
                <h3 className="rowTitle">Personas</h3>
                <p className="rowDescriptionLong"> Two user persona's were created to further empathize with women identifying who could potnetially
                    need bystander intervention. Meet Hannah, a 21 year old college student who does not have a reliable
                    support system and oftentimes find herself walking alone. Meet Jennah, a 25 year old transgender woman
                    who wants to be more self sufficent and finds herself walking alone thoughout her daily errands.</p>
                <div className="projectPersona">
                    <img className="personaOne" src="tutelaPhotos/Hannah's User Persona.jpg" />
                    <img className="personaTwo" src="tutelaPhotos/Jenna's User Persona.png" />
                </div>

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
                            by implementing Connect to Alexa/Google Home feature </li></ol>
                </p>

                <br />
                <br />

                <h3 className="rowTitle">Main Features</h3>
                <br />
                <br />
                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">Easy Onboarding Process</h4>
                        <img className="featuredImage" src="/tutelaPhotos/onBoarding.png" />
                    </section>

                    <p className="rightfeatureDescription">We wanted to create an application that would offer users a way to connect with family
                        and friends when they can't connect with anyone and safety is compromised. Many women often fear walking or traveling alone,
                        our app allows users to share their location with desired contacts and play audio or video
                        recordings to provide companionship when users feel alone.</p>
                </div>

                <br />
                <br />

                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">Add a Phone/Voice Recording</h4>
                        <br />
                        <p className="featureDescription">We wanted to create an application that would offer users a way to connect with family
                            and friends when they can't connect with anyone and safety is compromised. Many women often fear walking or traveling alone,
                            our app allows users to share their location with desired contacts and play audio or video
                            recordings to provide companionship when users feel alone.</p>
                    </section>
                    <img className="longImage" src="/tutelaPhotos/createACall.png" />
                </div>

                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">View Saved Recordings</h4>
                        <img className="biggerfeaturedImage" src="/tutelaPhotos/addRecording.png" />
                    </section>
            
                    <p className="rightfeatureDescription">We wanted to create an application that would offer users a way to connect with family
                        and friends when they can't connect with anyone and safety is compromised. Many women often fear walking or traveling alone,
                        our app allows users to share their location with desired contacts and play audio or video
                        recordings to provide companionship when users feel alone.</p>
                </div>

                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">Location Services</h4>
                        <br />
                        <p className="featureDescription">We wanted to create an application that would offer users a way to connect with family
                            and friends when they can't connect with anyone and safety is compromised. Many women often fear walking or traveling alone,
                            our app allows users to share their location with desired contacts and play audio or video
                            recordings to provide companionship when users feel alone.</p>
                    </section>
                    <img className="longImage" src="/tutelaPhotos/locationServices.png" />
                </div>

                <div className="projectRowOne">
                    <section className="leftHandSide">
                        <h4 className="rowTitle">Pair with Alexa</h4>
                        <img className="biggerfeaturedImage" src="/tutelaPhotos/saveAlexa.png" />
                    </section>
                    <br />
                    <p className="rightfeatureDescription">We wanted to create an application that would offer users a way to connect with family
                        and friends when they can't connect with anyone and safety is compromised. Many women often fear walking or traveling alone,
                        our app allows users to share their location with desired contacts and play audio or video
                        recordings to provide companionship when users feel alone.</p>
                </div>

                <h3 className="centerTitle">Application won "Best Overall in WINFO's 9th Annual WINFO Hackathon"</h3>
                <div className="projectRowOne">
                    <section className="leftHandSide">
                    <br />
                        <img className="featuredImage" src="tutelaPhotos/WINFO9thHackathonWinningPoster.jpeg" />
                    </section>
           

                    <p className="featureDescription">We wanted to create an application that would offer users a way to connect with family
                        and friends when they can't connect with anyone and safety is compromised. Many women often fear walking or traveling alone,
                        our app allows users to share their location with desired contacts and play audio or video
                        recordings to provide companionship when users feel alone.
                        <p >View Featured iSchool News Article</p>
                        <br/>
                        </p>
                </div>
            </body>
        </div>
    )
};

export default Tutela;