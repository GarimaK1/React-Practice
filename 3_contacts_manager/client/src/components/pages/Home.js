import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from "../contacts/ContactForm";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <Container fluid >            
            <Row >
                <Col >
                    <ContactForm />
                </Col>
                <Col >
                    <Contacts />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;