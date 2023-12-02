import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'



function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Duffey Family Home Page</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/AboutMichael">About Michael</Nav.Link>
          <Nav.Link as={Link} to="/AboutAlma">About Alma</Nav.Link>
          <Nav.Link as={Link} to="/AboutBabyDuffey">About Baby Duffey</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;