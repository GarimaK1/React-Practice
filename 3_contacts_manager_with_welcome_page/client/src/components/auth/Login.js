import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Login = (props) => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);
    
    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            // if user is already authenticted, don't show login. Redirect to Home page '/'.
            props.history.push('/app');
        }
        if (error === 'Invalid credentials!') {
            setAlert(error, 'danger');
            clearErrors();
        } else if (error) {
            setAlert(error, 'danger');
            clearErrors();
        }
        // because we don't want to add clearErrors, setAlert as dependencies.
        // eslint-disable-next-line 
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const handleChange = (evt) => {
        setUser({ ...user, [evt.target.name]: evt.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setAlert('Please enter all fields', 'danger');
        } else {
            login({ 
                email, 
                password 
            });
        }
    }

    return (
        <Container >
            <Row>
                <Col sm={10} md={6} xl={4} style={{ margin: 'auto' }}>
                    <h3 style={{ textAlign: 'center' }}>Login User</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Control 
                                type="email" 
                                placeholder="Email" 
                                name='email' 
                                value={email} 
                                onChange={handleChange} 
                                required 
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name='password'
                                value={password}
                                onChange={handleChange}
                                required
                                minLength="4"
                            />
                        </Form.Group>
                        <Button variant="dark" type="submit" block>
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;