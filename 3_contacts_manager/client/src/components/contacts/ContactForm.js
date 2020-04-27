import React, { Fragment, useState, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {

    const contactContext = useContext(ContactContext);

    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email: '',
        type: 'personal'
    });

    const { name, phone, email, type } = contact;

    const onChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        contactContext.addContact(contact);
        setContact({
            name: '',
            phone: '',
            email: '',
            type: 'personal'
        });
    }

    return (
        <Fragment>
            <h3>Add Contact</h3>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={onChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="email" placeholder="Email" name='email' value={email} onChange={onChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="text" placeholder="Phone" name='phone' value={phone} onChange={onChange}/>
                </Form.Group>
                <Form.Label>Contact Type:</Form.Label>
                <Form.Group>    
                    <Form.Check inline
                        type='radio'
                        value='Personal'
                        label="Personal"
                        name='type'
                    />
                    <Form.Check inline
                        type='radio'
                        value='Professional'
                        label="Professional"
                        name='type'
                    />
                </Form.Group>
                <Button variant="primary" type="submit" size="sm">
                    Submit
                </Button>
            </Form>
        </Fragment>
    )
}

export default ContactForm;