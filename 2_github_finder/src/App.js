import React from 'react';
import Navbars from "./components/layout/Navbar";
import Users from './components/users/Users';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends React.Component {
  render() { // lifecycle method. Runs when compontnt is loaded.
    return (
      <div className="App">
        <Navbars myTitle="Github Finder" iconProp="fab fa-github" />
        <Container fluid >
          <Row >
            <Col style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
              <Users />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
