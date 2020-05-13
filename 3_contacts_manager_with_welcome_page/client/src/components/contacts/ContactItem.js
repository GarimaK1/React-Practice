import React, { useContext } from 'react';
import ContactContext from "../../context/contact/contactContext";
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => { // props.contact

    const { _id, name, email, phone, type } = contact;
    
    const contactContext = useContext(ContactContext);
    const { deleteContact, setCurrent, clearCurrent } = contactContext;

    const handleDelete = () => {
        // console.log('Inside delete, ' + id);
        deleteContact(_id);
        clearCurrent();
    }

    return (
        <Card
            bg="light"
            style={{  margin: '0.3rem' }}
        >
            <Card.Body style={{ padding: '0.75rem' }}>
                <Card.Title >
                    {name}{' '}
                    <h6 style={{ float: "right"}} >
                        <Badge pill variant={type === 'professional' ? 'success' : 'secondary'}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </Badge>
                    </h6>
                </Card.Title>
                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                    {email && (<li>
                        <i className="fas fa-envelope" /> {email}
                    </li>)}
                    {phone && (<li>
                        <i className="fas fa-phone" /> {phone}
                    </li>)}
                </ul>
                <Button 
                    variant="dark" 
                    size="sm" 
                    style={{ width: '4rem' }} 
                    onClick={() => setCurrent(contact)}
                >
                        Edit
                </Button>
                <span>{' '}</span>
                <Button 
                    variant="danger" 
                    size="sm" 
                    style={{ width: '4rem' }} 
                    onClick={handleDelete}
                >
                        Delete
                </Button>
            </Card.Body>
        </Card>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
};

export default ContactItem;