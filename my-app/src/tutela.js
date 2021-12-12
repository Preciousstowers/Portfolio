
import './style.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, NavLink, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";

export function Tutela() {
    return (
        <div>
            <div className="projectTitle">
                <h1 className="rowTitle">tutela</h1>
                <p className="rowDescription">connecting together, safely</p>
            </div>
            <div className="initialImages">
                <img className="initialImageOne" src="tutelaPhotos/tutelaOnboardOne.png" />
                <img className="initialImageTwo" src="tutelaPhotos/tutelaMapTwo.png" />
                <img className="initialImageThree" src="tutelaPhotos/tutelaDashboard.png" />
            </div>
            <div className="projectRowOne">
                <div className="projectOverview">
                    <h2 className="rowTitle">Overview</h2>
                    <p className="rowDescription">  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="ProjectDetails">
                    <h3 className="rowTitle">Project Specifics</h3>
                    <h5 className="rowTitle">  My Role: Product Designer, Spokespearson  </h5>
                    <h5 className="rowTitle">  Team size: 4 total people</h5>
                    <h5 className="rowTitle">  Time Frame: ~30 Hours </h5>
                    <h5 className="rowTitle">  Tools: Figma, Canva</h5>
                    <h5 className="rowTitle">  Teammates: </h5>
                </div>
            </div>

            <h3 className="rowTitle">Problem</h3>
            <p className="rowDescriptionLong">In society, human trafficking cases lack equitable data recordings in comparison
                to other criminal cases, such as burglary. The criminal justice system also lacks
                equal investigation qualities and motivation when crimes involve female-dominated victims.
                Additionally, thousands of U.S rape cases are recorded and there has yet to be accountability
                to the perpetrators and liability to these victims, specifically women.</p>
            <b><p className="rowDescriptionLong">Higher institutions lack the accountability that Human Trafficking and Rape
                related cases are consistently making women (and others) feel unsafe in society,
                both in home and in public spaces. </p></b>

            <h3 className="rowTitle">Research</h3>
            <p className="rowDescriptionShort"> Women feel safer in the actual or potential 
            presence of others because they assume that offenders will be deterred by the possibility of bystander intervention.
                - Women's Fear and Design of Public Space</p>
                <b><p className="rowDescriptionShort">61% of women regularly take steps to avoid being sexually assaulted - YouGov </p></b>
            <img className="researchPicture"src="tutelaPhotos/YouGov.jpeg" />            <br />
            <h3 className="rowTitle">Personas</h3>
            <div className="projectPersona">
                <img className="personaOne" src="tutelaPhotos/Hannah's User Persona.jpg" />
                <img className="personaTwo" src="tutelaPhotos/Jenna's User Persona.png" />
            </div>
            <h3 className="rowTitle">Solution</h3>
            <p className="rowDescriptionLong">We wanted to create an application that would offer users a way to connect with family
                and friends when their safety is compromised. Many women often fear walking or traveling alone,
                so our app allows users to share their location with desired contacts and play audio or video
                recordings to provide companionship when users feel alone.</p>
            <h3 className="rowTitle">Main Features</h3>
            <h3 className="rowTitle">Award</h3>
            <img src="tutelaPhotos/WINFO9thHackathonWinningPoster.jpeg" />
        </div>
    )
};

export default Tutela;