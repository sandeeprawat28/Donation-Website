import React from 'react'
import './Header.css'
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
        <ReactBootStrap.Navbar expand="lg" className="header">
            <ReactBootStrap.Navbar.Brand as={Link} className='header-text' to="/">
             <h2 className="logo"> Animal Welfare </h2>
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
            <ReactBootStrap.Navbar.Collapse id="navbarScroll">
            <ReactBootStrap.Nav
                className="mr-auto my-2 my-lg-0 header-text"
                style={{ maxHeight: "100px" }}
              >
                <ReactBootStrap.Nav.Link as={Link} to="/">
                  Home
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
              <ReactBootStrap.Nav
                className="mr-auto my-2 my-lg-0 header-text"
                style={{ maxHeight: "100px" }}
              >
                <ReactBootStrap.Nav.Link as={Link} to="/about">
                  About
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
              <ReactBootStrap.Nav
                className="mr-auto my-2 my-lg-0 header-text"
                style={{ maxHeight: "100px" }}
              >
                <ReactBootStrap.Nav.Link as={Link} to="/donation">
                  Donation
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
              <ReactBootStrap.Nav
                className="mr-auto my-2 my-lg-0 header-text"
                style={{ maxHeight: "100px" }}
              >
                <ReactBootStrap.Nav.Link as={Link} to="/contact">
                  Contact
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    </div>
  )
}

export default Home