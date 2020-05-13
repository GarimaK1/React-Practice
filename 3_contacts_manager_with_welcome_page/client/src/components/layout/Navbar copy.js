import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import AuthContext from "../../context/auth/authContext";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

const MyNavbar = ({ myTitle, iconProp }) => { //props.title, props.icon

    const authContext = useContext(AuthContext);
    const { isAuthenticated, user, logout } = authContext;

    const handleLogout = () => {
        logout();
    }

    const guestLinks = (
        <Fragment>
            <Nav>
                <Link to="/register" className="nav-link">
                    Register
                </Link>
            </Nav>
            <Nav>
                <Link to="/login" className="nav-link">
                    Login
                </Link>
            </Nav>
        </Fragment>
    );

    const authLinks = (
        <Fragment> 
            <Navbar.Text>Hello</Navbar.Text>
            {user && <Navbar.Text>, {user && user.name}!</Navbar.Text>}
           
            <Nav>
                <Link to="#" onClick={handleLogout} className="nav-link">
                    Logout
                </Link>
            </Nav>
        </Fragment>
    );

    return (
        <Navbar bg="dark" variant="dark" expand="sm" >
            <Link to="/">
                <Navbar.Brand>
                    <i className={iconProp}></i>   {myTitle}
                </Navbar.Brand>
            </Link>
            <Nav>
                <Link to="/about" className="nav-link">
                    About Us
                </Link>
            </Nav>
            {isAuthenticated ? authLinks : guestLinks}
        </Navbar>
    )
}
MyNavbar.propTypes = {
    myTitle: PropTypes.string.isRequired,
    iconProp: PropTypes.string
};

MyNavbar.defaultProps = {
    myTitle: 'Contacts Manager',
    iconProp: 'far fa-address-book' // <i class="far fa-address-book"></i>
};

export default MyNavbar;
