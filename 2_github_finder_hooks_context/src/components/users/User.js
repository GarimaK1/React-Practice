import React, { Fragment, useEffect, useContext } from 'react';
import MySpinner from "../layout/Spinner";
import { Link } from 'react-router-dom';
import { Container, Button, Row, Card } from 'react-bootstrap';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => { // extracting from props

    const githubContext = useContext(GithubContext);

    const { user, loading, getUserFromGitHub, repos, getUserRepos } = githubContext;

    useEffect(() => {
        getUserFromGitHub(match.params.login);
        getUserRepos(match.params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , []);

    const {
        name,
        avatar_url,
        location,
        bio,
        html_url,
        hireable
    } = user;

    if (loading) {
        return (
            <MySpinner />
        )
    }
    return (
        <Container style={{ marginTop: '1rem' }}>
            <Row>
                <Link to="/">
                    <Button variant="light" size="sm">Back to Search</Button>
                </Link>
            </Row>
            <Row>
                <Card style={{ width: '18rem', alignItems: 'center', marginTop: '1rem' }}>
                    <Card.Img
                        variant="top"
                        src={avatar_url}
                        alt="User_Image"
                        style={{
                            width: '7rem', height: '7rem'
                        }} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        {location && <Card.Text>
                            Location: {location}
                        </Card.Text>}
                    </Card.Body>
                </Card>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column' }}>
                {bio && <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                    <h4>Bio: </h4>
                    <div>{bio}</div>
                </div>}

                {hireable && <Fragment>
                    <h4>Hireable: <span>{hireable ? <i className="fas fa-check" /> : <i className="fas fa-times" />}</span></h4>
                </Fragment>}

                <p style={{ marginTop: '1rem' }}>
                    <Button href={html_url} size="sm" variant="primary" >Github Profile</Button>
                </p>
            </Row>
            <Row>
                <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                    <h4>Recently Updated Repositories: </h4>
                    <Repos repos={repos} />
                </div>
            </Row>
        </Container>
    )
}

export default User;
