import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import logo from "../logo.png"

const NavbarComponent = () => {
    return (
            <Navbar bg="dark" expand="lg">
        <Container>
            <Navbar.Brand href="/"><img src={logo} alt="logo..." className="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                <Nav.Link className="nav-link" href="/">About us</Nav.Link>
                <Nav.Link className="nav-link" href="/">Services</Nav.Link>
                <Nav.Link className="nav-link" href="/">expercience</Nav.Link>
                <Nav.Link className="nav-link" href="/">Portfolio</Nav.Link>
                <Nav.Link className="nav-link" href="/">Contacts</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavbarComponent;
