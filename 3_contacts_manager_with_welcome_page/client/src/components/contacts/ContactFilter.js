import React, { useRef, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import Form from 'react-bootstrap/Form';

const ContactFilter = () => {
    const filterText = useRef('');

    const contactContext = useContext(ContactContext);
    const { filterContacts, clearFilter } = contactContext;

    const handleChange = (e) => {
        // console.log(filterText.current.value);
        // console.log(e.target.value);
        if (filterText.current.value) {
            filterContacts(e.target.value);
        } else {
            clearFilter();
        }
    }

    return (
        <Form style={{ margin: '0.3rem'}}>
            <Form.Group>
                <Form.Control 
                    type="text" 
                    placeholder="Filter contacts..." 
                    name="text" 
                    ref={filterText} 
                    onChange={handleChange}
                />
            </Form.Group>
        </Form>
    )
}

export default ContactFilter;