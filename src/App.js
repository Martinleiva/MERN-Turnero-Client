import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/inicio/Home';
import Login from './components/auth/Login';
import SingUp from './components/auth/SingUp';
import SingUpCliente from './components/auth/SingUpCliente';
import SingUpDuenio from './components/auth/SingUpDuenio';
import Dash from './components/dash/Dash';

import AlertState from './context/alerts/alertState';
import AuthState from './context/authentication/authState';

import tokenAuth from './config/tokenAuth';
import PrivateRoute from './components/routes/PrivateRoute';

// Check for a token
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}

function App() {
  
  return (
    <AlertState>
      <AuthState>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/singup" component={SingUp} />
            <Route exact path="/singup-client" component={SingUpCliente} />
            <Route exact path="/singup-duenio" component={SingUpDuenio} />
            <PrivateRoute exact path="/dash" component={Dash} />
          </Switch>
        </Router>
      </AuthState>
    </AlertState>
  );
}

export default App;
