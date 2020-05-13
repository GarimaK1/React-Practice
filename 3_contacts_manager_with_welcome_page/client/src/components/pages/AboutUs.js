import React from 'react';
import Container from 'react-bootstrap/Container';

const AboutUs = () => {
    return (
        <Container style={{ textAlign: 'center' }}>
            <h3>About Contacts Manager</h3>
            <p>It is a MERN stack application where users can add/edit/delete contacts.</p>
            <p>Users can only view or modify their own contacts.</p>
        </Container>
    )
}

export default AboutUs;