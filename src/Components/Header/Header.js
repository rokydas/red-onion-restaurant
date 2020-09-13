import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo2.png';

const Header = () => {
    return (
        <div className="header">
            <Navbar bg="white" expand="lg">
                <Navbar.Brand href="/"><img width="100px" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>Login</Navbar.Text>
                    <Navbar.Text>Sign Up</Navbar.Text>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Header;