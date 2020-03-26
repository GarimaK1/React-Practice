import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

const Search = ({ clearUsers, searchUsers, setAlert }) => {
    // coz earlier, this.props.clearUsers, this.props.searchUsers and this.props.setAlert
    // In react, Form inputs are component level state

    // Using setState hook now that this is a functional component
    const [text, setText] = useState(''); // setting initial value of text to ''

    // e for event
    const onChange = (e) => setText(e.target.value); // { text: e.target.value }

    const onSubmit = e => {
        e.preventDefault();
        // console.log(e.target);
        if (text === '') {
            setAlert('Search field cannot be blank for search operation.', 'danger');
        } else {
            searchUsers(text); // setting this.state.text on searchUsers in/of App.js
            setText('');
        }

    }
    return (
        <Form onSubmit={onSubmit} style={{ flexBasis: '100%', margin: '1rem' }}>
            <Form.Group>
                <Form.Control type="text"
                    name="text"
                    placeholder="Search users"
                    value={text}
                    onChange={onChange}
                />
            </Form.Group>
            <Button variant="dark" type="submit" className="btn-block btn-sm">
                {/* above same as <Button variant="dark" type="submit" size="sm" block> */}
                    Submit
                </Button>
            <Button variant="light"
                type="button"
                size="sm"
                block
                onClick={clearUsers}
            >
                Clear Search Results
                </Button>
        </Form>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default Search;