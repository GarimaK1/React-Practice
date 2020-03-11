import React, { Fragment } from 'react';
import Navbars from "./components/layout/Navbar";
import Users from './components/users/Users';
import Search from "./components/users/Search";
import MyAlert from './components/layout/Alert';   
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };
  async componentDidMount() {
    // right when the component loads
    // so making the http request to github right here when the component has just loaded.
    this.setState({loading: true});
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    // Get default users, limited to 30 by GitHub (default).
    this.initialUsers();
  }

  initialUsers = async () => {
    const responseData = await axios.get(`https://api.github.com/users?
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // console.log(responseData.data);
    this.setState({ users: responseData.data, loading: false });
  }

  // Search github users
  searchUsers = async (userStringToSearch) => {
    this.setState({ loading: true })
    // console.log("inside app.js " + userStringToSearch);
    const responseData = await axios.get(`https://api.github.com/search/users?q=${userStringToSearch}&page=1&per_page=20&
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // console.log(responseData.data.items);
    this.setState({ users: responseData.data.items, loading: false });
  }

  // Clear users from state 
  // As a by-product, clears github search results.
  clearUsers = () => {
    this.setState({ users: [], loading: false });
    this.initialUsers();
  }

  //Show custom alert
  setAlert = (message, type) => {
    this.setState({ alert: { message, type }});
    setTimeout(() => {
      this.setState({ alert: null})
    }, 4000);
  }

  render() { // lifecycle method. Runs when compontnt is loaded.
    return (
      <Fragment>
        <Navbars myTitle="Github Finder" iconProp="fab fa-github" />
        <Container fluid >
          <Row >
            <Col style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                <MyAlert alert={this.state.alert} />
            </Col>
          </Row>
          <Row >
            <Col style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
              <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} setAlert={this.setAlert} />
            </Col>
          </Row>
          <Row >
            <Col style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
              <Users loading={this.state.loading} users={this.state.users}/>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default App;
