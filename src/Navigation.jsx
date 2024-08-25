import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import sv from "./assets/sv.jpeg"

const Navigation = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand as={Link} to="/" className="mx-4 fw-bold p-3">
    <img src={sv} className="" style={{maxWidth:"100px"}}/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        {/* <Nav.Link as={Link} to="/donations">Donations</Nav.Link> */}
        {/* <Nav.Link as={Link} to="/blog">Blog</Nav.Link> */}
        {/* <Nav.Link as={Link} to="/subscribe">Subscribe</Nav.Link> */}
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/get">Get Involved</Nav.Link>
        <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
        <Nav.Link as={Link} to="/donate">Donate</Nav.Link>
        <Nav.Link as={Link} to="/pro">Program</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
