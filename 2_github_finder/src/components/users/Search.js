import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

class Search extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired
    }

    // e for event
    onChange = (e) => this.setState({ [e.target.name]: e.target.value }); // { text: e.target.value }

    onSubmit = e => {
        e.preventDefault();
        // console.log(this.state.text);
        // console.log(e.target);
        if (this.state.text === '') {
            this.props.setAlert('Search field cannot be blank for search operation.', 'danger');
        } else {
            this.props.searchUsers(this.state.text); // setting this.state.text on searchUsers in/of App.js
            this.setState({ text: '' });
        }

    }

    render() {
        return (
            <Form onSubmit={this.onSubmit} style={{ flexBasis: '100%', margin: '1rem' }}>
                <Form.Group>
                    <Form.Control type="text"
                        name="text"
                        placeholder="Search users"
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                </Form.Group>
                <Button variant="dark" type="submit" className="btn-block btn-sm">
                    Submit
                </Button>
                <Button variant="light"
                    type="button"
                    className="btn-block btn-sm"
                    onClick={this.props.clearUsers}
                >
                    Clear Search Results
                </Button>
            </Form>
        )
    }
}

export default Search;