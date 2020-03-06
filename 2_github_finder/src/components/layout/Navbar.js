import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';

const MyNavbar = ({ iconProp, myTitle }) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"><i className={iconProp}></i>{myTitle}</Navbar.Brand>
        </Navbar>
    );
}

MyNavbar.defaultProps = {
    myTitle: 'Github Finder',
    iconProp: 'fab fa-github'
}
MyNavbar.propTypes = {
    myTitle: PropTypes.string.isRequired,
    iconProp: PropTypes.string.isRequired
}

export default MyNavbar;