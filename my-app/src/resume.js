import './style.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

import { Switch } from "react-router";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }



  return (
    <Container>
      <h1 className="rowTitle">Resume</h1>
      <p className="rowDescription">Take a look at my expirence!</p>
      <Row className="justify-content-md-center">
        <Col lg={6}>
          <img className="ResumePicture" src="/Screen Shot 2022-03-29 at 4.25.18 PM.png" />
          <br />
        </Col>
      </Row >
      <center>
        <Container>
          <Row className="justify-content-md-center">
              <Link to="/PreciousStowersResume.pdf" target="_blank" download>
                <button className="gridButton">
                  download resume
                </button>
              </Link>
          </Row >
        </Container>
      </center>
    </Container>
  )
};

export default Resume;