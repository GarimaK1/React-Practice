import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


class UserItem extends React.Component {
    render() {
        const { login, avatar_url} = this.props.user;

        return (
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={avatar_url} style={{ width: '5rem', height: '5rem' }} />
                <Card.Body>
                    <Card.Title>{login}</Card.Title>
                    <Link to={`/user/${login}`} >
                            More Info
                    </Link>
                </Card.Body>
            </Card>
        );
    }
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem;