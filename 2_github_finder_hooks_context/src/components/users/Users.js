import React, { useContext } from 'react';
import UserItem from "./UserItem";
import MySpinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';
import { useEffect } from 'react';

const Users = () => { // props has loading and users
    const githubContext = useContext(GithubContext);

    const { loading, users, initialUsers } = githubContext;

    // useEffect(() => {
    //     initialUsers();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    if (loading) {
        return (
            <MySpinner />
        )
    } else {
        // console.log(users.length);
        // if (users.length === 0) {
        //     return (
        //         <div style={userStyle}>
        //             <h6>No github users with this username!</h6>
        //         </div>
        //     )
        // }

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
