
import './style.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, NavLink, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function RhetoricalAnalysis() {
    let state = null;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div >
            <body >
                <h1 className="rowTitle">the perfect moment</h1>
                <p className="rowDescription">examining how social media platforms rhetorically design time using Kairos</p>
                <div className="initialImages">
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col lg={9}>
                                <div>
                                    <Document
                                        file="/ThePerfectMoment.pdf"
                                        onLoadSuccess={onDocumentLoadSuccess}
                                    >
                                        <Page pageNumber={pageNumber} />
                                    </Document>

                                    <Row className="justify-content-md-center">
                                        <Col lg={3}>
                                            <p>Page {pageNumber} of {numPages}</p>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center">
                                        <Col lg={4}>
                                            <Link to="/ThePerfectMoment.pdf" target="_blank" download>
                                                <Button>download file</Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <br />

                <div className="projectRowOne">
                    <div className="box">
                        <br />
                        <br />
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col md lg={7}>
                                    <h2 className="rowTitle">Prompt Overview</h2>

                                    <p className="rowDescriptionLong"> Socioeconomic innequalities are still prevelant among
                                        many communities accross the United States. The long history of these innequalities has created
                                        collateral damage in the U.S educational system, where students in impoverished areas do not recieve
                                        equal amounts educational resources. Information systems to distribute these educational resources lack
                                        vital features to help their students long-term.
                                    </p>

                                    <p className="rowDescriptionLong">
                                        In our INFO442 Cooperative Software Development class, we created DiscoveryHub,
                                        a product to connect local organizations who offer tutoring and mentoring services
                                        to students within their community.
                                    </p>

                                    <b><p className="rowDescriptionLong">For students, by students. </p></b>
                                </Col>
                                <Col md lg={5}>
                                    <br />
                                    <h5 className="detail">Project Specifics  </h5>
                                    <p className="detail">  My Role: sole priter and presenter </p>
                                    <p className="detail">  Time Frame: 6 weeks (including a presentation)</p>
                                    <p className="detail">  Tools: Google Docs and Canva</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <br />
         


                <div className="projectRowOne">
                    <div className="box">
                        <h3 className="rowTitle">Planning</h3>
               
                            <Container>
                                <Row>
                                    <Col md lg={6}>
                                        <img className="novemberfeaturedImage" src="/november-2021-printable-calendar-1 2.jpg" />
                                    </Col>
                                    <Col md lg={6}>
                                        <img className="decemberfeaturedImage" src="/december-2021-calendar-1 2.jpg" />
                                    </Col>
                                </Row>
                            </Container>
        
                        <br />
                    </div>
                </div>

                <br />
                <div className="projectRowOne">
                    <div className="box">
                
                        <h3 className="rowTitle">Research Questions</h3>
                        <p className="rowDescriptionLong">
                        <ol>
                            <p>
                                <li>What is Kairos and why is it important within rhetoric?</li>
                                <li> How does Kairos affect digital rhetoric?</li>
                                <li>What is digital rhetoric and why is it important?</li>
                                <li>How can digital rhetoric amplify and silence different narratives in society?</li>
                                <li>How does digital rhetoric affect physical spaces for different audiences? (Comparing the impact on generational difference and racial differences) </li>
                            </p>
                        </ol>
                        </p>
                    </div>
                </div>
                <div className="projectRowOne">
                    <div className="box">
                    <br />
                        <h3 className="rowTitle">Artifacts + Archives Observed</h3>
                    
                        <p className="rowDescriptionLong">
                        <ol>
                            <li> Classical Usages of Kairos - I will examine how Kairos was viewed in the classical time period.
                                I will also examine Kairos in classical/historical pieces of rhetoric.
                                This will allow me to gain a better understanding of when/how Kairos was used before the internet.</li>
                            <li> Social Media - I will be examining different social media posts on platforms such as twitter,
                                Facebook and tik tok. This will allow me to look for patterns of rhetoric and if digital rhetoric
                                is stylistically changing as we progress to further adopt social media usage.</li>
                        </ol>
                        </p>
                    </div>
          
                </div>

                <div className="projectRowOne">
              
                    <h3 className="rowTitle">Key Takeaways</h3>
                    <Container>
                        <Row>
                    <ol>
                            <p>
                                <li>What is Kairos and why is it important within rhetoric?</li>
                                <li> How does Kairos affect digital rhetoric?</li>
                                <li>What is digital rhetoric and why is it important?</li>
                                <li>How can digital rhetoric amplify and silence different narratives in society?</li>
                                <li>How does digital rhetoric affect physical spaces for different audiences? (Comparing the impact on generational difference and racial differences) </li>
                            </p>
                        </ol>
                        </Row>
                    </Container>
                    <br />
                    <br />
                </div>
            </body>
        </div>
    )
};


export default RhetoricalAnalysis;