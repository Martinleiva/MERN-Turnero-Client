import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/inicio/Home';
import Login from './components/auth/Login';
import SingUp from './components/auth/SingUp';
import SingUpCliente from './components/auth/SingUpCliente';
import SingUpDuenio from './components/auth/SingUpDuenio';

import AlertState from './context/alerts/alertState';
import AuthState from './context/authentication/authState';
import FieldState from './context/fields/fieldState';

import PrivateRouteOwner from './components/routes/PrivateRouteOwner';
import PrivateRouteClient from './components/routes/PrivateRouteClient';

import DashClient from './components/usuarios/DashClient';
import DashOwner from './components/usuarios/DashOwner';
import ReservationClient from './components/reservation/client/ReservationClient';


function App() {
  
  return (
    <AlertState>
      <FieldState>
        <AuthState>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/singup" component={SingUp} />
              <Route exact path="/singup-client" component={SingUpCliente} />
              <Route exact path="/singup-duenio" component={SingUpDuenio} />
              <PrivateRouteClient exact path="/dash-client" component={DashClient} />
              <Route exact path="/res-client" component={ReservationClient} />
              <PrivateRouteOwner exact path="/dash-owner" component={DashOwner} />
            </Switch>
          </Router>
        </AuthState>
      </FieldState>
    </AlertState>    
  );
}

export default App;
