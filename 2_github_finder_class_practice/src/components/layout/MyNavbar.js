import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class MyNavbar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" style={{ marginBottom: '1rem'}}>
                <Navbar.Brand href="/">Github Finder</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Users</Nav.Link>
                    <Nav.Link href="/about">AboutUs</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default MyNavbar;