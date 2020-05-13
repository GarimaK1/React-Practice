import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

const MyNavbar = ({ myTitle, iconProp }) => { //props.title, props.icon

    const authContext = useContext(AuthContext);
    const contactContext = useContext(ContactContext);

    const { isAuthenticated, user, logout } = authContext;
    const { clearContacts } = contactContext;

    const handleLogout = () => {
        logout();
        clearContacts();
    }

    const guestLinks = (
        <div className="d-flex justify-content-end flex-fill"> 
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
            <Nav>
                <Link to="/about" className="nav-link">
                    About Us
                </Link>
            </Nav>
        </div>
    );

    const authLinks = (
        <div className="d-flex justify-content-end flex-grow-1"> 
            <Navbar.Text className="pl-2">Hello</Navbar.Text>
            {user && <Navbar.Text className="pr-2">, {user && user.name}!</Navbar.Text>}
           
            <Nav>
                <Link to="/app" className="nav-link">
                    My Contacts
                </Link>
            </Nav>
            <Nav>
                <Link to="/about" className="nav-link">
                    About Us
                </Link>
            </Nav>
            <Nav>
                <Link to="#" onClick={handleLogout} className="nav-link">
                    Logout
                </Link>
            </Nav>
        </div>
    );

    return (
        <Navbar bg="dark" variant="dark" expand="sm" >
            <Link to="/">
                <Navbar.Brand>
                    <i className={iconProp}></i>   {myTitle}
                </Navbar.Brand>
            </Link>
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
