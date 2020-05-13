import React, { Fragment, useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import AlertContext from '../../context/alert/alertContext';
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
    const { addContact, current, clearCurrent, updateContact, error, clearErrors } = contactContext;

    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email: '',
        type: 'personal'
    });

    useEffect(() => {
        if (current) {
            setContact(current);
        } else {
            setContact({
                name: '',
                phone: '',
                email: '',
                type: 'personal'
            });
        }
        if (error) {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line 
    }, [error, current, contactContext]);

    const { name, phone, email, type } = contact;

    const handleChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (current) {
            updateContact(contact);
            clearCurrent();
        } else {
            addContact(contact);
        }
    }

    const handleClearAll = () => {
        clearCurrent();
    }
 
    return (
        <Fragment>
            <h3>{current ? 'Edit Contact' : 'Add Contact'}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="email" placeholder="Email" name='email' value={email} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="tel" placeholder="Phone" name='phone' value={phone} pattern="^[1-9]\d{2}-[1-9]\d{2}-\d{4}$" onChange={handleChange} />
                    <Form.Text className="text-muted">
                        Phone format: 999-999-9999
                    </Form.Text>
                </Form.Group>
                <Form.Label>Contact Type:</Form.Label>
                <Form.Group>    
                    <Form.Check inline
                        type='radio'
                        value='personal'
                        label="Personal"
                        name='type'
                        checked={type === 'personal'}
                        onChange={handleChange}
                    />
                    <Form.Check inline
                        type='radio'
                        value='professional'
                        label="Professional"
                        name='type'
                        checked={type === 'professional'}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="dark" type="submit" size="sm" block>
                    {current ? 'Update Contact' : 'Add Contact' }
                </Button>
                {current && <Button variant="light" type="button" size="sm" block onClick={handleClearAll}>
                    Clear Fields
                </Button>}
            </Form>
        </Fragment>
    )
}

export default ContactForm;