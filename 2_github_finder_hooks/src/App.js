import React, { Fragment, useState, useEffect } from 'react';
import MyNavbar from "./components/layout/Navbar";
import Users from './components/users/Users';
import User from './components/users/User';
import Search from "./components/users/Search";
import MyAlert from './components/layout/Alert';
import About from "./components/pages/About";
import { BrowserRouter, Switch, Route } from "react-router-dom";   // BrowserRouter as Router
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    setLoading(true);
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    // Get default users, limited to 30 by GitHub (default).
    initialUsers();
  }, []); 

  // Get default 30 users from Github
  const initialUsers = async () => {
    const responseData = await axios.get(`https://api.github.com/users?
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // console.log(responseData.data);
    setUsers(responseData.data);
    setLoading(false);
  }

  // Search github users
  const searchUsers = async (userStringToSearch) => {
    setLoading(true);
    // console.log("inside app.js " + userStringToSearch);
    const responseData = await axios.get(`https://api.github.com/search/users?q=${userStringToSearch}&page=1&per_page=20&
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // console.log(responseData.data.items);
    setUsers(responseData.data.items);
    setLoading(false);
  }

  // Clear users from state 
  // As a by-product, clears github search results.
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
    initialUsers();
  }

  // get a specific user from github api
  const getUserFromGitHub = async (username) => {
    setLoading(true);
    const responseData = await axios.get(`https://api.github.com/users/${username}?page=1&per_page=20&
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // console.log(responseData);
    setUser(responseData.data);
    setLoading(false);
  }

  // Show github user repos (first 5):
  const getUserRepos = async (username) => {
    setLoading(true);
    const responseData = await axios.get(`https://api.github.com/users/${username}/repos?page=1&per_page=5&sort=updated&order=desc&
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // console.log(responseData);
    setRepos(responseData.data);
    setLoading(false);
  }

  //Show custom alert
  const showAlert = (message, type) => {
    setAlert({message, type});
    setTimeout(() => setAlert(null), 4000);
  }
    return (
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
                      <Search searchUsers={searchUsers} clearUsers={clearUsers} setAlert={showAlert} />
                    </Col>
                  </Row>
                  <Row >
                    <Col style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                      <Users loading={loading} users={users} />
                    </Col>
                  </Row>
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                // Refer: https://reactjs.org/docs/render-props.html
                // Refer: https://reactjs.org/docs/jsx-in-depth.html#spread-attributes
                <User {...props}
                  getUser={getUserFromGitHub}
                  user={user}
                  loading={loading}
                  getUserRepos={getUserRepos}
                  repos={repos}
                />
              )}
              />
            </Switch>
          </Container>
        </Fragment>
      </BrowserRouter>
    );
}

export default App;
