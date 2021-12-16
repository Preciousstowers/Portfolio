import './style.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown, Center, NavLink, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import {Tutela} from "./tutela.js";
import {Resume} from "./resume.js";
import {Grid} from "./grid.js";


// import { BrowserRouter } from 'react-router-dom'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Homepage from './homepage';
// import DesignAndWritting from './designAndWritting';




function App() {
  return (
    <div >
      <NavigationBar/>
       <BrowserRouter>
        <Routes>
        <Route exact path="/" element={ <Homepage />} />
          {/* <Route path="/uxwrittinganddesign" element={ <DesignAndWritting />} /> */}
          {/* <Route path="/dataanalytics" /> */}
          <Route path="/aboutme" />
          <Route path="/Resume" element={<Resume />}/>
          <Route path="Tutela" element={<Tutela />} />
          <Route path="grid" element={<Grid />} />
          <Route path="DiscoveryHub" />
          <Route path="Humble" />

        </Routes>
        
        <footer className="footer">
        <br />
          <Row>
            <Col>
            <p>I coded this using HTML/CSS/Javascript and React framework</p>
            </Col>

            <Col>
            <a href="https://www.linkedin.com/in/precious-jane-stowers-a2201119a/" target="_blank" className="LinkedInButton" >
               <img className="linkedIn" src="/LI-In-Bug.png"/>
               </a>
            </Col>

            <Col>
            <p>View my Resume</p>
            </Col>  
              </Row>
        </footer>
    </BrowserRouter>
   
    </div>
  );
}

function NavigationBar() {
  return (
<div>
  <Navbar className="navbar" >
  <Container>
  <NavLink href="/">Precious Stowers</NavLink>
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
      >
          <NavDropdown.Divider />
      </Nav>
      {/* <NavLink href="/uxwrittinganddesign">UX/UI Design and Writing</NavLink> */}
      {/* <NavLink href="/dataanalytics">Data Analytics</NavLink> */}
      <NavLink href="/aboutme">About me</NavLink>
      <NavLink href="/Resume">Resume</NavLink>
  </Container>
</Navbar>
</div>
  )
}

export default App;
