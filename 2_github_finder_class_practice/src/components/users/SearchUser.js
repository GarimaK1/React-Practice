import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export default class SearchUser extends React.Component {
    state = {
        searchText: ''
    }

    handleChange = (e) => {
        this.setState({searchText: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.searchUsers(this.state.searchText);
        this.setState({searchText: ''});
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Control 
                        type="text" 
                        name="searchText" 
                        placeholder="Search github login"
                        value={this.state.searchText}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" size="sm" block>
                    Submit
                </Button>
            </Form>
        );
    }
}

SearchUser.propTypes = {
    searchUsers: PropTypes.func.isRequired
};