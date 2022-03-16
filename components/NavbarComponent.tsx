import React from "react";
import navbarStyles from "../styles/Navbar.module.scss";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"


function NavbarComponent() {
  return (
  <Navbar className={navbarStyles.bootstrap_navbar} collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
  <Container>
  <Navbar.Brand href="#main">Çetin Kaan Taşkıngenç</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#skills">Skills</Nav.Link>
      <NavDropdown title="Experience" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#experience">Professional Experience</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#volunteer">Volunteer Experience</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#certifications">Certifications</Nav.Link>
      <Nav.Link href="#workshops">Workshops</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#footer">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default NavbarComponent;
