import React from 'react';
import PropTypes from 'prop-types';
import Card from "react-bootstrap/Card";

const RepoItem = ({ repo }) => {
    return (
        <Card style={{ marginTop: '1rem' }}>
            <Card.Body>
                <a href={repo.html_url}>
                    <Card.Title>{repo.name}</Card.Title>
                </a>
                <Card.Text>
                    Description: {repo.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
};

export default RepoItem;