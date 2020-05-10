import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from './components/layout/Navbar';
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>

          <Navbar />
          <Container fluid style={{ width: '70%', marginTop: '0.75rem' }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={AboutUs} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </Container>

        </Router>
      </ContactState>
    </AuthState>
  );
}

export default App;
