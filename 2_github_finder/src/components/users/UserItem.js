import React from "react";
import PropTypes from 'prop-types';

import { Card, Button } from 'react-bootstrap';

const UserItem = ({ user: { login, avatar_url, html_url }}) => { //props.user
    return (
        <Card bg="light" style={{ width: '18rem', alignItems: 'center', marginRight: '2rem' }}>
            <Card.Img
                variant="top"
                src={avatar_url}
                alt="User_Image"
                style={{
                    width: '5rem', height: '5rem'
                }} />
            <Card.Body>
                <Card.Title>{login}</Card.Title>
                <Card.Link href={html_url}>
                    <Button variant="primary" className="btn-sm">More Info..</Button>
                </Card.Link>
            </Card.Body>
        </Card>
    );
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem;