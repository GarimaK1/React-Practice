import React, { Fragment, useState } from 'react';
import MyNavbar from "./components/layout/Navbar";
import Users from './components/users/Users';
import User from './components/users/User';
import Search from "./components/users/Search";
import MyAlert from './components/layout/Alert';
import About from "./components/pages/About";
import GithubState from "./context/github/GithubState";
import { BrowserRouter, Switch, Route } from "react-router-dom";   // BrowserRouter as Router
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  // cannot use useContext in App.js because it does not exist here. It exists inside
  // <GithubState>. To get a better picture, see components in chrome console.
  const [alert, setAlert] = useState(null);

  //Show custom alert
  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 4000);
  }
  return (
    <GithubState>
      <BrowserRouter>
        <Fragment>
          <MyNavbar myTitle="Github Finder" iconProp="fab fa-github" />
          <Container fluid >
            <Row >
              <Col style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                <MyAlert alert={alert} />
              </Col>
            </Row>
            <Switch>
              <Route exact path='/' render={props => (
                // Refer: https://reactjs.org/docs/render-props.html
                <Fragment>
                  <Row >
                    <Col style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                      <Search setAlert={showAlert} />
                    </Col>
                  </Row>
                  <Row >
                    <Col style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                      <Users />
                    </Col>
                  </Row>
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              )}
              />
            </Switch>
          </Container>
        </Fragment>
      </BrowserRouter>
    </GithubState>
  );
}

export default App;
