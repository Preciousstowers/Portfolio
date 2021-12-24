import './style.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown, Center, NavLink, Col, Row, Form, Offcanvas, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import { Tutela } from "./tutela.js";
import { Resume } from "./resume.js";
import { Grid } from "./grid.js";
import { DiscoveryHub } from "./DiscoverHub";
import { RhetoricalAnalysis } from "./rhetoricalAnalysis";
import {GridTutorial} from "./gridTutorial";


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
      <NavigationBar />
      <HamburgerMenu />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/aboutme" />
          <Route path="/Resume" element={<Resume />} />
          <Route path="Tutela" element={<Tutela />} />
          <Route path="grid" element={<Grid />} />
          <Route path="DiscoveryHub" element={<DiscoveryHub />} />
          <Route path="RhetoricalAnalysis" element={<RhetoricalAnalysis />} />
          <Route path="GridTutorial" element={<GridTutorial />} />

        </Routes>

        <footer className="footer">
          <br />
          <Row >
            <Col lg={4}>
              <p>Coded using HTML5/CSS3/Javascript with React framework and deployed on Google Firebase</p>
            </Col>

            <Col lg={4}>
              <Row className="justify-content-md-center">
                <p className="rowDescriptionLong">
                  <a href="mailto:Precious.Stowers2@gmail.com" className="LinkedInButton" >
                    <img className="linkedIn" src="/image 79.png" /></a>
                  <a href="https://www.linkedin.com/in/precious-jane-stowers-a2201119a/" target="_blank" className="LinkedInButton" >
                    <img className="linkedIn" src="/LI-In-Bug.png" /></a>
                  <a href="https://github.com/Preciousstowers" target="_blank" className="LinkedInButton" >
                    <img className="linkedIn" src="/GitHub-Mark-64px.png" /></a>
                  <a href="https://www.instagram.com/_preciousjane_/" target="_blank" className="LinkedInButton" >
                    <img className="linkedIn" src="/iglogo.png" /></a>
                </p>
              </Row>
            </Col>

            <Col lg={4}>
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
    <div className="normalNavBar">
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

function HamburgerMenu() {
  return (
    <div className="hamburgerNav">
    <Navbar bg="light" expand={false}>
  <Container fluid>
    {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
      // justify-Content="flex-end"
    >
      <Offcanvas.Header closeButton>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">About Me</Nav.Link>
          <Nav.Link href="#action2">Resume</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
</div>
  )
}

export default App;
