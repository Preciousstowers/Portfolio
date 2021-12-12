
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
                <img className="initialImageOne" src="/tutelaOnboardOne.png" />
                <img className="initialImageTwo" src="/tutelaMapTwo.png" />
                <img className="initialImageThree" src="/tutelaDashboard.png" />
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
             </div>
            </div>
            
            <h3 className="rowTitle">Project Context</h3>

            <h3 className="rowTitle">Problem Statement</h3>

            <h3 className="rowTitle">Background</h3>

            <h3 className="rowTitle">Research</h3>
            
            <br/>
            <h3 className="rowTitle">Personas</h3>
            <div className="projectPersona">
            <img className="personaOne" src="/Hannah's User Persona.jpg" />
            <img className="personaTwo"src="/Jenna's User Persona.png" />
            </div>
            <h3 className="rowTitle">Main Features</h3>
            <h3 className="rowTitle">Award</h3>
            <img src="/WINFO9thHackathonWinningPoster.jpeg" />
        </div>
    )
};

export default Tutela;