import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand to="/home">HEXA in ONE</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-start">
                    <NavLink className='link' to="/home">Home</NavLink>
                    <NavLink className='link' to="/items">Items</NavLink>
                    <NavLink className='link' to="/details">Details</NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;