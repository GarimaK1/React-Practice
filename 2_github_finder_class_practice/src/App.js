import React, { Fragment } from 'react';
import MyNavbar from "./components/layout/MyNavbar";
import Users from "./components/users/Users";
import AboutUs from "./components/pages/AboutUs";
import SearchUser from './components/users/SearchUser';
import UserInfo from './components/users/UserInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    loading: false,
    users: null,
    user: {}
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.initialUsers();
  }

  initialUsers = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users?
            client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
            client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({ users: response.data, loading: false });
    } catch (error) {
      console.error(error);
    }
  }

  searchUsers = async (searchText) => {
    try {
      this.setState({ loading: true });
      const response = await axios.get(`https://api.github.com/search/users?q=${searchText}&
            client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
            client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      // console.log('Search results: ', response.data.items);
      this.setState({ users: response.data.items, loading: false });
    } catch (error) {
      console.error(error);
    }
  }

  fetchUser = async (username) => {
    try {
      this.setState({ loading: true });
      const response = await axios.get(`https://api.github.com/users/${username}?
            client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
            client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      // console.log(response.data);
      this.setState({ user: response.data, loading: false });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { users, loading, user } = this.state;
    return (
      <BrowserRouter>
        <MyNavbar />
        <Switch>
          <Route exact path="/">
            <SearchUser searchUsers={this.searchUsers} />
            <Users users={users} loading={loading} />
          </Route>
          {/*
            If I needed to use Router props: match/history/location in SearchUser or Users,
            I would have used this option given below-  
            <Route exact path="/" render={props => (
            <div>
              <SearchUser {...props} searchUsers={this.searchUsers} />
              <Users {...props} users={users} loading={loading} />
            </div>
          )} /> */}
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/user/:login" render={props =>
            // Refer: https://reactjs.org/docs/render-props.html
            // Refer: https://reactjs.org/docs/jsx-in-depth.html#spread-attributes
            // Refer react-router-dom docs for more info on render.
            <UserInfo {...props} user={user} loading={loading} fetchUser={this.fetchUser} />
          }>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
