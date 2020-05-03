import React, { Fragment, useState, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Event Handlers in React using Example:
{/* <input type="text" onChange={handleChange} /> */}
/* The handleChange function is an event handler.
The event that the handler receives as a parameter is an object that contains a target field.
This target is the DOM element that the event handler is bound to(here, the text input field).
By accessing this field, we can determine what the target's value is changed to.
function handleChange(e) {
    console.log("new value", e.target.value);
} */

const ContactForm = () => {

    const contactContext = useContext(ContactContext);

    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email: '',
        type: 'personal'
    });

    const { name, phone, email, type } = contact;

    const handleChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
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
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="email" placeholder="Email" name='email' value={email} onChange={handleChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="text" placeholder="Phone" name='phone' value={phone} onChange={handleChange}/>
                </Form.Group>
                <Form.Label>Contact Type:</Form.Label>
                <Form.Group>    
                    <Form.Check inline
                        type='radio'
                        value='Personal'
                        label="Personal"
                        name='type'
                        checked={type === 'personal'}
                        onChange={handleChange}
                    />
                    <Form.Check inline
                        type='radio'
                        value='Professional'
                        label="Professional"
                        name='type'
                        checked={type === 'professional'}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="dark" type="submit" block>
                    Add Contact
                </Button>
            </Form>
        </Fragment>
    )
}

export default ContactForm;