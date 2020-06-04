import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavMain.css';

class NavMain extends Component {
    
    render() {
        return (
            <Navbar bg="dark" variant='dark' expand="lg" id='center-navbar'>
                <Navbar.Brand href="#home">Ivan Jutamulia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about-me">About Me</Nav.Link>
                    <Nav.Link href="#work">Work</Nav.Link>
                    <Nav.Link href="#education">Education</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}

export default NavMain;