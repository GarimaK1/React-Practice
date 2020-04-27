import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from "../contacts/ContactForm";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <Container fluid>
            <ContactForm />
            
            <Row style={{ justifyContent: 'center' }}>
                <Contacts />
            </Row>
        </Container>
    )
}

export default Home;