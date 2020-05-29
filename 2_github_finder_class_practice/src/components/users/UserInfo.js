import React, { Component } from 'react';
import MySpinner from '../layout/MySpinner';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

class UserInfo extends Component {
    componentDidMount() {
        // console.log(this.props.match.params.login);
        this.props.fetchUser(this.props.match.params.login);
    }

    render() {
        const { user, loading } = this.props;
        const { avatar_url, id, login, name, url } = user;
        

        if (loading || !user) {
            return <MySpinner />
        } 
        return (
            <div style={{margin: '2rem'}}>
                <Button onClick={this.props.history.goBack} size="sm">Go Back</Button>
                {/* <Button onClick={() => console.log(this.props)} size="sm">Go Back</Button> */}
                <p>ID: {id}</p>
                <p>Login: {login}</p>
                <p>Name: {name}</p>
                <p>URL: {url}</p>
                <p>Avatar_URL: {avatar_url}</p>
            </div>
        );
    }
}

UserInfo.propTypes = {
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
}

export default UserInfo;