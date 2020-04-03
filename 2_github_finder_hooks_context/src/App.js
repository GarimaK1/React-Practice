import React, { Fragment } from 'react';
import MyNavbar from "./components/layout/Navbar";
import User from './components/users/User';
import MyAlert from './components/layout/Alert';
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import GithubState from "./context/github/GithubState";
import { BrowserRouter, Switch, Route } from "react-router-dom";   // BrowserRouter as Router
import { Container, Row, Col } from 'react-bootstrap';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';

const App = () => {
  // cannot use useContext in App.js because it does not exist here. It exists inside
  // <GithubState>. To get a better picture, see components in chrome console.

  return (
    <GithubState>
      <AlertState>
      <BrowserRouter>
        <Fragment>
          <MyNavbar myTitle="Github User Search" iconProp="fab fa-github" />
          <Container fluid >
            <Row >
              <Col style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                <MyAlert />
              </Col>
            </Row>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              <Route component={NotFound} />
              />
            </Switch>
          </Container>
        </Fragment>
      </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
