import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Register = () => {
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = user;

    const handleChange = (evt) => {
        setUser({ ...user, [evt.target.name]: evt.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(password);
        console.log(password2);
        if (name === '' || email === '' || password === '') {
            setAlert('Please enter all fields', 'danger');
        } else if (password !== password2) {
            console.log('here');
            setAlert('Password entries do not match', 'danger');
        } else {
            console.log('inside handlesubmit');
        }
    }

    return (
        <Container >
            <Row>
                <Col sm={10} md={6} xl={4} style={{ margin: 'auto'}}>
                    <h3 style={{ textAlign: 'center' }}>Register User</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            {/* <Form.Label>Enter Name:</Form.Label> */}
                            <Form.Control 
                            type="text" 
                            // size="sm" 
                            placeholder="Name" 
                            name="name" 
                            value={name} 
                            onChange={handleChange} 
                            required 
                        />
                        </Form.Group>
                        <Form.Group>
                            {/* <Form.Label>Enter Email:</Form.Label> */}
                            <Form.Control 
                                type="email" 
                                // size="sm" 
                                placeholder="Email" 
                                name='email' 
                                value={email} 
                                onChange={handleChange} 
                                required 
                            />
                        </Form.Group>
                        <Form.Group>
                            {/* <Form.Label>Enter Password:</Form.Label> */}
                            <Form.Control
                                // size="sm"
                                type="password"
                                placeholder="Password"
                                name='password'
                                value={password}
                                onChange={handleChange}
                                required
                                minLength="4"
                            />
                        </Form.Group>
                        <Form.Group>
                            {/* <Form.Label>Confirm Password:</Form.Label> */}
                            <Form.Control
                                // size="sm"
                                type="password"
                                placeholder="Confirm Password"
                                name='password2'
                                value={password2}
                                onChange={handleChange}
                                required
                                minLength="4"
                            />
                        </Form.Group>
                        <Button variant="dark" type="submit" block>
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Register;