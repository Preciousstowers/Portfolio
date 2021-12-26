
import './style.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, NavLink, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";
import { Link } from "react-router-dom";

export function AboutMe() {
    return (
        <div >
            <body >
                <h1 className="rowTitle">I hope you are enjoying your stay!</h1>
                {/* <p className="rowDescription"> An easy and simple walkthrough to learn how to use Grid</p> */}
                <div className="initialImages">
                    <img className="initialImageOne" src="/tutorialPhotos/Frame 180.png" />
                </div>
                <br />
                <div className="aboutMeProjectRowOne">
                    <div className="box">
                        <h6>
                        I’m Precious a third year attending the University of Washington majoring in 
                        Informatics with a double concentration in Data Science and Human-Computer Interaction with a minor in writing. 
                        Being an Informatics major allows me to take the necessary string of tools to analyze complex intersections 
                        and weave together the perfect solution. My love of learning technical and non-technical skills inhibts 
                        me to be cross-functional and communicate key details among a variety of audiences and in a miltitude of scenarios. 
                        </h6>
                    </div>
                </div>

                <div className="aboutMeProjectRowTwo">
                    <div className="box">
                        {/* <h3 className="rowTitle">Grid Tutorial Selections</h3> */}
                        <h6 >
                        Outside of the classroom, you can find me trying out different local restaurants, 
                        coffee shops, journaling at your local park bench or re-watching marvel movies. 
                        </h6 >
                        <br />
                        <h6 >
                        Connect with me and reach out! 
                        <p >
                        <br />
                            <a href="mailto:Precious.Stowers2@gmail.com"  className="LinkedInButton" >
                                        <img className="linkedIn" src="/image 79.png" /></a>
                                    <a href="https://www.linkedin.com/in/precious-jane-stowers-a2201119a/" target="_blank" className="LinkedInButton" >
                                        <img className="linkedIn" src="/LI-In-Bug.png" /></a>
                                        <a href="https://github.com/Preciousstowers" target="_blank" className="LinkedInButton" >
                                        <img className="linkedIn" src="/GitHub-Mark-64px.png" /></a>
                                        <a href="https://www.instagram.com/_preciousjane_/" target="_blank" className="LinkedInButton" >
                                        <img className="linkedIn" src="/iglogo.png" /></a>
                                </p> 
                        </h6>
                    </div>
                </div>

                <center>
                    <Link exact to="/">
                        <button className="aboutMeButton">
                            back to homepage
                        </button>    
                    </Link>

                    <Link to="/PreciousStowers.pdf" target="_blank" download>
                        <button className="downloadResume">
                            download Resume
                        </button>
                    </Link>
                </center>
                <br />
            </body>
        </div>
    )
};

export default AboutMe;