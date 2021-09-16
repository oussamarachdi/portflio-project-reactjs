import React, { useEffect, useState } from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap'
import logo from "../logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

const NavbarComponent = () => {
    return (
            <Navbar bg="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home"><img src={logo} alt="logo..." className="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
                <Nav.Link className="nav-link" href="#home">About us</Nav.Link>
                <Nav.Link className="nav-link" href="#home">Portfolio</Nav.Link>
                <Nav.Link className="nav-link" href="#home">Contacts</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavbarComponent;
