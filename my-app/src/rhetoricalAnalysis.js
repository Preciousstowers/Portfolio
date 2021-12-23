
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
                                <li>Classical Usages of Kairos - I will examine how Kairos was viewed in the classical time period.
                                    I will also examine Kairos in classical/historical pieces of rhetoric.
                                    This will allow me to gain a better understanding of when/how Kairos was used before the internet.</li>
                                <li>Social Media - I will be examining different social media posts on platforms such as twitter,
                                    Facebook and tik tok. This will allow me to look for patterns of rhetoric and if digital rhetoric
                                    is stylistically changing as we progress to further adopt social media usage.</li>
                            </ol>
                        </p>
                        <br />
                    </div>
                </div>
                <br />

                <div className="projectRowOne">
                    <div className="box">

                        <h3 className="rowTitle">Key Findings</h3>

                        <p className="rowDescriptionLong">
                        </p>
                        <ol>
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col md lg={4}>
                                        <li><b>  Provides information</b>  about accessibility features about indoor buildings, outdoor architecture and on travel paths </li>
                                    </Col>
                                    <Col md lg={4}>
                                        <li><b> Empowers users </b> who identify having a mobility disability by reassuring self-sufficiency through
                                            understanding current accesibility features for future travels </li>
                                    </Col>
                                    <Col md lg={4}>
                                        <li> <b> De-stigmatizes conversations </b> about disabilities and accesibility features in society </li>
                                    </Col>
                                </Row>
                            </Container>
                        </ol>
                        <br />
                    </div>
                </div>

                <div className="projectRowOne">
                    <div className="box">
                        <br />
                        <h3 className="rowTitle">Styling Text</h3>
                        <p className="rowDescriptionLong">
                        </p>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs md lg={3}>
                                    <p className="rowDescriptionLong">
                                        From our initial iteration to our final product, we
                                        changed:
                                        <ol>
                                            <br />
                                            <b><li> changed the color scheme/UI</li></b>
                                            <br />
                                            <b> <li> changed the centrality of information</li></b>
                                            <br />
                                            <b> <li> included optional flagging of misinformation</li></b>
                                        </ol>
                                    </p>
                                </Col>
                                <Col lg={9}>
                                    <img className="featuredImage" src="/rhetoricalPaper.png" />
                                </Col>
                            </Row>
                        </Container>
                        <br />
                    </div>
                </div>

                <div className="projectRowOne">
                    <div className="box">
                        <br />
                        <h3 className="rowTitle">Key Takeaways</h3>
                        <p className="rowDescriptionLong">
                        </p>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col md lg={6}>
                                    <p className="rowDescriptionLong"> The usage of Language</p>
                                    <p className="rowDescriptionLong"> If I had more time, I would changed the language of my paper to fit
                                        the editorial design rather than a straight copy/paste.</p>
                                </Col>
                                <Col md lg={6}>
                                    <img className="featuredImage" src="/A4 Portrait.png" />
                                </Col>
                            </Row>
                        </Container>
                        <br />
                    </div>
                </div>

                <center>
                    <br />
                    <Link exact to="/">
                        back to homepage
                    </Link>
                </center>
                <br />
            </body>
        </div>
    )
};


export default RhetoricalAnalysis;