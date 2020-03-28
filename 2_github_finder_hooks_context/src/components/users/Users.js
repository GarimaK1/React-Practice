import React, { useContext } from 'react';
import UserItem from "./UserItem";
import MySpinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => { // props has loading and users
    const githubContext = useContext(GithubContext);

    const { loading, users  } = githubContext;

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

const userStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between'
};

export default Users;
