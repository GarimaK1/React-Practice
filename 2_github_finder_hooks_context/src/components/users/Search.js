import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import GithubContext from "../../context/github/githubContext";

const Search = ({ setAlert }) => {
    // coz earlier, this.props.clearUsers, this.props.searchUsers and this.props.setAlert
    // In react, Form inputs are component level state

    const githubContext = useContext(GithubContext);

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
            githubContext.searchUsers(text); // setting this.state.text on searchUsers in/of App.js
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
                onClick={githubContext.clearUsers}
            >
                Clear Search Results
                </Button>
        </Form>
    )
}

Search.propTypes = {
    setAlert: PropTypes.func.isRequired
}

export default Search;