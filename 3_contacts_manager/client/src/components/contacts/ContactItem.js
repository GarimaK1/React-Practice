import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => { // props.contact

    const { id, name, email, phone, type } = contact;

    return (
        <Card
            bg="light"
            style={{ width: '18rem' }}
            className="text-center"
        >
            <Card.Body>
                <Card.Title >
                    {name} 
                    <h6>
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
                <Button variant="primary" size="sm" style={{ width: '4rem' }}>Edit</Button>
                <span>{' '}</span>
                <Button variant="danger" size="sm" style={{ width: '4rem' }}>Delete</Button>
            </Card.Body>
        </Card>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
};

export default ContactItem;