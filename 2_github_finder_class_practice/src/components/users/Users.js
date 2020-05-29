import React from 'react';
import UserItem from './UserItem';
import MySpinner from '../layout/MySpinner';
import PropTypes from 'prop-types';

export default class Users extends React.Component {

    render() {
        const { loading, users } = this.props;

        if (loading || !users) {
            return <MySpinner />
        }

        return (
            <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between' }}>
                {users.map(user => <UserItem key={user.id} user={user} />)}
            </div>
        );
    }
}

Users.propTypes = {
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array
};
