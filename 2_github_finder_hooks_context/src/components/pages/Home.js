import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import Search from '../users/Search';
import Users from '../users/Users';

const Home = () => (
    <Fragment>
        <Row>
            <Col style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                <Search />
            </Col>
        </Row>
        <Row>
            <Col style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                <Users />
            </Col>
        </Row>
    </Fragment>
)

export default Home;