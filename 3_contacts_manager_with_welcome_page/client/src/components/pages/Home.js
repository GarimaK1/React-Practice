import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import Contacts from '../contacts/Contacts';
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    const authContext = useContext(AuthContext);
    const { loadUser } = authContext;

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        <Container fluid >
            <Row >
                <Col >
                    <ContactForm />
                </Col>
                <Col >
                    <ContactFilter />
                    <Contacts />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;