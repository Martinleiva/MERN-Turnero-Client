import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Home from './components/inicio/Home';
import Login from './components/auth/Login';
import SingUp from './components/auth/SingUp';
import SingUpCliente from './components/auth/SingUpCliente';
import SingUpDuenio from './components/auth/SingUpDuenio';
import ForgetPass from './components/auth/ForgetPass';
import ResetPass from './components/auth/ResetPass';
import AlertState from './context/alerts/alertState';
import AuthState from './context/authentication/authState';
import EstablishmentState from './context/establishment/establishmentState';
import PrivateRouteOwner from './components/routes/PrivateRouteOwner';
import PrivateRouteClient from './components/routes/PrivateRouteClient';
import DashClient from './components/users/DashClient';
import DashOwner from './components/users/DashOwner';
import ClientSearch from './components/search/ClientSearch';
import SearchResult from './components/search/SearchResult';
import MyEstablishments from './components/establishment/MyEstablishments';
import ReservationClient from './components/reservation/client/ReservationClient';
import MyAccountOwner from './components/users/MyAccountOwner';
import MyAccountClient from './components/users/MyAccountClient';

//Private Routes
import PrivateRouteOwner from './components/routes/PrivateRouteOwner';
import PrivateRouteClient from './components/routes/PrivateRouteClient';
import MixRoute from './components/routes/MixRoute';

//Context
import AlertState from './context/alerts/alertState';
import ModalState from './context/modal/modalState';
import EstablishmentState from './context/establishment/establishmentState';
import ReservationState from './context/reservations/reservationState';
import AuthState from './context/authentication/authState';

function App() {
  
  return (
    <AlertState>  
      <ModalState>
      <EstablishmentState> 
      <ReservationState>                    
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/singup" component={SingUp} />
                <Route exact path="/singup-client" component={SingUpCliente} />
                <Route exact path="/singup-duenio" component={SingUpDuenio} />
                <Route exact path="/forget-pass" component={ForgetPass} />
                <Route exact path="/reset-pass" component={ResetPass} />
                <PrivateRouteClient exact path="/dash-client" component={DashClient} />
                <PrivateRouteClient exact path="/my-account-client" component={MyAccountClient} />
                <PrivateRouteClient exact path="/client-search" component={ClientSearch} />
                <MixRoute exact path="/search-result" component={SearchResult} />
                <Route exact path="/res-client" component={ReservationClient} />
                <PrivateRouteOwner exact path="/dash-owner" component={DashOwner} />
                <PrivateRouteOwner exact path="/my-establishments" component={MyEstablishments} />
                <PrivateRouteOwner exact path="/my-account-owner" component={MyAccountOwner} />
              </Switch>
            </Router>
          </AuthState>   
        </ReservationState>      
      </EstablishmentState> 
      </ModalState>                   
    </AlertState>    
  );
}

export default App;
