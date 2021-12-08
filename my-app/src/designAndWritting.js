import './style.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route, Link} from "react-router-dom";

import { Switch } from "react-router";


export function DesignAndWritting() {
    return (
        <div>
             <div className="rowTitle"> 
                <h4 className="rowTitle">UX Design</h4>
                </div>
            <section className="homepageDesignWork">
                {/* <section className="homepageRow"> */}
                <Link className="cardLink" to="/Tutela">
                    <Card className="homepageCard" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="pablita-881.png" />
                        <Card.Body>
                            <Card.Title>Meet Tutela</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Link>
                    <Link className="cardLink" to="/Grid">
                    <Card className="homepageCard" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="pablita-881.png" />
                        <Card.Body>
                            <Card.Title>Meet Grid</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Link>
                    <Card className="homepageCard" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="pablita-881.png" />
                        <Card.Body>
                            <Card.Title>Meet DiscoveryHub</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="homepageCard" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="pablita-881.png" />
                        <Card.Body>
                            <Card.Title>Meet Humble</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </section>
                <div className="rowTitle"> 
                <h4 className="rowTitle">Writting</h4>
                </div>
        </div>
    )
};

export default DesignAndWritting;