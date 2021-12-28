
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
                            <Col md={12} lg={9}>
                                <div>
                                    <Document
                                        file="/ThePerfectMoment.pdf"
                                        onLoadSuccess={onDocumentLoadSuccess}
                                    >
                                        <Page pageNumber={pageNumber} />
                                    </Document>

                                    <Row className="justify-content-md-center">
                                        <Col lg={4.5}>
                                            <p>Page {pageNumber} of {numPages}</p>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center">
                                        <Col lg={4} xl={4}>
                                            <Link to="/ThePerfectMoment.pdf" target="_blank" download>
                                                <button className="rhetoricalButton">download</button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <div className="rAprojectRowOne">
                    <div className="box">
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col md={12} lg={7}>
                                    <h2 className="rowTitle">Prompt Overview</h2>

                                    <b><p>Rhetoric - goal-oriented communication</p></b>
                                    <b><p>Kairos - an opportune moment, the perfect moment </p></b>

                                    <p >
                                        Rhetoric can be seen and heard everywhere.
                                        Rhetoric can be the design of a chair for which the
                                        entirety of society agreed as humans that we should be sitting upright.
                                        Rhetoric can be seen as a stylistic choice, as if a car salesman was
                                        using a tone to try to convince their customer to purchase the car.
                                        Rhetoric can be seen within the words themselves such as if politicians
                                        speaking their opinions to gain a reaction from their audience.
                                    </p>

                                    <p>
                                        All these examples have a commonality of using communication to
                                        enforce an intended goal  from the rhetor.

                                    </p>
                                    <p>
                                        In my ENGL306 Introduction to Rhetoric class, I researched how an
                                        ancient greek word called Kairos, helps describe how social media
                                        platforms rhetorically design their platforms to fit the perfect timing.
                                        Over ~4 weeks I learned that social media platforms using time is a
                                        powerful tool because it is indivisible. Along with digital rhetoric
                                        created by users of the platform and other various interaction designs,
                                        social media companies design their platforms to create continuously active
                                        perfect moments for users to interact with their platform.


                                    </p>


                                </Col>
                                <Col md={12}  lg={5}>
                                    <br />
                                    <h5 className="detail">Project Specifics  </h5>
                                    <p className="detail">  My Role: sole writer and presenter </p>
                                    <p className="detail">  Time Frame: 4 weeks (including a presentation)</p>
                                    <p className="detail">  Tools: Google Docs and Canva</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>




                <div className="rAprojectRowTwo">
                    <div className="box">
                        <h3 className="rowTitle">Planning</h3>
                        <p>
                            I divided my 4-5 weeks into various task sprints that include
                            researching information about classical greek history and methodologies,
                            examining social media design as a rhetorical artifact, writing the
                            “standard version” draft of my paper, researching editorial designs and
                            applying the editorial design to the final of my draft.

                        </p>
                        <Container>
                            <Row>
                                <Col md lg={6} xl={6}>
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


                <div className="rAprojectRowOne ">
                    <div className="box">
                        <h3 className="rowTitle">Research Questions</h3>
                        <p >
                            <ol>
                                {/* <p> */}
                                    <li>What is Kairos and why is it important within rhetoric?</li>
                                    <li> How does Kairos affect digital rhetoric?</li>
                                    <li>What is digital rhetoric and why is it important?</li>
                                    <li>How can digital rhetoric amplify and silence different narratives in society?</li>
                                    <li>How does digital rhetoric affect physical spaces for different audiences? (Comparing the impact on generational difference and racial differences) </li>
                                {/* </p> */}
                            </ol>
                        </p>
                    </div>
                </div>

                <div className="rAprojectRowTwo">
                    <div className="box">
                        <br />
                        <h3 className="rowTitle">Artifacts + Archives Observed</h3>
                        <p >
                            <ol>
                                <li>Classical Usages of Kairos - I examined how Kairos was viewed in the classical time period. I also examined
                                    Kairos within in classical/historical pieces of rhetoric throughout history. This will allow me to gain a
                                    better understanding of when/how Kairos was used before the digital age</li>
                                <li>Social Media - I examined different social media posts on platforms such as twitter, Facebook and
                                    tik tok. This will allow me to look for patterns of rhetoric and if digital rhetoric and/or UX/UI
                                    design is stylistically changing as we progress to further adopt social media usage</li>
                            </ol>
                        </p>
                        <br />
                    </div>
                </div>


                <div className="rAprojectRowOne ">
                    <div className="box">
                        <h3 className="rowTitle">Key Findings</h3>
                        <p >
                        </p>
                        <ol>
                            <Container>
                                <Row className="justify-content-md-center">
                                <Container>
                                    <Row className="justify-content-md-center">
                                        <Col md lg={4}>
                                        <li><p>Gorgias, a famous rhetor in Ancient Greece, was known for his teachings and usage of Kairos. 
                                            He discovered that Kairos was a key aspect to discourse because it allows two contrasting 
                                            idea to be met at one point in time before an audience’s decision is made and/or before an opinion is formed
                                            </p></li>
                                        </Col>
                                        <Col md lg={4}>
                                        <li> <p>Digital rhetoric takes all previous stylistic forms of rhetoric and adds the 
                                            following styles: interactivity, speed, anonymity and Kairos (time)</p></li>
                                        </Col>
                                        <Col md lg={4}>
                                        <li><p>Potential “dark patterns” can be observed within styling platforms based on time,
                                             such consistently disrupting the user in the physical space to address the digital space 
                                             or making the user take various more steps to reach their goal on the platform than necessary</p></li> 
                                        </Col>
                                    </Row>
                                </Container> 
                                </Row>
                            </Container>
                        </ol>
                        <br />
                    </div>
                </div>

                <div className="rAprojectRowTwo">
                    <div className="box">
                        <br />
                        <h3 className="rowTitle">Textography: first vs. final draft</h3>
                        <p >
                        </p>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs md lg={3} xl={4}>
                                    <p >
                                        <ol>
                                            <br />
                                            <b><li> Styled columns to resemble a magazine/editorial </li></b>
                                            <br />
                                            <b> <li> Styled font and font weight throughout the paper </li></b>
                                            <br />
                                            <b> <li> Styled content divisions based on the information of each section </li></b>
                                        </ol>
                                    </p>
                                </Col>
                                <Col lg={9} xl={8}>
                                    <img className="featuredImage" src="/rhetoricalPaper.png" />
                                </Col>
                            </Row>
                        </Container>
                        <br />
                    </div>
                </div>

                <div >
                    <div className="box">
                        <br />
                        <h3 className="rowTitle">Key Takeaways</h3>
                        <p>
                        </p>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col md lg={7}>
                                    <p >Time-sensitive design - A key aspect of my learning is understanding more about time-sensitive design.
                                        The idea of time existing and a whole culture has adapted to creating their whole life around time
                                        I think is absolutely fascinating. Incorporating how time can affect and/or alter this time was a topic that I enjoyed researching.
                                        This is genuinely one of my favorite pieces that I have completed within undergrad. </p>
                                    <p > Designing Language - If I had more time or the opportunity to revise my final draft,
                                        I would change the language of my paper to fit an editorial context rather than a
                                        standard english paper. This would include researching how magazines/editorials are
                                        written to imitate the tone as if my piece was in a published magazine. </p>
                                </Col>
                                <Col md lg={6} xl={5}>
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
                        <button className="rhetoricalButton">
                            back to homepage
                        </button>
                    </Link>
                </center>
                <br />

            </body>
        </div>
    )
};


export default RhetoricalAnalysis;