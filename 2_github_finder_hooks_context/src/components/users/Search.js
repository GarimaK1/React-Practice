import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
    // coz earlier, this.props.clearUsers, this.props.searchUsers and this.props.setAlert

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    // Using setState hook now that this is a functional component
    // In react, Form inputs are component level state
    const [text, setText] = useState(''); // setting initial value of text to ''

    // e for event
    const onChange = (e) => setText(e.target.value); // { text: e.target.value }

    const onSubmit = e => {
        e.preventDefault();
        // console.log(e.target);
        if (text === '') {
            alertContext.setAlert('Search field cannot be blank for search operation.', 'danger');
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

export default Search;