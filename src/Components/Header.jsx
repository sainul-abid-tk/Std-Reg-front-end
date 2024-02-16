import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/" className="fw-bold fs-4">Education</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link className="fw-bold me-2" href="#home">Home</Nav.Link>
                <Nav.Link className="fw-bold me-2">Service</Nav.Link>
                <Nav.Link className="fw-bold me-2">About</Nav.Link>
                <Link to={'/allStudents'}><button className="btn btn-info me-3 ">All Students</button></Link>
                <Button>Login</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default Header