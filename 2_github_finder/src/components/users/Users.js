import React from 'react';
import PropTypes from 'prop-types';
import UserItem from "./UserItem";
import MySpinner from '../layout/Spinner';

const Users = ({ loading, users }) => { // props has loading and users
    if (loading) {
        return (
            <MySpinner />
        )
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

const userStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
};

export default Users;
