import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

const MyNavbar = ({ myTitle, iconProp }) => { //props.title, props.icon
    return (
        <Navbar bg="dark" variant="dark" expand="sm" >
            {/* <Link to="/"> */}
                <Navbar.Brand>
                    <i className={iconProp}></i> {myTitle}
                </Navbar.Brand>
            {/* </Link> */}
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
