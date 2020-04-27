import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from './components/layout/Navbar';
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import ContactState from './context/contact/ContactState';

const App = () => {
  return (
    <ContactState>
      <Router>

        <Navbar />
        <Container fluid style={{ width: '80%', marginTop: '0.75rem' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutUs} />
          </Switch>
        </Container>

      </Router>
    </ContactState>
    
  );
}

export default App;
