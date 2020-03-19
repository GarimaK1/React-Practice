import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';

const UserItem = ({ user: { login, avatar_url, html_url }}) => { //props.user
    return (
        <Card bg="light" style={{ width: '10rem', alignItems: 'center', margin: '1rem' }}>
            <Card.Img
                variant="top"
                src={avatar_url}
                alt="User_Image"
                style={{
                    width: '5rem', height: '5rem'
                }} />
            <Card.Body>
                <Card.Title>{login}</Card.Title>
                {/* <Card.Link href={html_url}>
                    <Button variant="dark" className="btn-sm">More Info </Button>
                </Card.Link> */}
                {/* Using 'link to' instead of 'Card.Link href/a href' to preserve state  */}
                <Link to={`/user/${login}`}>
                    {/* See App.js where we use routing: <Route exact path='/user/:login' render={ props => ( */}
                    <Button variant="dark" className="btn-sm">More Info</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem;