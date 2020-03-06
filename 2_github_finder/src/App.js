import React from 'react';
import Navbars from "./components/layout/Navbar";
import Users from './components/users/Users';
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends React.Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    //right when the component loads
    this.setState({loading: true});
    const responseData = await axios.get('https://api.github.com/users');
    console.log(responseData.data);
    this.setState({users: responseData.data, loading: false});
  }
  render() { // lifecycle method. Runs when compontnt is loaded.
    return (
      <div className="App">
        <Navbars myTitle="Github Finder" iconProp="fab fa-github" />
        <Container fluid >
          <Row >
            <Col style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
              <Users loading={this.state.loading} users={this.state.users}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
