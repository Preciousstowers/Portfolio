
import './style.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, NavLink, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";
import {
    Link
  } from "react-router-dom";
import SimpleReactFooter from "simple-react-footer";


export function Homepage() {
    const description = "Coded using HTML/CSS/Javascript and React";
    const columns = [
      {
          title: "Visit",
          resources: [
              {
                  name: "Locations",
                  link: "/locations"
              },
              {
                  name: "Culture",
                  link: "/culture"
              }
          ]
      }
   ];
    return (
        <div>
            <div className="homepageContainer">
            <section className="homepageMe">
            <div className="rowTitle"> 
            <h4 className="rowTitle">Welcome, make yourself at home</h4>
            </div>
            <div className="paragraphText">
            <p>
                I'm glad you're here! I'm Precious, a third year at the University of Washington majoring in 
                Informatics with a double concentration in Data Science and Human-Computer Interaction
                with a minor in writting. I enjoy communicating intersections that lack the clear bridges that connect 
                people to the solutions they need. 
            </p>
            <p>
                Whether that be analyzing data to discover new insights, to designing solutions to help current day problems, 
                or writting solutions to increase system transparency, I want to be contributing to the solution. 
            </p>
            <p>
               So take your time and look around. It's cold outside anyway. 
            </p>
            <p>
               Other Links:
            </p>
            </div>
            </section>

            <div className="rowTitle"> 
                <h4 className="rowTitle">UX Design and Writing</h4>
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
                <h4 className="rowTitle">Data Analytics</h4>
                </div>
                <section className="homepageDataWork">
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
                    {/* </section> */}
                </section>
            </div>
            <SimpleReactFooter 
            description={description} 
            columns={columns}
            copyright="black"
            iconColor="black"
            backgroundColor="white"
            fontColor="black"
            copyrightColor="darkgrey"
            />
        </div>
    )
};

export default Homepage;