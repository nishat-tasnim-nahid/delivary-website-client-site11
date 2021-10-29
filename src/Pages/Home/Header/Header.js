import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand to="/home">HEXA in ONE</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-start">
                    <NavLink className='link' to="/home">Home</NavLink>
                    <NavLink className='link' to="/items">Items</NavLink>
                    <NavLink className='link' to="/details">Details</NavLink>
                    <NavLink className='link' to="/aboutUs">About Us</NavLink>
                    {/* <span> {user?.displayName} </span>
                    {user?.email && <Button className='btn' onClick={logOut}>Log Out</Button>} */}
                    {user?.email ?
                        <Button onClick={logOut} variant="light">Logout</Button> :
                        <NavLink className='link' as={Link} to="/login">Login</NavLink>
                    }
                    <Navbar.Text>
                        Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;