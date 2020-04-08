import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/inicio/Home';
import Login from './components/auth/Login';
import SingUp from './components/auth/SingUp';
import SingUpCliente from './components/auth/SingUpCliente';
import SingUpDuenio from './components/auth/SingUpDuenio';
import AlertState from './context/alerts/alertState';
import AuthState from './context/authentication/authState';
import PrivateRoute from './components/routes/PrivateRoute';
import DashClient from './components/users/pages/DashClient';
import DashOwner from './components/users/pages/DashOwner';
import MyAccountOwner from './components/users/pages/MyAccountOwner';


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
            <PrivateRoute exact path="/dash-client" component={DashClient} />
            <PrivateRoute exact path="/dash-owner" component={DashOwner} />
            <PrivateRoute exact path="/dash-owner/my-account" component={MyAccountOwner} />
          </Switch>
        </Router>
      </AuthState>
    </AlertState>    
  );
}

export default App;
