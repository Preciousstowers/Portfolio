
import './style.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, NavLink} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";
// import { BrowserRouter } from 'react-router-dom'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


import DesignAndWritting from './designAndWritting';




function App() {
  return (
    <div >
      <NavigationBar />
       <BrowserRouter>
        <Routes>
        <Route exact path="/"/>
          <Route path="/uxwrittinganddesign" element={ <DesignAndWritting />} />
          <Route path="/dataanalytics" />
          <Route path="/aboutme" />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

function NavigationBar() {
  return (
<div>
  <br />
  <Navbar className="navbar" >
  <Container>
  <NavLink href="/">Precious Stowers</NavLink>
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
      >
          <NavDropdown.Divider />
      </Nav>
      <NavLink href="/uxwrittinganddesign">UX Design/UX Writting</NavLink>
      <NavLink href="/dataanalytics">Data Analytics</NavLink>
      <NavLink href="/aboutme">About me</NavLink>
  </Container>
</Navbar>
</div>
  )
}

export default App;
